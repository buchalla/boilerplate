var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require("vinyl-source-stream"),
    poststylus = require('poststylus'),
    rucksack = require('rucksack-css'),
    lost = require('lost'),
    autoprefixer = require('autoprefixer-stylus'),
    plugins =  require('gulp-load-plugins')({
        camelize: false
    });

var config = {
    dev: "app/src/",
    dest: "public/assets/"
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
               use: [poststylus(rucksack), poststylus('lost'), autoprefixer()],
               compress: false
            }))
            .pipe(gulp.dest(config.dest + "styles/"));
    },

    lintCss: function(){
        return gulp.src(config.dest + "styles/*.css")
                .pipe(plugins.csslint("csslintrc.json"))
                .pipe(plugins.csslint.reporter());
    },

    bundleJs: function(){
        var bundler = browserify(config.dev + "js/main.js", {
            debug: true
        });

        var rebundle = function() {
            return bundler.bundle()
            	.on('error', function(err){
            		console.log(err.message);
      				this.emit('end');
            	})
                .pipe(source("build.js"))
                .pipe(gulp.dest(config.dest + "js/"));
        };

        bundler.on("update", rebundle);

        return rebundle();
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

gulp.task('default', ['watch']);

gulp.task('watch', ['compileCss', "bundleJs"], function(){
    gulp.watch(config.dev + "styles/**/*.styl", ["lintCss","compileCss"]);
    gulp.watch(config.dev + "js/**/*.js", ["lintJs", "bundleJs"]);
});

gulp.task('debug', ["lintCss", "lintJs"]);
