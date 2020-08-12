/*
function Batch() {
    alert("inline javascript working");
}
OUTPUT
//Popups output type
alert('heloo how r u');
confirm('please confirm do u like my class');
prompt('enter your name');

//Property output types
document.write (
    'hello fulstack learn javascript'
);
document.getElementById("template").innerHTML = "ok guys";
document.getElementById("template").innerText = "<h1>ok guys</h1>";

console.log("hey devlopers how r u");

var user_name = "shashi";//string data type
var company = "Jspiders";
var designation = "html developer";

console.log("my name is " + user_name + " i work for " + company + " designation" + designation);
console.log(typeof (company));

var newwayCallString = `thi is string
asdfs
safggaweg
wegwf
qrfweg
affqwf`; //bactics this is es6 bew feature Template String to useful multiple lines
console.log(typeof newwayCallString);







//es6 new way can call string data type that is Template String
//interpolation or expresssion and you use multiline text

var name = "asdf";
var age = 20;//number
var company = "qwedfgbn";
var salary = 20000; //number

document.write("my name is " + name + "my age is " + age + "i work for " + company + "i am getting " + salary + "salary");

//interpolation /expression

//es6 way call variables

document.write("<h1>My Name is </h1> ${2 + 2}");
document.write(`<h1>My Name is ${name}</h1>
<p>My age is : ${age}</p>
<p> i work for ${company}</p>
<p>i am getting ${salary}</p>
`)





var Login = "Login Form";

document.write(`
    <section>
        <div>
            <h1>${Login}</h1>
        </div>
        <div>
            <label>Username</label>
            <input type="text" placeholder="enter username">
        </div>
        <div>
            <label>Password</label>
            <input type="password" placeholder="enter Password">
        </div>
        <div>
            <button>Login</button>
        </div>
    </section>
`);






//Primitive ways can declare strings
var str1 = "qwe";
var str2 = 'rty';
var str3 = `iop`;//new ecmascript way

console.log(typeof str3); //how to check datatype in javascript with help of typeof

//Object ref way

var str4 = new String("This is Object way can call string");
console.log(typeof str4); //not string that is Object

//data type conversion need convert Object into string with help of valueOf() method
//its convert object ref into primitive type;

var PrimitiveData = str4.valueOf(); //its converted into primitive

console.log(typeof PrimitiveData);






//Number

//number type

var count = 10;
var price = 10.7;

var NumberWithObject = new Number(2);

console.log(count);
console.log(price);

console.log(typeof count);
console.log(typeof price);

console.log(NumberWithObject);
console.log(typeof NumberWithObject); //object

var PrimtivewithNumber = NumberWithObject.valueOf();//type conversion
console.log(typeof PrimtivewithNumber);//number





//true or false - boolean

var isValid = true;

console.log(isValid);
console.log(typeof isValid);

var boolObject = new Boolean(true);
console.log(boolObject);
var convertBool = boolObject.valueOf();
console.log(typeof boolObject);
console.log(typeof convertBool);






//undefined data type
var username;

console.log(username);
console.log(typeof username); //undefined

var name = "wdf";//not yet used it that is also undefined

if (username == undefined) {
    document.write("user not exits please signup and login");
} else {
    document.write("welcome to our page <strong>${username}</strong>");
}





//null datatype
var jspiderRoom = null;

console.log(jspiderRoom); //output null
console.log(typeof jspiderRoom); //output object but it is a null and primitive





//untyped language
var username = "etr";//now

username = "3f45g"; //latest new value //typescript provides static typing
console.log(username);


var pancard = 123456879; //it is constant
var voterid = 546879213; 

var pancard = "dfq";
console.log(pancard); //output is dfq and overided pancard above




//ways to declare variables are var,const,let
const pancard = 546879364; //can only one time assign a value , cannot change or update theat value
pancard = "dfwef"; //overide or update not possible for const keyword


console.log(pancard); //es6





//local,blocked,global variables
for (var i = 0; i <= 100; i++) {
    let age = 20; //blocked scope es6
    console.log(i);
}

console.log("my sge is" + age);


function LocalScope() {
    var age = 30; //local scope means its only available with in function(js)
    console.log(age);
}

LocalScope();

var age = 40; //global scope(js)

if (true) {
    const age = 50; //Blocked 
}




//variable hoistings
console.log(name);
let name = "fwerf";

//console.log(name1);
//var name1 = "fwebf";

let pancard = 111111;
pancard = "fsw";
console.log(pancard);

let fullstack = "ahsjkdh";
let fullstack = "jahofjhv";
console.log(fullstack);





//Object Ref Types

var collection1 = ["java", "python", "nodejs", "angular", "react"];
var str = "javascript";
var arraylength = collection1.length;
var strlength = str.length;

console.log("values", arraylength);
console.log("string values", strlength);




//javascript
var anyDatacanStoreinJs = ["java", 10, true, undefined, null, Symbol, [], function () { }, {},];
 
var arrayvalue = anyDatacanStoreinJs[7];

//loop
for (var i = 0; i < anyDatacanStoreinJs.length; i++) {
    console.log(anyDatacanStoreinJs[i]);
}
console.log(arrayvalue);




var lang = ["java", "nodejs"];
var username = "afaf";

console.log(typeof lang); //output
console.log(typeof username); //output
//console.log(typeof []);

//howtocheckArrayorNot which use Array.isArray method

console.log(Array.isArray(username)); //true because this is array




var users = ["wwqe", "aff"];

var newvalue = (users[0] = "aff");

console.log(newvalue);
console.log(users);





let users = ["asdwq", "qwjhiodf"]; //literal way []
let onemoreway = new Array(); //constructor new Array();

onemoreway[0] = "asdwq";
onemoreway[1] = "qwjhiodf";
onemoreway[2] = "dghwef";

console.log(onemoreway);



let Learner = "okay sir give later";
//convertinto array;

console.log(typeof Learner);

let ConvertStringIntoArray = Learner.split(" "); //converting string into values
//convert into array

console.log(ConvertStringIntoArray);
console.log(typeof ConvertStringIntoArray);
console.log(Array.isArray(ConvertStringIntoArray));





let array = ["java", "python", "nodejs", "ruby", "react", "Angular"];

let convertIntoString = array.toString(); //toString is used to convert array to string
confirm.length(array);
console.log(convertIntoString);
console.log(typeof convertIntoString);




let array = ["java", "python", "nodejs", "ruby", "react", "Angular"];

let convertIntoString = array.join("Fullstack students learning "); //join is used to convert array to string and removes comma
confirm.length(array);
console.log(convertIntoString);
console.log(typeof convertIntoString);



let lang1 = ["java", "pthon", "nodejs"];
let lang2 = ["ruby", "react", "Angular"];
let lang3 = ["j2ee", "expressjs", "Aws"];

let language = lang1.concat(lang2);
let jswaycontact = lang1.concat(lang2, lang3);
console.log(jswaycontact);
console.log(language);



//es6 spread operator
const totalLang = [...lang1, ...lang2, ...lang3]; //concats 'n' number of arrays together
console.log(totalLang);




let str = "We are learning Fullstack in jspiders and Fullstack shashi sir is teaching fullstack";

const useSplit = str.split(" ");

//step1 convert String into Array
//step2 use spread
const convertIntoArray = [...str]; //converted string into Array with spread operator
console.log(convertIntoArray);
console.log(typeof convertIntoArray);
console.log(Array.isArray(convertIntoArray));

const removeDuplicates = new Set(useSplit); //removes Duplicates and his is not array

//neaxt step convert into array
console.log(removeDuplicates);
console.log(Array.isArray(removeDuplicates));

const test = [...removeDuplicates]; 
const final = test.join("");
console.log(final);

//Spread which can convert String into Array
//Spread which can convert Sets into Array

//dom
//Spread which can convert HtmlCollection into Array
//Spread which can convert Nodeist into Array

//Spread which can combine or concat multiple array values
  


//example 2
const users = ["shashi", "shashi", "shashi", "manaf", "manaf" , "meoef"];
//es6 Sets - it is removing duplicates
//Step1 convert array into Sets;

const SetValue = new Set(users);// Set are array like object it is not an array
const Spread = [...SetValue];
console.log(users);
console.log(Spread);



//Spread ----- //Array ... //Syntax [...ierableObj, '4' , 'five' , 6];
let users = ["shashi", "sndj"];

const es6waywithSpread = [...users, "sfgg", "sgerg", "fullstack"];//adding elements to the arrays
console.log(es6waywithSpread);




//by using spread we can add any variable datatype to the array
let users = ["Shashi", "skldfj"];
let fullstackStudents = ["jeiopfgj", "wefg", "wefg", "weg", "yujh"];
let StringData = "jSDFK , ehf , shdvk";

const TotalArray = [...users, ...fullstackStudents, "react", 30, ...StringData];
console.log(TotalArray);




//reverse method 
const str = "javascript"; //str
const onelinereverseString = [...str].reverse().join("");
console.log(onelinereverseString);

//OR

//covert into  array
// var convertArary = [...str];
// const reverseArray = convertArary.reverse(); //only avalaible for array
// const againConvertintoString = reverseArray.join("");
// console.log(againConvertintoString);





//Array.from
let data = ["java", "python", "nodejs", "nodejs", "nodejs"];

let setData = new Set(data); //set is array like object not an array
console.log(setData); //it removed nodejs duplicates ...it is storing only once

let ArrayFrom = Array.from(setData);  //Array.from() method creates a new, Array instance from an array-like or iterable object
console.log(ArrayFrom);



//example 2 for Array.from
const Users = Array.from("shashi");
console.log(Users);




//Array.of and Array()
const OnemoreWay = Array.of(10, "shashi" , "majebf" , 11); //can enter any number and type of arguements
const LastWay = Array(10).fill("fullstack"); //gives empty values and fill is used to fill static values
console.log(OnemoreWay);
console.log(LastWay);

//the Array.of() method creates a new Array instance from a variable number of arguements, regardless of number of type of the arguements
//....the difference between Array.of() and the Array constructor is in the handling of integer arguements: Array.of(7) creates an array with a 
//....single element, 7, whereas Array(7) creates an empty array with a length property of 7 (Note: this implies an array of 7 empty slots, not slots with actual undefined values)



//till noiw ways of creating arrays are []; , new Array(); , Array.from(); , Array.of(); , Array();

//Array object
// Object is collection  of data(properties) in the form ofkey and value paair
// {
//     //This is functiion 
// }  //not an object


let Users = ["eiorgnio"]; // [] Array literal // Only which can assign value
//array is working with index
//How to define object
let usersObject = {
    // object is working with keys
    // leftside // key : value // rightside
    name: "djkvn",
    age: 20,
    company: "snlvno",
    salary: 865468434,
    //Object Literal
}; //Object Literal => if it is Object need to assign key and value pair

console.log(usersObject["name"]);
console.log(usersObject["age"]);
//or
console.log(usersObject.company);
console.log(usersObject.salary);

document.write(`<h1> My name is ${usersObject.name} my age is ${usersObject.age} i work for ${Users.company} i am getting ${Users.salary} </h1>`);






//Objects
const Employees = {
    //properties in the form of key and value pairs...
    // keys : value
    emp_name: 'jkl',
    emp_id: 'cap234',
    emp_email: 'jkl@capgemini.com',
    emp_education: 'BE',
    emp_doj: '10/10/2017',
    emp_location: 'jksdv'
} // {} => Obejct literal way whi can assign Properties....

let name = Employees.emp_name;
let id = Employees.emp_id;
let email = Employees.emp_email;
let education = Employees.emp_education;
let doj = Employees.emp_doj;
let city = Employees.emp_location;

console.log( "email address " + email + "and " + "city " + city );


//example2 fpr objects by literals way
let obj = {
    coursename: 'Fullstack',
    trainer: 'shashi',
    timing: '5pm',
    topics: 'javascript',
    platform: 'jspiders with skillrary',
    trainingmode: 'online',
    students: ["nfjk", "sdef", "rgrg", "wetf"],
    isAvailable: true,
    insideobj = {
        name: "gwse",
        age: 20
    },
    callundefinedalso: undefined,
    isEmptyornot: null
}

console.log(obj.);


//example3 
let FullstackStudents = {
    name: "fhefg",
    courses: ['java', 'html', 'css', 'sql', 'htmlcssProjects', 'bootstrap', 879],
    idcard: 10,
    college: "PES",
    education: "mysore",
    phonenumber: 4894894649,
}

let name = FullstackStudents.name;
let courses = FullstackStudents.courses[2];
console.log(courses);


//example4 
let FullstackObject = {
    student1: {
        name: "fvbhhf",
        id: 213,
        courseSelected: "Fullstack",
        place: "mandya",
        education:"BTech",
    },
    student2: {
        name: "wehfhhf",
        id: 879,
        courseSelected: "Fullstack",
        place: "mandygsf",
        education: "BTech",
    },
    student3: {
        name: "hbfhhf",
        id: 546,
        courseSelected: "Fullstack",
        place: "mandyarlgvkl",
        education: "BTech",
    },
};

const std1name = FullstackObject.student1.name;
const std1id = FullstackObject.student1.id;
const std1courseSelected = FullstackObject.student1.courseSelected;

console.log(`my name is ${std1name} my id card number is ${std1id} i have selected ${std1courseSelected}`);



//to store multiple objects use array to wrap
var users = [
    {
        name: "hbfhhf",
        id: 546,
        courseSelected: "Fullstack",
        place: "mandyarlgvkl",
        education: "BTech",
    },
    {
        name: "hhf",
        id: 6,
        courseSelected: "Fullstack",
        place: "mandyarlgvkl",
        education: "BTech",
    },
    {
        name: "hbhf",
        id: 56,
        courseSelected: "Fullstack",
        place: "mandyarlgvkl",
        education: "BTech",
    }
];

console.log(users[0].name);



//to change exsisting value it doesnt matter if it is const also it will override**
const users = {
    name: "rop",
};

users.name = "new name here";
console.log(users.name);




//combinig objects
let user1 = {
    name: "abf",
    age: 20,
};

let user2 = {
    name: "bhfg",
    age: 23,
};

let TotalUsers = Object.assign(user1, user2);
console.log(TotalUsers);


//example 2
//The Object.assign() method copies all enumerable own properties from one or more source objects to a target object, it returns target object
//Syntax; Object.assign(target,...sources);
//assign method combines two Objects  and it will consider the latest value(example age will be 30)
const a = {
    name: "x",
    age: 20,
};

const b = {
    age: 30,
    company: "testyantra",
    salary: 30000,
};

const ab = Object.assign(a, b);
console.log(ab);
/////OR the easier way
const WithSpread = {...a, ...b};
console.log(WithSpread);




////creating a object by constructor way
const User = new Object();

User.name = "hvuj";
User.age = 20;
User.company = "capgemini";
User.salary = 213546;

console.log(User);



//Object which have create method
const FullstackStudents = {
    name: "egaerg",
    id: 400,
    courses: ["java", "nodejs", "ruby", "Angular", "React"],
    time: "5pm",
    city: "mysore"
}; //prototype

//Object which have create method
const NewObject = Object.create(FullstackStudents);

NewObject.name = "wefr";
NewObject.id = 420;
NewObject.courses = ["Fullstack"];
NewObject.time = "7pm";
NewObject.city = "Bengaluru";

console.log(FullstackStudents); //prototype Object
console.log(NewObject); //new Object from proto Object

//the Object.create() method creates a new object, using an existing object as the prototype of the newly created object




////Object.freeze()
const Students = {
    fullStackStudents: ["hfgv", "shdfui", "sdghv", "jhsdgv"]
}

const DontTouchMyData = Object.freeze(Students);

Students.fullStackStudents = ["jhdgf", "egf", "quiowru"]; //overides exsisting data ---is a problem
console.log(Students);

//the Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents
//new properties from being added to it, exsisting properties from being removed, prevents changing the enumerability




////use "" to keys for using other things like css && objects can store reserve keywords also like for while etc
const Users = {
    user_name: "hvqev",
    email_Address: "fjk@gmail.com"
};

const Styles = {
    "background-color": "red",
    "font-size": "14px",
    for: "this for loop",
    while: "this is for while loop", 
    if: "this is if"
};
console.log(Styles);





////we can call method inside an Object
let object = {
    username: "ahnvbo",
    company: "qspiders",
    salary: 30000,
    userObject() {
        console.log(`my name is ${this.username} i work fro ${this.company} i am getting only ${this.salary}`);
    },
};

object.userObject();




////declaring variable as Object i.e key: value,
let name = "sdj";
let age = 20;
let company = "testyantra";
let salary = 400000;

let UserObject = {
    username: name,
    userAge: age,
    userCompany: company,
    userSalary: salary
};

console.log(UserObject);

///es6 way
let userObject = {
    name,
    age,
    company,
    salary
};

console.log(userObject);




////Object.entries(), Object.keys(), Object.values()
let obj = {
    id: 1,
    city: "mysore",
    name: "sfjdas"
};

//if it is object convert into array ad use Object.entries
let ConvertObjectIntoArray = Object.entries(obj);

console.log(ConvertObjectIntoArray);

//Object.entries() method is used to return an array consisting of enumerable property[key, value] pairs of the object which
//are passes as the parameter the ordering of the properties is the same as that given by looking over the prperty values of the object manually


const keys = Object.keys(obj); //array with keys
const values = Object.values(obj); //array with values

console.log(keys);
console.log(values);

//the Object.keys() method returns an array of a given object's own enumerable property names,iterated in the same order that a normal loop would
//the Object.values() method returns an array of a given objects own enumerable property values



////JSON.....it is used for storing
var users = {
    "name": "ruefg",
    "age": 10,
    "company": "Testyantra"
}






/////////functions
//syntax

//anonymous function
function() {
    //code block
} //function syntax



function Jspiders() {
    console.log("i am function");
}  //called part

//calling part //executing function block
Jspiders(); //calling part

console.log(typeof Jspiders);



//function expression or variable declare function
let Users = function () {
    console.log("i am function expression");
}; //called part

Users(); //calling


//IIFE - immediate invoke function expression
(function () {
    console.log("i am IIFE function");
})();//IIFE



(function () {
    console.log("i am IIFE function");
    var iamProtected = "we are protected from others";
    console.log(iamProtected);
})();//IIFE


(function () {
    var data = "i am react";
    console.log("i am react");
})
//console.log(iamProtected);
//jquery, react, backbone, momentjs



//// function with control

function Fullstack() {
    alert("i am fullstack student i want to learn nodejs");
} //naming function


function j2ee() {
    alert("i am java and j2ee student i want to learn spring");
}
//connect with html



////parameter 
function reverseString(str) {
    return [...str].reverse().join(""); //reverse a string 
    console.log(reverseString);
}
console.log(reverseString("fullstack"));

//example 2
function functionwithparameter(a, b) {
    return a * b;
}

console.log(functionwithparameter(3, 5));



//
function username(name) {
    return name;
}

const getName = prompt("please enter your name");
document.write(username(getName));




//
function Users(name, age, company, salary) {
    // return { name, age, company, salary }; 
    this.name = name;  //constructor way 
    this.age = age;
    this.company = company;
    this.salary = salary;
}

const user1 = new Users("hasd", 20, "capgemini", 20000);
const user2 = new Users("rfb", 23, "tcs", 50000);
console.log(user1);
console.log(user2);




//// arguements Object
function Students() {
    // return arguments; //arguements Object default object

    // let users = Array.from(arguments);
    // return users.toString();

    return [...arguments].join(" "); //spread operator
}

console.log(Students("shgsg", "wjrhrjgk", "sgvgv"));




//// rest parameter
function Students(...rest) {
    return rest; //rest parameter its the ( ...xyz )
}

console.log(Students("arga", "sryjn", "rtyjhy", "uyiolp"));




//// default values or default parameter (es6)
function users(name = "sdhv", age = 4, salary = 40000, company = "Testyantra") {
    return { name, age, salary, company };
};
console.log(users);
console.log(users("jkgv", 20));

//example 2

function numbers(a = 2, b = 5) {
    return a * b;
}

console.log(numbers()); //default value when no values given
console.log(numbers(10, 10));




//// function Hoisting
Test(); //calling part

function Test() {
    console.log("please execute first then do whatever");
} //called part




//// hoisting only working with naming function
PleaseTryMeAlso();

let PleaseTryMeAlso = function () {
    console.log("i am not running here because hoisting is not working in expression");
}; //hoisting doesnt work for expression 




//// conneecing with html and parseInt and parseFloat
function AddNumbers() {
    let firstNumber = parseInt( document.getElementById("firstNumber").value);
    let secondNumber = parseFloat(document.getElementById("secondNumber").value);
    // console.log(typeof firstNumber);
    // console.log(typeof secondNumber);
    // need to convert string into number

    // console.log(firstNumber + secondNumber);
    // or
    document.getElementById("result").value = firstNumber + secondNumber;
    
    //will get NAN if it is not a number
    
    if(isNAN(firstNumber) && "") {
      alert("please enter valid number");
      return;
    }
    if(isNAN(secondNumber) && "") {
      alert("please enter valid number");
      return;
    }
}
    



//// fat arrow function (es6) 
let FullstackWithArrow = () => {
    alert("this is es6 Arrow Function");
};

FullstackWithArrow();



////if one parameter no need of parenthesis and return keyword
let username = name => name;  
console.log(username("shashi"));
console.log(typeof username);



//// if more than one parameter and is one line then no need of return but need parenthesis
const addnumbers = (num1, num2) => (num1 + num2);
console.log(addnumbers(5, 5));




////IIFE with fat arrow
(() => console.log("hello iife"))(); 



////in normal function this keyword works but in arrow function this keyword doesnt work and we should use current object name
let Users = {
    name: "sdhf",
    age: 20,
    company: "qspiders",
    salary: 40000,
    designation: "java devoloper",
    // userdata: function () {
    //     document.write(`my name is ${this.name} my age is ${this.age} i work for ${this.company} and i am taking ${this.salary} my role is ${this.designation} `);
    // },
    userdata: () => {
        document.write(`my name is ${Users.name} my age is ${Users.age} i work for ${Users.company} and i am taking ${Users.salary} my role is ${Users.designation} `);
    },
};

Users.userdata();




//// normal function has arguements object but not in fatt arrow function instead use rest parameter
//can return arguements
const users = function () {
    return arguments;
};

console.log(users("dghaf", "uycg", "ksdbv"));

//instead use rest parameter
const ArrowWithusers = (...rest) => {
    return rest;
};

console.log(users("dghaf", "uycg", "ksdbv"));

//Arrow functions dont have this since the arguments array like object was a workaround to begin with,, which ES6 has solved with a rest parameter





////callback function 
//calling function as a parameter in an other function

function username(name) {
    return name();
};

username(function () {
    alert("i am shashi");
});



//without callback function
let Numbers = (num1, num2, calcType) => {
    if (calcType === "add") {
        return num1 + num2;
    }
    if (calcType === "multiply") {
        return num1 * num2; 
    }
};

console.log(Numbers(10, 10, "add"));
console.log(Numbers(10, 10, "multiply"));



let add = (a, b) => a + b;
let multiply = (a, b) => a * b;

let calcFunction = (num1, num2, fullstack) => {
    return fullstack(num1, num2);
};

console.log(calcFunction(100, 200, add));
console.log(calcFunction(100, 200, multiply));




//// closure 
//when global scope or variable is intersecting or coming to function then it is executing

let globalVar = "i am global variable";
//outside a function is global scope

function show() {
    var innerText = "i am inner text available only with in function";
    console.log(globalVar);
    //within a function that is localscope
};

show();
console.dir(show());



//example 2
let globalVar = "i am global varaible";

function innerFunction() {
    let globalVar1 = "i am inner variable";
    console.log(globalVar);
}

innerFunction();


//example 3
var num1 = 100; //global scope

function addNumber() {
    var num2 = 10;    //local scope
    return num1 + num2;
}

console.log(addNumber());




//// Date Object
let date = new Date(); // Date is built in Object 
console.log(date);

let month = date.getMonth();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let miliseconds = date.getMilliseconds();
let year = date.getFullYear();
let time = date.getTime();
let day = date.getDay();


console.log(month);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(miliseconds);
console.log(year);
console.log(time);
console.log(day);





//// create a clock
function Clock() {

    setInterval(() => {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            document.getElementById("template").innerHTML = `
    <h1>${hours} : ${minutes} : ${seconds}</h1>
    `;
    })
}

Clock();




////synchronous to asynchronous 
// setTimeout();
// Ajax method
// es6 promises


//// setTimeout();     //setTimeout(); - it updates only once
setTimeout(() => {
    console.log("hey functio execute after 10secods");
}, 10000);

const username = "hwehcf";
console.log(username);




//// serInterval();    //setInterval(); - it keeps updating
var count = 0;

setInterval(() => {
    // return count + 1;
    console.log(count + 1);
}, 1000);





////
function GetClock() {
    setInterval(function() {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let AMorPM = hours >= 12 ? "PM" : "AM";

            let outPut = `<h1>${hours} : ${minutes} : ${seconds} ${AMorPM}</h1>`;
            document.getElementById("template").innerHTML = outPut;
    }, 1000);
}

GetClock();

// OR
setInterval(() => {
    let date = new Date().toLocaleTimeString();
    document.getElementById("template").innerHTML = `<h1>${date}`;
}, 1000);




//// Array Helper Methods
//push, pop, shift, unshift, splice, reverse, join, toString, sort, filter, map, from, of, reduce, reduceRight, forEach, find, findIndex, slice, concat, includes, indexOf, every, keys


//// push, unshift
let array = ["java", "python", "nodejs", "react"];
console.log(array);  

let newData = array.push("javascript");  //push method inserts or appends new element to last position
newData = array.unshift("Angulaer");     //unshift method inserts or appends new element to first position
console.log(newData);
console.log(array);  



//// pop, shift
let array = ["Angular", "java", "python", "nodejs", "react", "javascript"];
console.log(array);  

let newData = array.pop("javascript");  //pop method removes last element 
newData = array.shift("Angular");     //shift method removes last position
console.log(newData);
console.log(array);                            




//// splice 
let array = ["java", "python", "nodejs", "react"];
console.log(array); 

let spliceMethod = array.splice(1, 1, "dotnet");
console.log(spliceMethod);              //to delete and inserting items from middle of the array
console.log(array);




////


////           not 


////           attended


////




//// javascript array methods

//// forEach  method 
// it is array helper method
let array = ["java", "python", "nodejs", "react"];

array.forEach((value, index, array) => {
    console.log(index);
    // console.log(value);
    // console.log(array);
});


// task
let EmployeeList = [
  {
    emp_id: 1,
    emp_name: "jsv",
    emp_age: 20,
    emp_salary: 30000,
    emp_designation: "nodejs developer",
  },
  {
    emp_id: 2,
    emp_name: "wefjio",
    emp_age: 21,
    emp_salary: 40000,
    emp_designation: "java developer",
  },
  {
    emp_id: 3,
    emp_name: "dfo",
    emp_age: 22,
    emp_salary: 50000,
    emp_designation: "react developer",
  },
  {
    emp_id: 4,
    emp_name: "sdu",
    emp_age: 23,
    emp_salary: 60000,
    emp_designation: "fullstack developer",
  },
  {
    emp_id: 5,
    emp_name: "dfasdf",
    emp_age: 24,
    emp_salary: 70000,
    emp_designation: " developer",
  },
];

//for end user 
let output = "";

// loop
 EmployeeList.forEach((emp) => {
     output += `
                <tr>
                   <td>Employee Name : ${emp.emp_name}</td>
                   <td>Employee Id : ${emp.emp_id}</td>
                   <td>Employee age : ${emp.emp_age}</td>
                   <td>Employee salary : ${emp.emp_salary}</td>
                   <td>Employee designation : ${emp.emp_designation}</td>
                </tr> 
                 `;
    
     document.getElementById("template").innerHTML = output;

     console.log(emp.emp_age);
     console.log(emp);
 });






// map method 
map creates new array when needed for output while foreach doesnt and gives back as undefined
let array = [1, 2, 3, 4, 5];

let arraywithForeach = array.forEach((x) => x * 10);
console.log(arraywithForeach);

let mapwith = array.map((x) => x * 100);
console.log(array);
console.log(mapwith);





//// filter method
let array = ["java", "python", "nodejs", "ruby", "angular", "angular", "angular", "angular"];

let ages = [3, 50, 20, 40, 60, 99, 5, 10, 6];
let filteredValues = array.filter((value, index, array) => {
    // console.log(value, index);
    return array.indexOf(value) == index;
});

console.log(filteredValues);



//example 2
let array = ["java", "python", "nodejs", "ruby", "angular", "fullstackwithjavascript", "fullstackwithjava", "fullstackwithpython"];

let ages = [3, 50, 20, 40, 60, 99, 5, 10, 6];

let filtered = array.filter((word) => word.length > 10);
let number = ages.filter((age) => age > 50);

console.log(number);
console.log(filtered);





//// reduce method 
let marks = [10, 40, 60, 100, 5000, 400, 50, 1000];

let total = marks.reduce((first, second) => {
    console.log(first);
    console.log(second);
    return first + second;
}, 0);

console.log(total);



//example 2   (flat method used)
let marks = [[100], [5000], [3000], [[[[[[[[10]]]]]]]]];  //multidimensional array

// let firstStep = marks.flat([8]);
let firstStep = marks.flat([Infinity]);
console.log(firstStep);

let total = firstStep.reduce((x, y) => {
    return x + y;
});

console.log(total);




//// find method
const Users = [
  { name: "sjkDV", age: 20, company: "jspiders" },
  { name: "rakesh", age: 20, company: "Jspiderss" },
  { name: "KJHF", age: 20, company: "cgi" },
  { name: "JASWD", age: 20, company: "qspiders" },
  { name: "rakesh", age: 20, company: "capgemini" },
];

let findUser = Users.find((user) => {
    if (user.name === "rakesh") {
        return user;
    }
});

console.log(findUser);



//// findIndex and example 2 for find 
let ages = [10, 40, 20, 100, 30, 50];

let test = ages.find(x => x > 20);
console.log(test);  //prints 40 and no other value as it doesnt search after getting the value once

let test = ages.findIndex((x) => x > 20);
console.log(test);  //prints index



//// indexOf method
let index = [0, 10, "shashi", true, NaN];

let indexValue = index.indexOf(NaN);
// console.log(indexValue);

let test = index.findIndex(Number.isNaN);
console.log(test);




// sort method
let array = ["shashi", "Asdv", "mjkscfh", "kuiscfh"];
let numData = [100, 30, 20, 5, 60, 1000];

let sort = array.sort();
let num = numData.sort((a, b) => {
    return a - b;
    // return b - a;
});

console.log(sort);
console.log(array);
console.log(num);



// 
let obj = {
    num1: 1,
    num2: 2,
    num3: 3,
    num4: 4,
};

// let convertObjArray = Object.entries(obj);
// console.log(convertObjArray);

let onemoreway = Object.values(obj);
console.log(onemoreway);

let total = onemoreway.reduce((a, b) => {
    return a + b;
});
console.log(total);





//// include method
let users = ["bjhd", "df", "dbjk", "jkwsdf", "wefji"];

// users.includes((item) => {
//     if (item === "df") {
//         alert("df is in this array");
//     } else {
//         alert("df is not in thisarray");
//     }
// });

let data = users.includes("banuanu");
console.log(data);




//// keys method and by using for...of loop (*not an array helper)
let users = ["jnadf", "dji", "qeioj", "dvj", "wefji"];

let keys = users.keys();
console.log(keys);

for (let key of keys) {
    console.log(key);
}

let values = users.values();
console.log(values);

for (let value of values) {
    console.log(value);
}


//exaample 2
for (let i of ["java", "python", "nodejs"]) {
    console.log(i);
}

let str = "hello nodejs and javascript";

for (x of str) {
    console.log(x);
}


for (let i of set) {
    console.log(i);
}


function test() {
    return arguments;
}

let args = test("fullstack", "nodejs", "angular");
console.log(args);

for (let a of args) {
    console.log(a);
}




//// slice method
let array = ["java", "nodejs", "angular", "react", "expreesjs"];

let sliceMethod = array.slice(3,5);
console.log(sliceMethod);




//// fill method
let users = Array(100);
let fill = users.fill("fullstack");

console.log(fill);








////// string helper methods

////
let str = "we are learning nodejs, javascript, angular, react and nodejs and nodejs";

console.log(str.length); //length of string

let test = strcharAt(1); //returns the character at the specified index in a string
console.log(test);









/////// BOM , DOM
//// window object and global object
console.dir(window); //Object in browser

console.dir(document);
console.log(document);

console.log(document.head);
console.log(document.body);

document.body.style.background = "blue";

let form = document.createElement("form");
console.log(form);





//// HTML Collection Object   (array like objects not array*)
var text = document.all;
var text1 = document.all[5]; //it will acces the nth number given from the HTML collection Object 
for (const x of text) {
    console.log(text);
}
console.log(text);
console.log(text1);




// capturing images in DOM
let images = document.images;
console.log(images);

for (const img of images) {
    console.log(img);
}



// capturing or collecting links in DOM
let links = document.links;
console.log(links);

for  (let a of links) {
    console.log(a);
}

let forms = document.forms;

for (let doc of forms) {
    console.log(doc);
}


document.body.style.background = "black";
var test = document.domain;
var test1 = document.doctype;
var test2 = document.URL;
var test3 = document.characterSet;
var test4 = document.title;
var test5 = document.anchors;
var test6 = document.styleSheets;
var test7 = document.scripts;
console.log(test);
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);
console.log(test7);






//// DOM Methods
// document.write();
// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.addEventListener();
// document.append();
// document.prepend();
// document.createElement();
// document.TEXT_NODE();




let id = document.getElementById("btn");
console.log(id);

////adding some style 
id.style.background = "green";

////adding class 
id.className = "fullstack";

//// adding a class
let template = document.getElementById("template");
template.className = "nodejs reactjs angular express fullstack";

//// type of adding a text 
template.innerHTML = `<h1 style= "color:red">fjk and efjk are good</h1>`;
// template.innerText = "this is inner text";
// template.textContent = "this is text node";
console.log(template);

//// add multiple classes
let template = document.getElementById("template");
template.classList.add("Jspiders", "Qspiders", "pyspiders");
template.classList.remove("Jspiders");
console.log(template);





//// set attributes 
let template = document.getElementById("template");
template.setAttribute("class", "Fullstack");
template.setAttribute("title", "I am web page title");
template.setAttribute("disabled", true);

//// get attributes
// let attr = template.getAttribute("title");
// let attr = template.getAttribute("id");
let attr = template.getAttribute("class");
console.log(attr);





////convert html collection into array
let links = document.getElementsByTagName("a");

[...links].forEach(x => x.classList.add("foreachway")); //for each way

Array.from(links).map(y => y.classList.add("mapWithFrom")); //map with From

for (let forofway of links) {
    forofway.classList.add("forofway"); //forofway
}

for (let i = 0; i < links.length; i++) {
    links[i].classList.add("normalloopway");  //normal loop way
}

for (let i = 0; i < links.length; i++) {
    links[i].className = "normal" + i;    //normal loop way with className
}

console.log(links);






//// addEventListener
let input = document.getElementById("input");
let button = document.getElementById("btn");

console.log(input);
console.log(button);

// let btn = function () {                    //normal event or normal type
//     console.log("i am normal event in javascript");
// };

button.addEventListener("click", (e) => {
    console.log(e.target.value);
});

input.addEventListener("keyup", (e) => {
    console.log(e.target.value);
});




//DOM way
let input = document.getElementById("input");
input.addEventListener("keyup", (e) => {
    console.log(e);
});


//normal javascript way
let parentObj = {
    name: "shashi",
    target: {
        value: "this is value",
    },
}
console.log(parentObj.target.value);    



let input = document.getElementById("input");
input.addEventListener("keyup", (e) => {
    let value = e.target.value;
    document.getElementById("template").innerHTML = value;
});



let template = document.getElementById("template");

template.addEventListener("mouseenter", (e) => {
    console.log("mouse entered");
    template.style.background = "red";
});

template.addEventListener("mouseleave", (e) => {
    console.log("mouse leaved");
    template.style.background = "green";
});




//// form, submit example
let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let errorBlock = document.getElementById("errorBlock");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let messages = [];
    if (username.value === "" || username.value === null) {
        messages.push("<p>User name is required</p>");
    }
    if (password.value === "" || password.value === null) {
        messages.push("<p>Password is requrired</p>");
    }
    if (password.value.length < 6) {
        messages.push("<p>Minimum 6 charecters reequired here</p>");
    }
    if (messages.length > 0) {
        errorBlock.innerHTML = messages.join("");
    }
    console.log(username.value, password.value);

});




//// dropdown with dom
let ul = document.getElementById("ul");
ul.addEventListener("click", (e) => {
    console.log(e.target);
    let dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");
})





//// create an element 
let div = document.createElement("div");
console.log(div);

let form = document.createElement("form");
form.setAttribute("method", "GET");
form.setAttribute("action", "/");
form.setAttribute("novalidate", true);
console.log(form);

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("name", "username");
input.setAttribute("required", true);
input.setAttribute("placeholder", "please enter username");
console.log(input);

let p = document.createElement("p");
p.textContent = "hello i am content";
console.log(p);

let div = document.createElement("div");
div.textContent = "i am div";
div.classList.add("block");
div.setAttribute("name", "PLease hover on me will get tooltip");
div.id = "mainid";
console.log(div);


let section = document.createElement("section");
let article = document.createElement("article");
let h1 = document.createElement("h1");
h1.textContent = "hello i am h1";

section.appendChild(article);
article.appendChild(h1);
console.log(section);
console.log(article);


let html = document.createElement("html");
let head = document.createElement("head");
let body = document.createElement("body");

html.appendChild(head);
html.appendChild(body);
console.log(html)



// create a form example
let section = document.createElement("section");
let article = document.createElement("article");

let form = document.createElement("form");
form.style.display = "flex";
form.style.flexDirection = "column";

form.setAttribute("action", "");
form.setAttribute("method", "GET");
form.setAttribute("id", "form");

let username = document.createElement("input");
username.style.marginBottom = "10px";
username.classList.add("form-control");
username.setAttribute("type", "text");
username.setAttribute("name", "username");
username.setAttribute("id", "username");
username.setAttribute("placeholder", "please enter username");

let password = document.createElement("input");
password.classList.add("form-control");
password.setAttribute("type", "text");
password.setAttribute("name", "password");
password.setAttribute("id", "password");
password.setAttribute("placeholder", "please enter password");

let button = document.createElement("button");
button.classList.add("btn", "btn-primary");
button.textContent = "Login";

form.appendChild(username);
form.appendChild(password);
form.appendChild(button);

article.appendChild(form);
section.appendChild(article);

console.log(form);
document.body.appendChild(section);




//// getElementsByClassName, querySelector, querySelectorAll
let li = document.getElementsByClassName("list");
console.log(li);
console.log(li[2]);

[...li].forEach((x) => console.log(x));
[...li].forEach((x) => x.classList.add("this_is_list"));


let querySlectorway = document.querySelector(".list"); //css way
console.log(querySlectorway);


let ul = document.getElementById("ul"); //normal way //id way
let querySlectorway = document.querySelector("#ul"); //css way
console.log(ul);
console.log(querySlectorway);

let list = ul.getElementsByClassName("list");
let queryWithli = document.querySelector(".list");  //
let queryWithliAll = document.querySelectorAll(".list"); //
console.log(list);
console.log(queryWithli);
console.log(queryWithliAll);


let list = document.getElementsByClassName("list"); //htmlcollections not array
let listwithQuerySelector = document.querySelectorAll("ul .list"); // because it prints only first element not all
list.forEach((li) => console.log(li));
listwithQuerySelector.forEach((x) => console.log(x));


//noraml way
let list = document.getElementsByClassName("list");

[...list].map((li)=> {
    console.log(li);
    li.style.background = "#fff";
    li.style.listStyle = "none";
    li.style.marginBottom = "10px";
    li.style.border = "1px solid #ccc";
    li.style.padding = "10px";
});

//dom way
let listEven = document.querySelectorAll(".list:nth-child(even");
listEven.forEach((even) => {
    even.style.background = "red";
    even.style.color = "white";
});

let listOdd = document.querySelectorAll(".list:nth-child(odd");
listOdd.forEach((odd) => {
  odd.style.background = "black";
  odd.style.color = "white";
});





//// Speak recognition app
let btn = document.querySelector("#btn");
btn.addEventListener("click", Speech);

function Speech() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    let recognition = new SpeechRecognition();

    recognition.interimResults = true;

    let p = document.createElement("p");
    let words = document.querySelector(".words");
    words.appendChild(p);
    
    recognition.addEventListener("result", (e) => {
        let transcript = [...e.results].map((result => result[0])).map((result)=>result.transcript).join("");
        p.textContent = transcript;
        if (e.results[0].isFinal) {
            p = document.createElement("p");
            words.appendChild(p);
        console.log(transcript);
    });

    recognition.addEventListener("end", recognition.start);

    recognition.start();
}








//// Promises
let promise = new Promise((resolve, reject) => {
    let status = true;  //when made false it will reject data here
    if (status) {
        resolve("resolving data here");
    } else {
        reject("rejecting data here");
    }
});
promise.then((data) => {
    console.log(data);
}).catch((err) => console.log(err));
console.log(promise);


//example 2 
let FullstackOrJ2EE = new Promise((resolve, reject) => {
    let Isfullstack = true;
    if (Isfullstack) {
        resolve("I am very happy with fullstack and we are learning n number of tech");
    } else {
        reject("I am happy with J2EE and java spring");
    }
});

FullstackOrJ2EE.then((data) => {
    console.log(data);
}).catch((err) => console.log(err)); //execute promises with help of then and catch
console.log(FullstackOrJ2EE);


*/

////