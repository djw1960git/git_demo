'use strict'

var gulp=require('gulp');
var less=require('gulp-less');//less语法格式化
var concat=require('gulp-concat');//文件合并
var cssnano=require('gulp-cssnano');//css压缩
var uglify=require('gulp-uglify');//混淆压缩
var htmlmin=require('gulp-htmlmin');//html压缩