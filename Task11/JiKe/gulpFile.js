// 'use strict';
//引入组件
var gulp = require('gulp');

var sass = require('gulp-sass');//编译sass
var autoprefixer = require('gulp-autoprefixer');//自动补全css样式前缀
var concat=require('gulp-concat');//合并文件
var browserify = require('gulp-browserify');//js依赖管理
var uglify = require('gulp-uglify');//压缩js 
var cssmin = require('gulp-minify-css');//压缩css
var htmlmin = require('gulp-htmlmin');//压缩html      
var rev = require('gulp-rev');//对文件名加MD5戳
var revCollector = require('gulp-rev-collector'); //路径替换
var imagemin = require('gulp-imagemin');//图片压缩
var pngquant = require('imagemin-pngquant');//图片压缩设置
var rename = require('gulp-rename');//更改文件名
var revReplace = require('gulp-rev-replace');
var runSequence = require('run-sequence'); //用于按顺序执行 gulp 任务的插件

var browserSync = require('browser-sync').create();//浏览器自动刷新
var reload= browserSync.reload;//刷新


/************** 开发环境reload 命令：gulp dev **************/
// scss文件处理
gulp.task('sass',function(){
	return gulp.src('./src/*.scss')
		.pipe(sass())
		.pipe(autoprefixer({
	        // browsers: ['last 30 versions'],
	        cascade: true, //是否美化属性值 默认：true
	        remove:true //是否去掉不必要的前缀 默认：true
	    }))
		.pipe(gulp.dest('./app/styleSheet/'));
});
// css文件合并压缩
gulp.task('css',function(){
	return gulp.src('./app/styleSheet/*.css')
		.pipe(concat('all.css'))
		.pipe(cssmin())
		.pipe(rename('all.min.css'))
		.pipe(gulp.dest('./app/styleSheet/'))
		.pipe(reload({stream: true}));
});

// js文件合并压缩
gulp.task('js', ['libs'], function(){
	gulp.src('./src/jikeClasses.js')
		.pipe(browserify())
		.pipe(uglify())
        .pipe(rename('all.min.js'))
		.pipe(gulp.dest('./app/js/'))
		.pipe(reload({stream: true}));
});

//libs任务
gulp.task('libs',function(){
    return gulp.src([
            'src/jquery-3.1.0.js'
        ])
        .pipe(gulp.dest('./app/js/'));
});

//监听任务,文件变动后执行相应的任务：
// gulp.task('watch',function(){
//     // gulp.watch('./app/stylesheet/sass/*.scss',['scss','css']);
//     gulp.watch('./app/js/*.js',['js']);
// });

//按顺序执行gulp任务
gulp.task('dev', function() {

     //中括号中为并行
    runSequence('sass',
        ['css', 'js']
        // ,'watch'
    );
    // 静态服务器
    browserSync.init({
        server: "./app"
    });
    // 监听文件变化，刷新页面
    gulp.watch([
        './app/**/*.*'
    ]).on('change', reload);
});


/************** 产品上线，加MD5后缀，更改路径 命令：gulp release **************/
// 图片压缩,加戳
gulp.task('imagemin',function(){
	return gulp.src('./app/icon/*.+(jpeg|jpg|png)')//另一种写法：/*.{png,jpg,jpeg}
	.pipe(imagemin({
		progressive:true,//显示进度
		use:[pngquant({quality:'65-80'})]//将压缩比例控制在百分之65-80之间，以免图片过度模糊
	}))
	.pipe(rev())
	.pipe(gulp.dest('./JiKeClasses/icon/'))//输出文件
	.pipe(rev.manifest('icon.json'))//生成json文件，储存替换内容的键值对
	.pipe(gulp.dest('./iconRev'));//输出json文件
});

//css加MD5后缀
gulp.task('cssMd5',function () {
    return gulp.src('./app/styleSheet/all.min.css')
        .pipe(rev())
        .pipe(gulp.dest('./JiKeClasses/styleSheet/'))
        .pipe(rev.manifest('css.json'))
        .pipe(gulp.dest('./rev'));
});

//js加MD5后缀
gulp.task('jsMd5',function() {
    gulp.src('./app/js/all.min.js')
        .pipe(rev())
        .pipe(gulp.dest('./JiKeClasses/js/'))
        .pipe(rev.manifest('js.json'))
        .pipe(gulp.dest('./rev'));
});


//更改css和html文件中的图片名称
gulp.task('cssImagerev',function(){
    return gulp.src(['./iconRev/icon.json','./JiKeClasses/styleSheet/*']) //读取json文件以及需要替换文件名的文件
        .pipe(revCollector())//根据json更改文件中的相应内容
        .pipe(gulp.dest('./JiKeClasses/styleSheet'));//输出
});
gulp.task('htmlImagerev',function(){
    return gulp.src(['./iconRev/icon.json','./app/index.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('./JiKeClasses/'));
});

//压缩html
gulp.task('htmlminfy',function() {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true//压缩HTML
        // collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        // removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        // removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        // removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        // minifyJS: true,//压缩页面JS
        // minifyCSS: true//压缩页面CSS
    };
    console.log("23432424");
    gulp.src('./JiKeClasses/index.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./JiKeClasses/'))
        .pipe(reload({stream: true}));
});

//更改html中的图片名称，js、css路径

gulp.task('htmlrev',function(){
    gulp.src(['./rev/*.json','./JiKeClasses/index.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('./JiKeClasses/'));
});


gulp.task('serve', function(){
    browserSync.init({
        server: "./JiKeClasses"
    });
});

//按顺序执行gulp任务
gulp.task('release',function() {

    runSequence(
        ['css', 'js','imagemin'],
        ['cssMd5','jsMd5'],
        ['cssImagerev','htmlImagerev'],
        'htmlrev',
        'htmlminfy',
        ['serve']
    );
});