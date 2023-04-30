//Que 01  Add new Student into Array of Object

var students = [
{name:"Manish", grade:5},
{name:"Rajni", grade:6},
{name:"Gopal", grade:7},
{name:"Mohan", grade:8},
];

var newStudent = {name:"Massi", grade:9}
students.push(newStudent)

var mainList = document.createElement("ul")
mainList.classList = "student-List";
document.body.appendChild(mainList)

var newListitem = document.createElement("li")
newListitem.textContent = "Name: " + newStudent.name + " , grade:" + newStudent.grade;
mainList.appendChild(newListitem)

console.log(students)
//===========================================
//Que 02 FIlter students whose grade is more than 5 

// var students = [
//     {name:'nisha', class:'5th', grade:6},
//     {name:'nitesh', class:'5th', grade:5},
//     {name:'nidhi', class:'5th', grade:4},
//     {name:'nitu', class:'5th', grade:9},
// ];

// var filterStudent = students.filter(function(student){   //filter() = method
//     return student.grade>5;
// });
// //output
// console.log(filterStudent)
//==================================
//3. Update student grade from 7-8 whose name is Messi

// var students = [
//  {name:'Rohit', grade:5},
//  {name:'Massi', grade:7},
//  {name:'Ritesh', grade:9},
//  {name:'Rohan', grade:6},
// ];

// for(var i = 0; i<students.length; i++){
//     if(students[i].name == 'Massi'){
//         students[i].grade++;
//     }
// }
// console.log(students)
//==================================================
//4. Add add new property as Country: "INDIAN" with all students
  
// var students = [
//     {name:'Rohit', grade:5},
//     {name:'Massi', grade:7},
//     {name:'Ritesh', grade:9},
//     {name:'Rohan', grade:6},
//    ];
   
//    for(var i = 0; i<students.length; i++){
//     (students[i].Country = 'INDIA')
           
//    }
//    console.log(students)