/**
 * Created by prettyRain on 2018/12/24.
 */

var Student = require('./models/Student.js');

//实例化类
/*var tom = new Student({"name":"tom",age:12,sex:"男"});
tom.save(function(err){
    console.log('保存成功');
})*/
//
/*Student.create({"name":"anli",age:13,sex:"女"},function(err){
    console.log("保存成功");
})*/

/*Student.add({"name":"jkon","age":15,sex:"男"},function(err,result){
    console.log(result);
})*/
/*var tom = new Student({"name":"tom",age:12,sex:"男"});
 tom.add(function(err){
 console.log('保存成功');
 })*/

Student.queryStudent({name:"tom"},function(err,result){
    console.log(result);
})

var tom = new Student({name:"tom"});
tom.queryStudent(function(err,result){
    console.log(result);
})

Student.updateStudentMany({name:"tom"},{$set:{age:15}},{},function(err,result){
    console.log(result);
})



