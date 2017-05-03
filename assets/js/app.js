var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById("nav-header").classList.remove("header-in");
     document.getElementById("nav-header").style.background = "white";
     document.getElementById("sign").style.display="block";
     document.getElementsByClassName("nav-ul")[0].style.color="black";
     document.getElementById("nav-header").style.color="#4c484b";
     document.getElementById("img-logo").src="assets/img/logo-pink.png";
   } 
     if(currentScroll<=3){
      document.getElementById('nav-background').style.display="table";
       document.getElementById("nav-header").classList.remove("solid");
       document.getElementById("nav-header").classList.remove("header-in");
       document.getElementById("nav-header").style.background = "";
       document.getElementById("img-logo").src="assets/img/logo-white.png";
       document.getElementsByClassName("nav-ul")[0].style.color="white";
       document.getElementById("sign").style.display="none";
     }
   lastScrollTop = currentScroll;
}, false);


  var clases =document.getElementsByClassName("input");
  var phone = document.getElementById("phone");
  var nombre=document.getElementById("name");
  var email=document.getElementById("email");
  var city=document.getElementById("city");


  phone.addEventListener("focus",function(){
     document.getElementById("view").style.display="block"; 
  });
  phone.addEventListener("blur",function(){
      evaluar(0,phone);
  });
  email.addEventListener("blur",function(){
      evaluar(2,email);
  });
  city.addEventListener("blur",function(){
      evaluar(3,city);
  });
  nombre.addEventListener("blur",function(){
      evaluar(1,nombre);
  });

function evaluar(index,input){
  if (input.value =="") {
    clases[index].classList.add("error");
  }
  else{
    clases[index].classList.remove("error");
  }
}