
//________________________filter_____________________//
//filter returns values

const arr=[3,4,2,1,5,6,9,4,7]
//const nums=arr.filter((num)=>num>5)

//      OR       //

//const nums=arr.filter((item)=>{ return item>4 })
//console.log(nums);


//___________________impliment above service by for each loop_________________//
      /* const array=[12,23,34,45,56,67,78,89,90]
       const newarr=[]
       array.forEach((num)=>{
        if(num<75)
            {
                newarr.push(num)
            }
       })
       console.log(newarr);
         */



//_________________________________MAP_______________________//
//map also return values like filter

//const numarr=[0,1,2,3,4,5,6,7,8,9]

//const numbers=numarr.map((num)=>num+10 )

//               OR            //

//const numbers=numarr.map((num)=>{ return num+20 })
//console.log(numbers);



//__________________________________________Method chaining______________________________//

/*const myarr=[1,2,3,4,5,6,7,8,9]
const resarr=myarr.map((num)=> num*10).map((item)=> item+5).filter((value)=> value<50)
console.log(resarr);*/



//___________________________________Reduce method_____________________________________//

             /*const naturalnum=[1,2,3,4,5]
             const myTotal=naturalnum.reduce(function(accumulator,currentValue){
             console.log(`accu ${accumulator}, curr ${currentValue}`);
               return accumulator * currentValue
               },10)
                console.log(myTotal);*/

         //----reduce with arrow function---//
                 /*const code=[1,2,3,4,5]    
                 const tot=code.reduce((acc,curr)=>acc + curr,10)   
                 console.log(tot);  */



                 const shoppingCart=[
                    {
                        courseName:"web dev",
                        price:8999
                    },
                    {
                        courseName:"android dev",
                        price:9999
                    },
                    {
                        courseName:"data science",
                        price:7999
                    },
                    {
                        courseName:"ios dev",
                        price:7899
                    },
                 ]

                 const priceToPay=shoppingCart.reduce((accu,item)=>accu +item.price,0)
                 console.log(`Total payable amount is :- ${priceToPay}`);