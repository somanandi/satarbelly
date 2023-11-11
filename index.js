$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $(".starbelly-navbar").addClass("fixed-top");
    } else {
      $(".starbelly-navbar").removeClass("fixed-top");
    }
  });

function booking() {
    alert('book a table');
  }