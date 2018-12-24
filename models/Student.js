/**
 * Created by prettyRain on 2018/12/24.
 * student骨架
 * model : 由Schema构造生成的模型，除了Schema定义的数据库骨架以外，
 *         还具有数据库操作的行为，类似于管理数据库属性、行为的类
 */

var mongoose = require('mongoose');

var db = require('./db.js');
/**
 * schema :一种以文件形式存储的数据库模型骨架，无法直接通往数据库端，也就
 *         是说它不具备对数据库的操作能力.可以说是数据属性模型(传统意义的
 *         表结构)，又或着是“集合”的模型骨架
 */
var studentSchema = mongoose.Schema({
    name : {type:String},
    age  : {type:Number},
    sex  : {type:String}
})
/**
 * 自定义类方法
 */
//插入数据
studentSchema.statics.add = function(paramJSON,callback){
    this.model('Student').create(paramJSON,function(err,result){callback(err,result)});//类方法
}
//查询数据
studentSchema.statics.queryStudent = function(paramJSON,callback){
    console.log(this.model);
    //this.model('Student'):Student 模型
    this.model('Student').find(paramJSON,callback);//类方法
}
//修改数据
studentSchema.statics.updateStudentMany = function(whereStr,updateStr,options,callback){
    this.model('Student').updateMany(whereStr,updateStr,options,callback);//类方法
}
/**
 * 自定义实例方法
 */
//插入数据
studentSchema.methods.add = function(callback){
    //this:student实例对象
    this.save(callback);//实例方法
}
//查询数据
studentSchema.methods.queryStudent = function(callback){
    console.log(this.model);
    //this.model('Student'):Student 模型
    this.model('Student').find({name:this.name},callback);//类方法
}
var student = db.model('Student',studentSchema);

module.exports = student;

