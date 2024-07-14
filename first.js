let fname="Sanoop A"; // string
var age=20;           // integer      var and let are both similar but var is no longer used
let rent=100.0789;    // float
var flag=true;        //boolean
x=null;           // empty variable
y=undefined;      //another type of special variable
if(flag){
    console.log("Did i even try if statement");
}
console.log("Hello "+fname+" welcome to JS");
console.log("is it good time to start")
console.log("His age is "+age);

{
    let name="JS";
    console.log(name);
}
{
    let name="Java";
    console.log(name);
}


const student={
    fname:"Sanoop Ananth",
    age:20,
    phoneNum:9606199672,
    cgpa: 9.79,
    isPass: true
};
console.log(student["phoneNum"]);
console.log(student.phoneNum); // second way of accessing object value

student["age"]+=1;
console.log(student.age);