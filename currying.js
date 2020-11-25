/*
let fun_one = () => {
  console.log("fun_one");
  return () => {
    console.log("fun_two");
    return () => {
      console.log("fun_three");
      return () => {
        console.log("fun_four");
        return () => {
          console.log("fun_five");
        };
      };
    };
  };
};

// fun_one(); //fun_one
// fun_one()(); //fun_one fun_two
// fun_one()()(); //fun_one fun_two fun_three

fun_one()()()()(); //fun_one fun_two fun_three fun_four fun_five
*/

let fun_one = () => {
  console.log("fun_one");
  return fun_two;
};

let fun_two = () => {
  console.log("fun_two");
  return fun_three;
};

let fun_three = () => {
  console.log("fun_three");
  return fun_four;
};

let fun_four = () => {
  console.log("fun_four");
  return fun_five;
};

let fun_five = () => {
  console.log("fun_five");
};

//fun_one; //fun_one definition
//fun_one(); //fun_one
fun_two(); //fun_two
