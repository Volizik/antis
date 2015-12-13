import gulp from 'gulp';
import plumber from 'gulp-plumber';
import spritesmith from 'gulp.spritesmith';
import imagemin from 'gulp-imagemin';
import errorHandler from 'gulp-plumber-error-handler';

gulp.task('sprite', () => {
	const spriteData = gulp.src('app/sprite/**/*.png', {read: false})
		.pipe(plumber({errorHandler: errorHandler('Error in sprite task')}))
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.styl',
			imgPath: '../images/sprite.png',
			cssFormat: 'stylus',
			algorithm: 'binary-tree',
			padding: 8,
			engine: 'pngsmith',
			imgOpts: {
				format: 'png'
			}
		}));

	spriteData.img
		.pipe(imagemin({optimizationLevel: 3}))
		.pipe(gulp.dest('dist/assets/images'));

	return spriteData.css.pipe(gulp.dest('app/styles/helpers'));
});