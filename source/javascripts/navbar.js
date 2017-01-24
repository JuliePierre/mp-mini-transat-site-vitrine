$(document).ready(function() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 65) {
      $('#index-navbar').removeClass('index');
    }
    if ($(window).scrollTop() < 65) {
      $('#index-navbar').addClass('index');
    }
  });
});

$(document).ready(function() {
  var page = $('nav')[0].id.split("-")[0];
  console.log('page')
  var links = $('nav ul a')
  links.each(function(i, item) {
    console.log(item.getAttribute("data-info"));
    if (item.getAttribute("data-info") == page) {
      $(item).addClass('brand-red-text');
      $(item).addClass('semi-gras');
    };
    if (item.getAttribute("data-info") != page) {
      $(item).removeClass('brand-red-text');
      $(item).removeClass('semi-gras');
    };
  });
});
