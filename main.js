import './style.scss'
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import "waypoints/lib/noframework.waypoints.min";


var options = {
    strings: ['Food ...', 'Drink ...'],
    typeSpeed: 70,
    backSpeed: 30,
    backDelay:1000,
    loop: true,
  };

  var typed = new Typed('.element', options);

  let toDown = {
    distance: '50px',
    origin: 'top',
    interval:200,
    opacity: null,
    duration:1000
};

ScrollReveal().reveal('.to-down', toDown);

let toRight = {
  distance: '50px',
  origin: 'left',
  interval:200,
  opacity: null,
  duration:1000
};

ScrollReveal().reveal('.to-right', toRight);

let toLeft = {
  distance: '50px',
  origin: 'right',
  interval:200,
  opacity: null,
  duration:1000
};

ScrollReveal().reveal('.to-left', toLeft);



let sections = ["about","services","menus"];
sections.forEach((section)=> {
    new Waypoint({
    element: document.getElementById(section),
    handler: function(direction) {
      let oldNavLink = document.querySelector(".nav-link.active")
      oldNavLink.classList.remove("active")
      let currentNavLink = document.querySelector(`[href="#${section}"]`);
      currentNavLink.classList.add("active");
    },
    offset: "50%"
  })
});

new Waypoint({
  element: document.getElementById("contact"),
  handler: function(direction) {
    let oldNavLink = document.querySelector(".nav-link.active")
    oldNavLink.classList.remove("active")
    let currentNavLink = document.querySelector(`[href="#contact"]`);
    currentNavLink.classList.add("active");
  },
  offset: "80%"
})

let menusList = [
  {
    id:1,
    img:"img/img/plate1.png",
    title:"Berbecus Salad",
    discription:'Special Delicious Dish',
    price:22.2,
    currency:"$"
  },

  {
    id:1,
    img:"img/img/plate2.png",
    title:"Salad with fish",
    discription:'Special Delicious Dish',
    price:30.5,
    currency:"$"
  },

  {
    id:1,
    img:"img/img/plate3.png",
    title:"Spenish Salad",
    discription:'Special Delicious Dish',
    price:50,
    currency:"$"
  }
];
 
 let menurow = document.getElementById("menurow")

 menusList.forEach((menuList) => {
  let div = document.createElement("div");
  div.classList.add("col-8", "col-md-4" ,"col-lg-3" ,"mt-0");
  div.innerHTML = `
        <div class="card plate-card mb-5 ">
          <img src="${menuList.img}" alt="" class="card-img-top w-75 mx-auto d-block my-4">
          <div class="card-body">
            <p class="fw-bold">${menuList.title}</p>
            <p class="text-black-50 small">${menuList.discription}</p>
          </div>
          <div class="d-flex justify-content-between align-content-center">
            <p class="mb-0"> ${menuList.price} ${menuList.currency}</p>
            <button class="btn btn-primary">
              <i class="bi bi-cart-plus"></i>
            </button>
          </div>
        </div>
  `
  menurow.append(div)
 })
