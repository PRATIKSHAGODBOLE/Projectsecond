
// // Write code to create an Object containing information 
// (Name, Age, Address(City, State, Pincode), Hobbies) 
// and also having function to display all information.

function display(){
  var details = {
    "Name":"Pratiksha",
    "Age":22,
    "Address":{
      "City":"Nagpur",
      "State":"Maharastra",
      "Pin code":"440022"
    },
    "hobbies": ["reading", "playing guitar", "hiking"],
  };
  
  return details;
}

console.log(display());
