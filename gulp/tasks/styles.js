var gulp = require("gulp");
var postcss = require("gulp-postcss");
var atImport = require("postcss-import");
var mixins = require("postcss-mixins");
var nested = require("postcss-nested");
var cssVars = require("postcss-simple-vars");
var hexrgba = require("postcss-hexrgba");
var autoprefixer= require("autoprefixer");


gulp.task("styles",function(){
	
	return gulp.src("./app/assets/styles/styles.css")
			.pipe(postcss([
				atImport,
				cssVars,
				mixins,
				nested,
				hexrgba,
				autoprefixer
				
				]))

			.on("error", function(errorInfo){
				console.log(errorInfo.toString());
				this.emit("end");

			})
			
			.pipe(gulp.dest("./app/temp/styles"));
});


// .on('error', function(errorInfo){
// 				console.log(errorInfo.toString());
// 				this.emit('end');
// 			})