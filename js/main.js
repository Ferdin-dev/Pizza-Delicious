function openNav() {
  document.getElementById('nav').style.display = 'block';
}

/*
<
>
*/

var slideIndex = 0;
slideStart();

function slideStart() {
  var i;
  var slideElement = document.getElementsByClassName('slider');
  for (i = 0; i < slideElement.length; i++) {
    slideElement[i].style.display = 'none';
  }

  slideIndex++;
  if (slideIndex > slideElement.length) {
    slideIndex = 1
  }
  slideElement[slideIndex - 1].style.display = 'block';
  setTimeout(slideStart, 5000);
}

$(document).ready(function () {


  let $btns = $('.menu-content .menu-btn a');

  $btns.click(function (e) {

    $('.menu-content .menu-btn a').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');

    $('.menu-content .filtered-container .select-menu').isotope({
      fliter: selector
    });

    return false;

  })



});