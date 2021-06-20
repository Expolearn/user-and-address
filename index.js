// Define a user and use all the details and define an address as an object with proprties such as street number, suburb, city, Country using OOP.
// Display each detail on the console or table format.
//we created it together on replit

class User {
   constructor(name, surname, age, gender,){
     this.name = name;
     this.surname = surname;
     this.age = age;
     this.gender = gender;


   }
   
      getUserDetails(na, sur, ag, gen){
        
       return na + " " + sur + " his age is "+ ag+" " + "and"+" "+"his gender is "  + gen;
   }
  
} 

   var U = new User();

   console.table(U.getUserDetails("Lunah", "sinugo", 24, "male"));

class Address extends User {
   constructor(streetnum, surbub, city, countryy){
     super();
     this.steetnum = streetnum ;
     this.surbub = surbub;
     this.city = city;
     this.coutryy = countryy;

   }
   
      getAddressDetails(streetnum, surbub, city, countryy){
        
       return "street number is"+ " "+ streetnum + " " + surbub + " "+ city +" "+ countryy;
   }
  
} 

 const Adde = new Address();
 console.log(Adde.getAddressDetails( 13, "bendor", "polokwane" , "South Africa" ));
