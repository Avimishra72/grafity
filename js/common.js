// page scroll to top on refresh
// =======================================================

// window.addEventListener("beforeunload", function () {
//   window.scrollTo(0, 0);
// });

/*================================= Sticky Header Starts =================================*/

function fixedHeader() {
  var sticky = $("#header"),
    scroll = $(window).scrollTop();
  if (scroll >= 10) sticky.addClass("fixHeader");
  else sticky.removeClass("fixHeader");
}

$(window).scroll(function (e) {
  fixedHeader();
});
fixedHeader();
/* Sticky Header Ends */

$("#header").load("header.html", function () {
  let activePageName = $("#header").attr("pagename");
  $("#" + activePageName).addClass("active");

  fixedHeader();
  if ($(window).outerWidth() <= 990) {
    var MobileMenu = new MobileNav({
      initElem: "nav",
      menuTitle: "Menu",
    });
  }
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    const hasDropdowns = item.querySelector(".dropdown") !== null;
    if (hasDropdowns) {
      item.classList.add("dr-icon");
    }
  });
});

$("#footer").load("footer.html");

/* common tab start */
$(".tabgroup > div").hide();
$(".tabgroup > div:first-of-type").show();
$(".tabs a").click(function (e) {
  e.preventDefault();
  var $this = $(this),
    tabgroup = "#" + $this.parents(".tabs").data("tabgroup"),
    others = $this.closest("li").siblings().children("a"),
    target = $this.attr("href");
  others.removeClass("active");
  $this.addClass("active");
  $(tabgroup).children("div").hide();
  $(target).show();
});
/* common tab end */

/* Form Feild Functionality */
$(document).on("input", ".form-field", function () {
  if ($(this).val().length > 0) {
    $(this).addClass("field--not-empty");
  } else {
    $(this).removeClass("field--not-empty");
  }
});
/* Form Feild Functionality ends */

// Lenis
const lenis = new Lenis();
lenis.on("scroll", (e) => {
  // console.log(e)
  //   console.log(e.direction);
  if ($(window).outerWidth() > 991) {
    if (e.direction === 1) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  } else {
  }
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
// Lenis Ends

AOS.init();
