const gulp=require('gulp');
const LoadPlugins=require('gulp-load-plugins')();
const Open=require('open');
gulp.task('js',function(){
  gulp.src('./index.js')
  .pipe(LoadPlugins.connect.reload())
});
gulp.task('html',function(){
  gulp.src('./index.html')
  .pipe(LoadPlugins.connect.reload())
});
gulp.task('serve',function(){
  LoadPlugins.connect.server({
    root:'./',
    livereload:true,
    port:1111
  });
  Open('http://localhost:1111');
  gulp.watch('./index.js',['js'])
});
gulp.task('default',['serve']);