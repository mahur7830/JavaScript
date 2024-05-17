
//_________________________pure prototype discussion_______________________//
                      let heros = ["Ramanujan","Charak","Shivaji"]

                      const heroPower = {
                        ramanujan : "Mathematician",
                        charak : "Surgury Specialist",
                        shivaji : "fighter",
                        getPower : function()
                        {
                            console.log(`the power of ramanujan is ${this.ramanujan}`);
                        }
                      }
                      

     //-----Add customize  function or property using prototype into the Object that will be available in all Objects
     // like array, string,  etc.....
                   Object.prototype.power = function(){
                    console.log('this property or method is added into object customizedly');
                   }
                   
                   //---------------Access this new added property---in array, string, object---------//
                                heros.power();
                                
                                heroPower.power();

                                String.power();