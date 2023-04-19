 // 1) Change heading text
 var header = document.getElementById('header')
 header.innerHTML = "change to heading text"
 header.style.fontFamily = "Georgia"
 header.style.fontFamily = "Arial"

//2) Change paragraph text color
 var para1 = document.getElementById('para1')
 para1.style.color = "red"

 //3) Change div background colors
 var div1 = document.getElementById('div1')
 div1.style.backgroundColor = "yellow"
 div1.style.width = "350px"
 div1.style.padding = "20px"
 div1.style.marginRight = "20px"

 var div2 = document.getElementById('div2')
 div2.style.backgroundColor = "pink"
 div2.style.width = "350px"
 div2.style.padding = "20px"

//4) Arrange both divs horizontally
var container = document.getElementsByClassName('container')[0]
 container.style.display = "flex"
 container.style.flexDirection = "row"

 var first = document.getElementsByClassName('first')[0]
     first.style.textAlign = "center";
 
 var second = document.getElementsByClassName('second')[0]
     second.style.textAlign = "center";