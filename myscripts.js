function scroll() {
                var t = window.scrollY;
                var para = document.getElementById("para");
                var m = -0.45;
                var b = 0;
                var newY = m*t + b;
                para.style.backgroundPositionY = newY + "px";
    
    
                var paint = document.getElementById("paint");
                if (t > 1200) {
                   paint.style.transform = "scale(1.8,1.8)";
                }

     var centreheader = document.getElementById("centre-header");
                if (t > 2000) {
                    centreheader.style.marginLeft = "350px";
                }
    
            }

 var msg = document.getElementById("msg");
                if (t > 2400) {
                    msg.style.marginLeft = "70px";
                }





var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


function checkName(){
    var nameBox = document.getElementById('name');
    var name = nameBox.value;
    var validRegex1 = /\d+/;
    if (name.length < 4){
        nameBox.style.borderColor = "red";
    } else if (name.match(validRegex1)){
        nameBox.style.borderColor = "red";
    } else {
      nameBox.style.borderColor = "green";  
    }
}
   
function checkEmail() {
  var validRegex2 = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  if (email.value.match(validRegex2)) {
    email.style.borderColor = "green"; 
  } else {
    email.style.borderColor = "red";  
  }
}

function checkId() {
    var productid = document.getElementById('productid');
    var idmessage = productid.value;
    if (idmessage.match(/#BD19/)) {
        productid.style.borderColor = "green"; 
} else if (idmessage.match(/#BD20/)) {
    productid.style.borderColor = "green"; 
} else if (idmessage.match(/#BD21/)) {
    productid.style.borderColor = "green"; 
} else if (idmessage.match(/#BD22/)) {
    productid.style.borderColor = "green"; 
} else if (idmessage.match(/#BD23/)) {
    productid.style.borderColor = "green"; 
} else if (idmessage.match(/#BD24/)) {
    productid.style.borderColor = "green"; 
} else {
    productid.style.borderColor = "red"; 
}
}

function checkMessage() {
    var msgBox = document.getElementById('message');
    var msg = msgBox.value;
    if (msg.length < 10){
        msgBox.style.borderColor = "red";
    } else if (msg.length > 30){
        msgBox.style.borderColor = "red";
    } else {
      msgBox.style.borderColor = "green";  
    }
}

function ShowDiv(select) {
   if(select.value==4){
    document.getElementById('hiddendiv').style.display = "block";
   } else{
    document.getElementById('hiddendiv').style.display = "none";
   }
}


          

