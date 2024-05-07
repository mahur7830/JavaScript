

//__________IIFE_CONCEPT______IMMEDIATE INVOKE FUNCTION EXPRESSION___________________//
// it is also called named iife because it has a name ,code
(function code(){console.log(`db connected`)})
();


//IIFE with arrow function --Unnamed iife
((name)=>{
    console.log(`Hello ${name} DB connected`);
})("Anil")