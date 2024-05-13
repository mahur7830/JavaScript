//___________________loops_____________________//

     //      for of loop

     /*const array=[1,2,4,3,7,5,6,8,5,9]
     for(let arr of array)
        {
            console.log(arr);
        }
        let str="Anil Kumar lodhi"
        for(let st of str)
            {
                console.log(st);
            }*/


//_________________for of loop with maps____________________________________//
    /* const mp=new Map();   
     mp.set(1,'jan')  
     mp.set(2,'feb')
     mp.set(3,'march')
     
//   this will print value and keys seperately
     for(let [key, value] of mp)
        {
            console.log(key,':-',value);
        }
        */


        
        //_____________________for of loop with objects________________________//

       /* const obj={
            name:"Anil kumar",
            age:23,
            city:"bulandshahr",
            college:"ip coll"
        }
//---for of loop doesn't work on objects
       /* for(let value of obj)
            {
                console.log(value);
            }


//----for in loop for iteratinng objects--//
       for (const key in obj) {
               //console.log(key);
                 console.log(obj[key]);
        }            
  */

//--for in loop with arrays--//------here map is not applicable----//
//for in loop can print only keys seperately
/*const progra=["ja","c","c++","java","python","kotlin"]
for (const key in progra) {
//console.log(key);
console.log(progra[key]);
}*/



//___________________for each loop________________//
// for each loop has three parameters, 1. Value, 2. Index, 3. An Array on which it to be used 
// it doesn't return any value

const progra=["js","c","c++","java","python","kotlin"]

//function iside the for each loop is called call back function
//call back function doesn;t have any name
//progra.forEach(function(item){
  //console.log(item);
//})



//--for eah with arrow function--//
    // progra.forEach((item,index,arr)=>{
      //  console.log(item,index,arr);
     //})



//-------pass a normal function into a for each loop---//

     /* function printItems(item)
      {
        console.log(item);
      }
       
        progra.forEach(printItems)
     
     //can't be use parenthesis with function inside the for each loop
     //so it will undefined function error
          //progra.forEach(printItems())  */ 
          
          


//-----for each loop with array of objects------//

   const myCoding=[
    {
        languageName:"javaScript",
        fileName:"js"
    },
    {
        languageName:"c",
        fileName:"cpp"
    },
    {
        languageName:"java",
        fileName:"java"
    }
    ]
      //Here item is an object that is coming from myCoding array in every iteration
    myCoding.forEach((item) => {
        console.log(`Language name :- ${item.languageName} file name :- ${item.fileName}`);
    });
 
 
          
