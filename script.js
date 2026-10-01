document.addEventListener('DOMContentLoaded', function () {
  var mainPs = document.querySelectorAll('p.mainP');
  mainPs.forEach(function (p) {
    var a = p.querySelector('a[data-key]');
    if (!a) return;
    var webImg = document.querySelector('img.webImg[data-for="' + a.dataset.key + '"]');

    function show() {
      a.classList.add('visible');
      if (webImg) webImg.classList.add('visible');
    }
    function hide() {
      a.classList.remove('visible');
      if (webImg) webImg.classList.remove('visible');
    }

    a.addEventListener('mouseenter', show);
    a.addEventListener('mouseleave', hide);

    function handleScroll() {
      if (window.innerWidth >= 768) return;
      var top = p.getBoundingClientRect().top;
      if (top < 300) show();
      if (top < 20) hide();
      if (top > 300) hide();
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  });
});
