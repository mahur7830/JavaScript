     /*const user = {
    username : "anil kumar",
    loginCount :10,
    signedin : true,

    getuserDetails : function(){
        console.log(`username : ${this.username}`);
    }
}

console.log(this.username)
console.log(user.getuserDetails());
*/



//___________________________________constructor function Or new _____________________________//

                  function user(username,loginCount,isSignedIn){
                   this.username = username;
                   this.loginCount = loginCount;
                   this.isSignedIn = isSignedIn;

                   this.greeting = function(){
                    console.log(`Welcome : ${this.username}`);
                   }

                   // it is implicitly returned there is no need of return     //
                   return this;
                };
             //const user1 = user("anil kumar",10,true) 
             //console.log(user1.constructor);

    //--This call for user will override the old values because we are target previous reference
            // const user2 = user("rajpoot",15,false) 
            
            
            // console.log(user1);
            // console.log(user2);

    //----------------------------by constructor funcion------------//
                  const user3 = new user("rajkumar",11,true)
                  const user4 = new user("ramkumar",15,false)
                   
                  console.log(user3);
                  console.log(user4);
                 
