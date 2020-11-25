/*
let obj = {
  num1: 10,
};

function my_fun() {
  console.log(this.num1 + 10); //20
}

//my_fun();
my_fun.call(obj);
*/

let obj = {
  num1: 10,
  num2: 20,
};

function my_fun(arg1, arg2, arg3) {
  //this is the keyword with object oriented.
  console.log(this.num1 + this.num2 + arg1 + arg2 + arg3); //150
  //this means obj
}

my_fun.call(obj, 30, 40, 50); //150
my_fun.call(obj, -10, -10, -10); //0

let arr = [100, 200, 300];
my_fun.apply(obj, arr); // 630

let arr1 = [-10, -10, -10, -10];
my_fun.apply(obj, arr1); //0

let final_fun = my_fun.bind(obj);
final_fun(10, 10, 10); //60

my_fun.bind(obj)(-10, -10, -10); // 0
