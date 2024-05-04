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