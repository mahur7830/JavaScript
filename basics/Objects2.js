//-----------------------creation of object by constructor OR singleton object-----------------//
             const user= new Object();
             //console.log(user);

             user.name="Anil kumar"
             user.contact_number=7830197952
             user.email="mahuranil78@gmail.com"
             user.city="Bulandshahr"
             //console.log(user);
  
             
//----------------nessting of objects----------------//  
/*const user1={
    email:"anil123@gmail.com",
    city:"bulandhsahr",
    name:{
        fullname:{
            fullnameWith_NickName:{
                firstName:"Anil",
                middleName:"Kumar",
                lastName:"Chandravanshi",
                nickName:"Mahurji"
            }        }
    }
}           
     connsole.log(user1);
     console.log(user1.name.fullname.fullnameWith_NickName)*/


     //--------------------merging of objects--------------------//
     /*const obj1={1:"anil",2:"kumar",3:4};
     const obj2={4:"lodhi",5:"rajpoot"};
     //Here obj1 is the target and obj2 is the source
     Object.assign(obj1,obj2);

     //here  obj1,obj2 are the source and {} means obj3 is the target 
     const obj3=Object.assign({},obj1,obj2);
     console.log(obj1);
     console.log(obj3);
     
     //third way of merging
     const obj4={...obj1,...obj2};
     console.log(obj4);*/


     //-----------Access the kays of an object----it gives the keys into an array-----//
     /*console.log(Object.keys(user));
     console.log(Object.values(user));
     console.log(Object.entries(user));
     console.log(Object.hasOwnProperty('name'));*/


