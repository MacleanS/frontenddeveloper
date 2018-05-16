import gulp from "gulp";
import gulpSequence from "gulp-sequence";
import gutil from "gulp-util";
import del from "del";
import app from "./src/server/app.js";


gulp.task('build', function (cb) {
    // TODO either add a build step here that builds the code & moves it to the target/ folder, or add a different build process & document in README.md
});

gulp.task('watch', function () {
    gulp.watch('src/main/**/*', ['build']);
});

gulp.task('server', function() {
    app.listen(3456);

    gutil.log('Online at http://localhost:3456/');

    return app;
});

gulp.task('default', gulpSequence('clean', 'build', ['watch', 'server']));

gulp.task('clean', function () {
    return del('target/');
});
