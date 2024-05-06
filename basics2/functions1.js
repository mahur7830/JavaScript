//---------functions-----------------------------//

//---here n1,n2 called parameters----//
/*function addition(n1,n2)
{
    //let result= n1+n2;
    //return result;
    return n1+n2;
    console.log("hello");
}
//---------here 10 and 20 called arguments-----//
let result=addition(10,20);
console.log(result);*/

/*
function sayHello(username)
{
    return `hello ${username} how are you`;
}

//--Interview question--//

//this will not print anything on the place of username
console.log(sayHello(""));
//this will print the undefined on the place of username
console.log(sayHello());
//this will print everuthing good 
console.log(sayHello("Anil"));
                                     */
/*
function sayHello(username)
{
    if(!username)
    {
       console.log("please enter a user name");
       return;
    }
     return `hello ${username} how are you`;
}
console.log(sayHello());
console.log(sayHello(""));
console.log(sayHello("Anil kumar"));
                                        */

//------------Rest with functions------To manage multiple arguments in a single parameter---------//

//  This function will return an array of all values
        /*function cartPrice(...num)
        {
            return num;
        }

     console.log(cartPrice(100,290,345,432,453));
                                                     */



//----------------------------passing object in function------------------------------------------//
          /*function loginUser(anyObject)
          {
            console.log(`user name is ${anyObject.name} and id is ${anyObject.id}`);
          }

          const user={
            name:"Anil Kumar",
            email:"gururaj@gmail.com",
            id:12240
          }
          loginUser(user);
             loginUser({
                name:"vikash rajpoot",
                emial:"vikky@123gmail.com",
                id:454356
             });
             */




//---------Passing array as an argument in functions-------------------------------//
      /* function getArray(myArray)
       {
               //return arr;
             //return myArray[5];
       }
        //const arr=[10,20,30,40,50,60];
       //console.log(getArray(arr));
           console.log([67,45,65,345,234,546,98]);
                                    */


/*
//-------------------Important concept for interview and uderstanding-----------------------//
     //Here we can call  function before declaration           
console.log(one());
function one()
{
    return 10;
}

//          REMEMBER ALWAYS             //
//Here we can not call function before declaration because it is defined as an expression
//it will give an error

//console.log(val());
let val=function two()
{
    return 20;
}
 console.log(val());
                     */



 //___________________________ARROW FUNCTION_____________________________//
//--this keyword refers to the current context--//

/*
const user={
  username:"Anil",
  password:"123987",
  welcomeMessage: function()
                  {
                  console.log(`Welcome ${this.username}, On this wesite`);
//here this keyword refer to this current  object
                  console.log(this);
                  }
                  
}
user.welcomeMessage()
user.username="Rajendra"
user.welcomeMessage()
//here this keyword will refer to an empty object becausen her js is runnig on node.js
//but when js runs on the browser console then this keyword refers to the window object because in
// that case window is the most global object
console.log(this);
                      */

//___________________________________another try to something understand_________________________//

/*
function one()
{
  let user="anil kumar"
  // here undefined will be print because heer we are unable to use this keyword in functions
  //but there are other way are possible so wait for next step
  console.log(this.user);
  //here all of the information will be print about this keyword that actually what is inside 
  // the this keyword
    console.log(this);
}

one();
       */


/*
// use this keyword inside the arrow function
const arrow = () =>{
let username="Anil kumar";
//  Here this keyword will print an empty object
console.log(this)
// Here this keyword will print udefined same as was printing in the normar function
console.log(this.username);
}

arrow()
        */



//____________________________________ARROW FUNCTION________________________________//
      // if we use curly braces then return keyqord is mandatory to use
        /*let addition=(num1,num2)=>{
        return num1+num2;
        }
        console.log(addition(10,20));
                                     */
     
//--this is called implicit return--- -//
             /*let add=(num1,num2)=>num1+num2
                 //let add=(num1,num2)=>(num1+num2)
             console.log(add(10,40));*/

             
//--Returning an object implicitly from an arrow function--//
            let myNmae=()=>({username:"Anil Kumar"})
            console.log(myNmae());             