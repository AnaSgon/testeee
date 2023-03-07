// SCRPIT PARA O MENU

/*window.onscroll = function mudarMenu(){
  if (window.scrollY > 300){
      document.getElementById("menu").style.backgroundColor = "#61378C";
      document.getElementById("menu").style.boxShadow = "2px 2px 10px #000000";
  } else{
      document.getElementById("menu").style.backgroundColor = "";
      document.getElementById("menu").style.boxShadow = "";
  }

}*/

//SCRIPT PRODUTOS

function lua() {
  let validado = true;

  document.querySelectorAll("[required]").forEach(function (i) {
    if (validado == false) {
      return;
    }
    if (i.type === "text") {
      if (!i.value) {
        validado = false;
        return;
      }
    }
  });

  if (validado) {
    document.getElementById("lua").classList.toggle("d-none");
  }

}

function marte() {
  let validado = true;

  document.querySelectorAll("[required]").forEach(function (i) {
    if (validado == false) {
      return;
    }
    if (i.type === "text") {
      if (!i.value) {
        validado = false;
        return;
      }
    }
  });

  if (validado) {
    document.getElementById("marte").classList.toggle("d-none");
  }

}

function jupter() {
  let validado = true;

  document.querySelectorAll("[required]").forEach(function (i) {
    if (validado == false) {
      return;
    }
    if (i.type === "text") {
      if (!i.value) {
        validado = false;
        return;
      }
    }
  });

  if (validado) {
    document.getElementById("jupter").classList.toggle("d-none");
  }

}




/*NOVA ABA*/
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Qualidade", "Bom-Preço", "Corte-Macio", "Praticidade"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
     var typed = new Typed(".typing-2", {
        strings:["YouTuber", "Desenvolvedor", "Designer", "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});