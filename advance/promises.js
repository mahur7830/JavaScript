
//__________________________creation of promises_____________Promise One____________________//

    /*const promises1 = new Promise(function(resolve,reject){
    //---------what type of work we can done here-------------
    //  Do an async task, Database call, Cryptography, Network Call etc..

    setTimeout(function(){
        console.log("task is completed");
        
//----------to connect resolve with then()-----------resolve is very useful and informative method---//
        resolve();
    },1000);

})

//------------Consumption of created promise--------------//
promises1.then(function(){
    console.log("promise is consumed");
})*/



//_________________________promise 2___________________another way of creation______________//

  /*  new Promise(function(resolve,reject){
    setTimeout(() => {
      console.log("promise 2 have been done");  
    }, 1000);
    resolve();   
    }).then(function(){
    console.log("async 2 resolved");
    })  */


 //_____________________________Promise 3_________________________________________//
 
         /*  const promise3 = new Promise(function(resolve,reject){
           setTimeout(() => {
            resolve({username:"mahur123",email:"mahurji@gmail.com"})
            }, 1000);
            })
   
 //----- Data or parameter paased in resolved is getting in the user parameter---------------------//
             promise3.then(function(user){
             console.log(user);
             })*/


//_____________________________promise 4)__________________________________//

              /*  const promise4 = new Promise(function(resolve,reject){
                     setTimeout(function(){
                        let err = false;
                            if(err){
                                resolve({username:"mahur123",password:"anilkumar1234"})
                           }else
                               {
                                reject("error : something went wrong")
                                }
                       }, 1000)
                    })

                promise4.then((user) =>{
                console.log(user);
                     return user.username;
                }).then((value_that_is_returned_from_above_then_means_username)=>{
                     console.log(value_that_is_returned_from_above_then_means_username);
                }).catch((err)=>{
                      console.log(err);
                }).finally(()=>{
                      console.log('promise resolved or rejected');
                })
                     */


//______________________________________Promise 5_________________________________//
          
                  /* const promise5 = new Promise(function(resolve,reject){
                    setTimeout(function(){
                        let err = true;
                        if(err){
                                resolve({username:"javascript",password:"BlueBird123@"})
                               }else
                                   {
                                    reject("error : something went wrong")
                                    }
                           }, 1000)
                        })

                        async function promise5Consume(){
                            try{
                                const response = await promise5;
                                console.log(response);
                               }
                            catch(err)
                                {
                                  console.log(err);
                                }
                        }
    

                    promise5Consume();*/



//______________________promise another example_____________________//
                    
                      /* async function getAllUsers(){
                       try{
                        const response = await fetch('http://api.github.com/users/hiteshchoudhary');
                       const data = await response.json()
                        console.log(data)
                       }catch(err){
                           console.log("E:",err);
                       }
                    }   
                     getAllUsers();   */
                     
                     

//___________________________________another way ______________________________//

                  fetch('http://api.github.com/users/hiteshchoudhary')
                           .then((response)=>{
                             return response.json();
                           }).then((data)=>{
                           console.log(data);
                           }).catch((err)=>{console.log(err);})