

//_____________truthy falsy means some values that has a fix meaning ture or false___________________//


//-----Falsy values------//

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//---------truthy values---------//

// "0", 'false', " ", [], {}, function(){}

const useremail=[]
if(useremail.length===0)
    {
        console.log("array is empty");
    }
 else{
    console.log("enter data");
 }   


 const emptyobj={}
 if(Object.keys(emptyobj).length===0){
    console.log("obj empty");
 }

 // false==0, false=='', 0==''