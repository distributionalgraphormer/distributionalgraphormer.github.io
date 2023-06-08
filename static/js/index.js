window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var INTERP_BASE2 = "./static/interpolation/stacked2";
var INTERP_BASE_CATA_1 = "./static/interpolation/catalyst_1";
var INTERP_BASE_CATA_2 = "./static/interpolation/catalyst_2";
var INTERP_BASE_CATA_3 = "./static/interpolation/catalyst_3";
var NUM_INTERP_FRAMES = 50;
var NUM_INTERP_FRAMES_CATA = 25;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}
var interp_images2 = [];
function preloadInterpolationImages2() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE2 + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images2[i] = new Image();
    interp_images2[i].src = path;
  }
}
var interp_images_CATA1 = [];
function preloadInterpolationImages_cata1() {
  for (var i = 0; i < NUM_INTERP_FRAMES_CATA; i++) {
    var path = INTERP_BASE_CATA_1 + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_CATA1[i] = new Image();
    interp_images_CATA1[i].src = path;
  }
}
var interp_images_CATA2 = [];
function preloadInterpolationImages_cata2() {
  for (var i = 0; i < NUM_INTERP_FRAMES_CATA; i++) {
    var path = INTERP_BASE_CATA_2 + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_CATA2[i] = new Image();
    interp_images_CATA2[i].src = path;
  }
}
var interp_images_CATA3 = [];
function preloadInterpolationImages_cata3() {
  for (var i = 0; i < NUM_INTERP_FRAMES_CATA; i++) {
    var path = INTERP_BASE_CATA_3 + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_CATA3[i] = new Image();
    interp_images_CATA3[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function () { return false; };
  image.oncontextmenu = function () { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}
function setInterpolationImage2(i) {
  var image = interp_images2[i];
  image.ondragstart = function () { return false; };
  image.oncontextmenu = function () { return false; };
  $('#interpolation-image-wrapper2').empty().append(image);
}
function setInterpolationImageCata1(i) {
  var image = interp_images_CATA1[i];
  image.ondragstart = function () { return false; };
  image.oncontextmenu = function () { return false; };
  $('#interpolation-image-wrapper-catalyst1').empty().append(image);
}
function setInterpolationImageCata2(i) {
  var image = interp_images_CATA2[i];
  image.ondragstart = function () { return false; };
  image.oncontextmenu = function () { return false; };
  $('#interpolation-image-wrapper-catalyst2').empty().append(image);
}
function setInterpolationImageCata3(i) {
  var image = interp_images_CATA3[i];
  image.ondragstart = function () { return false; };
  image.oncontextmenu = function () { return false; };
  $('#interpolation-image-wrapper-catalyst3').empty().append(image);
}


function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("content-tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " is-active";
}



$(document).ready(function () {

  var options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  }

  // Initialize all div with carousel class
  var carousels = bulmaCarousel.attach('.carousel', options);

  // Loop on each carousel initialized
  for (var i = 0; i < carousels.length; i++) {
    // Add listener to  event
    carousels[i].on('before:show', state => {
      console.log(state);
    });
  }

  // Access to bulmaCarousel instance of an element
  var element = document.querySelector('#my-element');
  if (element && element.bulmaCarousel) {
    // bulmaCarousel instance is available as element.bulmaCarousel
    element.bulmaCarousel.on('before-show', function (state) {
      console.log(state);
    });
  }

  preloadInterpolationImages();
  preloadInterpolationImages2();
  preloadInterpolationImages_cata1();
  preloadInterpolationImages_cata2();
  preloadInterpolationImages_cata3();

  $('#interpolation-slider').on('input', function (event) {
    setInterpolationImage(this.value);
  });
  setInterpolationImage(0);
  $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

  $('#interpolation-slider2').on('input', function (event) {
    setInterpolationImage2(this.value);
  });
  setInterpolationImage2(0);
  $('#interpolation-slider2').prop('max', NUM_INTERP_FRAMES - 1);

  $('#interpolation-slider-catalyst1').on('input', function (event) {
    setInterpolationImageCata1(this.value);
  });
  setInterpolationImageCata1(0);
  $('#interpolation-slider-catalyst1').prop('max', NUM_INTERP_FRAMES_CATA - 1);

  $('#interpolation-slider-catalyst2').on('input', function (event) {
    setInterpolationImageCata2(this.value);
  });
  setInterpolationImageCata2(0);
  $('#interpolation-slider-catalyst2').prop('max', NUM_INTERP_FRAMES_CATA - 1);

  $('#interpolation-slider-catalyst3').on('input', function (event) {
    setInterpolationImageCata3(this.value);
  });
  setInterpolationImageCata3(0);
  $('#interpolation-slider-catalyst3').prop('max', NUM_INTERP_FRAMES_CATA - 1);


  bulmaSlider.attach();


  document.querySelectorAll('button.loads-model').forEach((button) => {
    button.setAttribute('data-action', 'load');
    button.addEventListener('click', () => {
      // button.classList = button.classList + " disappearing";
      // let model = button.parentElement.parentElement;
      // get the current content of the button
      let content = button.innerHTML;
      let words = content.split(' ');
      let pdbword = words[1];

      let model = document.getElementById(button.getAttribute("data-controls"));

      if (button.getAttribute('data-action') == 'load') {
        model.dismissPoster();
        button.classList = "btn btn-disabled";
        button.innerHTML = "Hide " + pdbword + " Structure";
        button.setAttribute('data-action', 'unload');
      } else {
        model.showPoster();
        button.classList = "btn btn-primary";
        button.innerHTML = "Load " + pdbword + " Structure";
        button.setAttribute('data-action', 'load');
      };
    });
  });

})
