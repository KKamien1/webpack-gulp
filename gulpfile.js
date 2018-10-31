const gulp = require("gulp");
const watch = require("gulp-watch");

gulp.task("default", function() {
  console.log("Gulp default :");
});

gulp.task("watch", function() {
  watch("./app/index.html", function() {
    gulp.start("default");
  });
});
