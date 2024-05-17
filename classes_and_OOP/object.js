       /*  function multiplyBy5(num){
            return num*5
           }

            multiplyBy5.digit=2;

            console.log(multiplyBy5(5));

//-----------------use of a function as an object-----------------------//
       console.log(multiplyBy5.digit);
       console.log(multiplyBy5.prototype);
       */



//_________________________importance of new_________________prototyping____________________//
                 
                    function product(productName,price){
                      this.productName = productName
                      this.price = price
                    }


    //---inject own properties by using prototype like on array map(), length, slice() etc..----------------//         
                    
                    product.prototype.increment = function(){
                        this.price++;
                        console.log(this.price);
                    }
                    product.prototype.printMe = function(){
                        console.log(`price is : ${this.price}`);
                    }

                    //   call     //
                    const tea = new product("tea",25);
                    const coffe = new product("coffe",50);
      //----here don't need of writing full syntax like this { tea.prototype.increment(); } prototyping handles
      //  by javascript itself------------this is correct syntax----------//
                    tea.printMe();
                    coffe.increment();



/*
// this about the new keyword



Here's what happens behind the scenes when the new keyword is used:



A new object is created: The new keyword initiates the creation of a new JavaScript object.



A prototype is linked: The newly created object gets linked to the prototype property of 
the constructor function. This means that it has access to properties and methods defined 
on the constructor's prototype.



The constructor is called: The constructor function is called with the specified arguments 
and this is bound to the newly created object. If no explicit return value is specified from 
the constructor, JavaScript assumes this, the newly created object, to be the intended return value.



The new object is returned: After the constructor function has been called, if it doesn't
 return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/