// swiper 7col
var swiper = new Swiper(".mySwiper", {
  rewind: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// other swiper
var swiper = new Swiper(".mySwiperd", {
  rewind: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// line under text
var btnContainer = document.getElementById("newActive");
var newestHeader = btnContainer.getElementsByClassName("newestHeader");

for(var i =0; i<newestHeader.length; i++){
  newestHeader[i].addEventListener('click', function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active");
    this.className += " active";
  })
}

var btnContainer = document.getElementById("newActived");
var newestHeaderd = btnContainer.getElementsByClassName("newestHeaderd");

for(var i =0; i<newestHeaderd.length; i++){
  newestHeaderd[i].addEventListener('click', function(){
    var current = document.getElementsByClassName("actived");
    current[0].className = current[0].className.replace("actived");
    this.className += " actived";
  })
}

var btnContainer = document.getElementById("newActivedd");
var newestHeaderdd = btnContainer.getElementsByClassName("newestHeaderdd");

for(var i =0; i<newestHeaderdd.length; i++){
  newestHeaderdd[i].addEventListener('click', function(){
    var current = document.getElementsByClassName("activedd");
    current[0].className = current[0].className.replace("activedd");
    this.className += " activedd";
  })
}

// goup
let mybutton = document.getElementById("go-up");

// show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// scroll to the top 
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



