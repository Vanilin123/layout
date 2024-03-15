window.addEventListener('DOMContentLoaded', function () {

  //burger

  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.add('is-active')
  });

  document.querySelector('#burger--close').addEventListener('click', function () {
    document.querySelector('#menu').classList.remove('is-active')
  });

  // search

  document.querySelector('#search-btn').addEventListener('click', function () {
    document.querySelector('#search-open').classList.toggle('search-active');
    document.querySelector('#search-btn').classList.toggle('search-active')
  });

  document.querySelector('#search-close').addEventListener('click', function () {
    document.querySelector('#search-open').classList.toggle('search-active');
    document.querySelector('#search-btn').classList.toggle('search-active')
  });

  // swiper

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

  // tab

  document.querySelectorAll('.stages__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.stages__btn').forEach(function (btn) {
        btn.classList.remove('stages__btn--active')
        e.currentTarget.classList.add('stages__btn--active');
      });
      document.querySelectorAll('.stages__content').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('stages__content--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('stages__content--active');
    });
  });

  // accordion

  $(".accordion").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false
  });

});



