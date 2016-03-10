var gulp = require('gulp'),
    browserify = require('browserify'),
    glob = require('glob'),
    es = require('event-stream'),
    source = require("vinyl-source-stream"),
    poststylus = require('poststylus'),
    rucksack = require('rucksack-css'),
    lost = require('lost'),
    rupture = require('rupture'),
    autoprefixer = require('autoprefixer-stylus'),
    plugins =  require('gulp-load-plugins')({
        camelize: false
    });

var config = {
    dev: "app/src/",
    dest: "public/assets/",
    production: false
};


var tasks = {
    compileCss: function(){
        return gulp.src(config.dev + "styles/*.styl")
            .pipe(plugins.plumber({
            	errorHandler:function(err){
            		console.log(err);
   	 				this.emit('end');
            	}
            }))
            .pipe(plugins.stylint())
            .pipe(plugins.stylus({
               use: [poststylus(rucksack), poststylus('lost'), autoprefixer(), rupture()],
               compress: config.production
            }))
            .pipe(gulp.dest(config.dest + "styles/"));
    },

    lintCss: function(){
        return gulp.src(config.dest + "styles/*.css")
                .pipe(plugins.csslint("csslintrc.json"))
                .pipe(plugins.csslint.reporter());
    },

    bundleJs: function(done){
        glob(config.dev + "js/*.js", function(err, files){
            if (err) { throw err;}
            var bundles = files.map(function(file){
                var bundle = browserify(file, {debug: true})
                .bundle();

                return bundle
                .pipe(plugins.plumber())
                .pipe(source(file.replace(config.dev + "js/", "")))
                .pipe(config.production === true ? plugins.streamify(plugins.uglify()) : plugins.util.noop())
                .pipe(gulp.dest(config.dest + "js/"));
            });
            es.merge(bundles).on("end", done);
        });
    },

    lintJs: function(){
        return gulp.src([
            "gulpfile.js",
            config.dev + "js/**/**/*.js",
            config.dev + "js/**/*.js",
            config.dev + "js/*.js"
            ])
        	.pipe(plugins.plumber())
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter('default'));
    }
};


gulp.task("compileCss", tasks.compileCss);
gulp.task("bundleJs", tasks.bundleJs);
gulp.task("lintCss", tasks.lintCss);
gulp.task("lintJs", tasks.lintJs);
gulp.task("build", function(done){
    config.production = true;
    tasks.bundleJs(done);
    tasks.compileCss(done);
});
gulp.task('default', ['watch']);

gulp.task('watch', ['compileCss', "bundleJs"], function(){
    gulp.watch(config.dev + "styles/**/*.styl", ["lintCss","compileCss"]);
    gulp.watch(config.dev + "js/**/*.js", ["lintJs", "bundleJs"]);
});

gulp.task('debug', ["lintCss", "lintJs"]);
