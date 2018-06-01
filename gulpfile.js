const gulp=require('gulp');
const $=require('gulp-load-plugins')();
const open=require('open');
gulp.task('serve',function(){
  $.connect.server({
    root: './dist/',
    livereload: true,
    port: 3333
 })
 open('http://localhost:3333');
})
gulp.task('default', ['serve'])
