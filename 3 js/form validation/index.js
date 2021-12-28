// // // console.log("hello");
// // // // document.getElementById("qwe").innerHTML = "gdfgfd";
// // // // console.log(document.getElementById("demo"))
// // // // document.getElementById("demo").innerHTML = "Hello Dolly.this is an lorem apple";

// // // let a=[1,2,3,4,5,6,7,8,9]
// // // let total= 1
// // // for(let j=8;j>=0;j--){
// // //   console.log(a[j])
// // //   total=total+a[j]
// // // }
// // // console.log(total)
// // // let a=5
// // // if(a=="5"){
// // //   console.log(true);
// // // }else if(a==5){
// // //   console.log("ddd");
// // // }
// // // else{
// // // console.log(false);
// // // }

// // // if(a=="5"){
// // //   console.log(true);
// // // }
// // // if(a=="5"){
// // //   console.log(true);
// // // }
// // // if(a=="5"){
// // //   console.log(true);
// // // }
// // // console.log(a)
// // // let a=5
// // // if(!(a!=6)){
// // //   console.log(true)
// // // } else{
// // //   console.log(false)
// // // }
// // // 1. ways to print in javascript
// // // console.log("hello world");
// // // alert("me")
// // // document.write("this is document write")

// // //2. javascript console api
// // // API = application program interface
// // // console.log("hello world", 6 * 6, "hello every one");
// // // console.warn("this is a warning");
// // // console.error("this is an error");

// // // 3. javascript variables
// // // what are variables? - containers to store data values
// // // var number1 = 90;
// // // var number2 = 10;
// // // console.log(number1 + number2);

// // // 4. data types in javascript
// // // numbers:
// // var num1 = 45;
// // var num2 = 55;
// // var num = 65;

// // // String:
// // var str1 = "this is an apple";
// // var str2 = "this ia an bat";

// // // objects:
// // var marks = {
// //   rahul: 10,
// //   manish: 20,
// //   kohli: 30,
// // };
// // // console.log(marks);

// // // Boolean
// // var a = true;
// // var b = false;
// // // console.log(a, b);

// // // var und = undifined;
// // var und;
// // // console.log(und);

// // // for null value
// // var n = null;
// // // console.log(n);

// // /*At a very high level, there are two types of data types in js
// // 1. Primitive data Types: undifined, null, string, numbers, boolean, Symbol
// // 2. reference data types: arrays and objects

// // */
// // var arr = [10,9,8,7,6,"jdp",4,3,2,1,0];
// // // console.log(arr);
// // // console.log(arr[5]);
// // // console.log(arr[7]);

// // // operators in js
// // // arithmetic operators
// // var a = 1000
// // var b = 10
// // console.log("the value of a + b is", a+b);
// // console.log("the value of a - b is", a-b);
// // console.log("the value of a * b is", a*b);
// // console.log("the value of a / b is", a/b);

// // // assignment operators
// // var c = b;
// // c-=2;
// // c+=2;
// // c*=2;
// // c/=2;
// // console.log(c);

// // // comparion operators
// // var x = 12;
// // var y = 10;
// // // console.log(x==y)
// // // console.log(x>=y)
// // // console.log(x<=y)

// // // logical operators
// // // logical and
// // // console.log(true && true)
// // // console.log(true && false)
// // // console.log(false && true)
// // // console.log(false && false)

// // // logical or
// // // console.log(true || true)
// // // console.log(true || false)
// // // console.log(false || true)
// // // console.log(false || false)

// // // logical not (reverse)
// // // console.log(!false);
// // // console.log(!true);

// // // function
// // function avg(a, b){
// //   return (a+b)/2;
// // }
// // c1 = avg(20, 40);
// // c2 = avg(50, 100);
// // // console.log(c1, c2)

// // // if and else
// // var age = 18;
// // if(age>= 10){
// //   console.log('u r not 18+')
// // }
// // else{
// //   console.log(' u r 18+')
// // }

// // looops in js
// // let i = 0
// // let arr = [1, 2, 3, 4, 5, 6, "jdp", "ram"];
// // console.log(arr);
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] == 5) {
// //     // break;
// //     continue
// //   }
// //   console.log(arr[i]);
// // }

// // arr.forEach(function(element){
// //   console.log(element)
// // })

// // let a = 0;
// // const ab = 0;
// // ab ++;
// // ab = ab + 1;

// // let j = 10;
// // while(j<arr.length){
// //   console.log(arr[j]);
// //   j ++;
// // }
// // let arr = [11, 2, "3", 4, "jdp"];
// // let j=1;
// // // let i=0
// // do {
// //   console.log(arr[j]);
// //   j++;
// // } while (j < arr.length);

// // let b = [1,2,3,7,8,9,4,5,6]
// // b.forEach(function(element, index, array){
// //   console.log(element, index, array)
// // })
// // let obj= {
// //   name: "rahul",
// //   age: 30,
// //   work: "Engineer",
// //   experiance:  "3 year",
// // }
// // for(let key in obj)
// // {
// //   console.log(` The ${key} of Object is ${obj[key]}`)
// // }

// // let ab=" dflkjs, fdkgjdk, dfklmgj , fsg"
// // let cc=[]
// // cc=ab.split(",")
// // console.log(cc[2].length)
// // // ab = ab.trim()
// // // // console.log(ab.length)

// // let my='there "is" an mall'
// // // console.log(my.length);
// // // console.log(my.indexOf("there"));.
// // // console.log(my)
// // // console.log(my.slice(1,3));
// // c= my.replace("an", "is");
// // console.log(c)
// // // console.log(my)
// // let myDate = Date();
// // console.log(myDate)

// // DOM = Document Object Model
// // let elemClass = document.getElementsByClassName("container");
// // console.log(elemClass);
// // console.log(elemClass[1].innerHTML);
// // console.log(elemClass[1].innerText);
// // tn = document.getElementsByTagName("div");
// // // console.log(tn);
// // createElement = document.createElement("p");
// // createElement.innerText = "this is  me"
// // tn[0].appendChild(createElement);

// // ac = document.querySelector('.container')
// // abc = document.querySelectorAll('.container')
// // console.log(ac, abc);

// // //  events in JS
// // function clicked(){
// //   console.log("hello everyone")
// // }

// // click.addEventListener('click', function(){
// //   console.log("click  hua")
// // })
// // click.addEventListener('mouseover', function(){
// //   console.log("mouse andr")
// // })
// // click.addEventListener('mouseout', function(){
// //   console.log("mouse bahar")
// // })
// // click.addEventListener('mouseup', function(){
// //   console.log("click mouse up hua")
// // })
// // click.addEventListener('mousedown', function(){
// //   console.log("click mouse down hua")
// // })


// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// click.addEventListener('mouseover', function(){
//   document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//   console.log("mouse up when clicked on container");
// })
// click.addEventListener('mouseout', function(){
//   document.querySelectorAll('.container')[1].innerHTML = "<b> i am  here</b>";
//   console.log("mouse down when clicked on container");
// })

// JSON = js object notation
