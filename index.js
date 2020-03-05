const obj={
  rollnum : 89,
  name :'sound' ,
  age : 22,
  college :'srec',
  city : 'Cbe',
  gender : 'F',
setrollnum: function(rollnum)
{
  this.rollnum=rollnum;
},
getrollnum: function()
{
  return this.rollnum;
},
setName: function(name)
{
  this.name=name;
},
getName : function()
{
  return this.name;
},
setAge: function(age)
{
  this.age=age;
},
getAge : function()
{
  return this.age;
},
setCollege: function(college)
{
  this.college=college;
},
getCollege : function()
{
  return this.college;
},
setCity: function(city)
{
  this.city=city;
},
getCity : function()
{
  return this.city;
},
setGender: function(gender)
{
  this.gender=gender;
},
getGender : function()
{
  return this.gender;
},
}

let name=obj.getName();
console.log('Name :',name);
let rollnum=obj.getrollnum();
console.log('Rollnum:',rollnum);
let age=obj.getAge();
console.log('Age :',age);
let age=obj.getAge();
console.log('Age :',age);
let college=obj.getCollege();
console.log('College :',college);
let city=obj.getCity();
console.log('City :',city);
let gender=obj.getGender();
console.log('Gender :',gender);
obj.setName('abi');
name= obj.getName()
console.log('Name :',name);
obj.setrollnum(32);
id= obj.getrollnum();
console.log('rollnum:',rollnum);
obj.setAge(22);
age= obj.getAge()
console.log('Age:',age);
obj.setCollege('srec');
college= obj.getCollege()
console.log('College:',college);
obj.setCity('cbe');
city= obj.getCity()
console.log('City:',city);
obj.setGender('F');
gender= obj.getGender()
console.log('Gender:',gender);
//------------------------------------------------------------------------















