// загрузка
const mask = document.querySelector('.mask');
window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
    mask.remove();
  }, 600);
});


/*Nav menu_up*/
const upEl = document.querySelector('.nav__image_up');
const menuEl = document.querySelector('.nav__menu_up');

// вызываем элемент и скрываем если клик был за его пределами

const toggleMenu = function () {
  menuEl.classList.toggle("menu_show");
  upEl.classList.toggle("nav__image_out");
}

upEl.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == menuEl || menuEl.contains(target);
  const its_btnMenu = target == upEl;
  const menu_is_active = menuEl.classList.contains("menu_show");

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
  }
});


window.onload = function () {
  const box1 = document.querySelector('#box1');

  box1.onmouseover = function (e) {
    document.getElementById('box4').style.background = '#a6998e';
    document.getElementById('box5').style.background = 'rgba(166, 153, 142, 0.2)';
    document.getElementById('box6').style.background = 'rgba(166, 153, 142, 0.2)';
  };

  box1.onmouseout = function (e) {
    document.getElementById('box4').style.background = 'rgba(166, 153, 142, 0.2)';
  };

  const box2 = document.querySelector('#box2');

  box2.onmouseover = function (e) {
    document.getElementById('box5').style.background = '#a6998e';
    document.getElementById('box4').style.background = 'rgba(166, 153, 142, 0.2)';
    document.getElementById('box6').style.background = 'rgba(166, 153, 142, 0.2)';
  };
  box2.onmouseout = function (e) {
    document.getElementById('box5').style.background = 'rgba(166, 153, 142, 0.2)';
  };

  const box3 = document.querySelector('#box3');

  box3.onmouseover = function (e) {
    document.getElementById('box6').style.background = '#a6998e';
    document.getElementById('box4').style.background = 'rgba(166, 153, 142, 0.2)';
    document.getElementById('box5').style.background = 'rgba(166, 153, 142, 0.2)';
  };
  box3.onmouseout = function (e) {
    document.getElementById('box6').style.background = 'rgba(166, 153, 142, 0.2)';
  };

};

// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 575px
    // 575: {
    //   slidesPerView: 3,
    //   spaceBetween: 8
    // },
    767: {
      slidesPerView: 3,
      spaceBetween: 12
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1399: {
      slidesPerView: 3,
      spaceBetween: 24
    }
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

