//----------------------object literals------------------------//


//---------------we can creat a object like this -----------//

const user ={}


// const user={
// name:"Anil kumar",
// age:23,
// city:"Bulandshahr"
// }

// console.log(user.name);
// console.log(user["city"]);



//----------------------use a symbol as a key-----------------------------------//
// let town=Symbol("nnl")

// const user={
//     name:"Anil kumar",
//     age:23,
//     city:"Bulandshahr",
//      [town]:"aurangabad"
//     }

    // console.log(user.age);
    // console.log(user["city"]);
    // console.log(typeof user[town]);
    //console.log(user);
    

    //-----------lock a object so that any one can note change the value of any key---------//
           /*const user={
                name:"Anil kumar",
                age:23,
                city:"Bulandshahr",
                
                 }
            Object.freeze(user);
            user.age=20;
            console.log(user.age);*/


//--------------------------------------object fun----------------------//
            /*const user={
                name:"Anil kumar",
                age:23,
                city:"Bulandshahr",
                }
                
                user.greetings1=function(){
                    console.log("hii Anil kumar how are you");
                }
                user.greetings2=function(){
                    console.log(`hello user ${this.name}`);
                }

        user.greetings1();
        user.greetings2();
        console.log(user.greetings1);
        console.log(user.greetings1());
        console.log(user.greetings2());*/
