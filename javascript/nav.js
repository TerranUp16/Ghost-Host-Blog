let navExpand = false;

function expandTop(event) {
  if (navExpand) {
    navExpand = false;
    $(".navbar").css("height", "10vh");
    $(".nav-link")
      .css("font-size", "32px")
      .css("height", "10vh")
      .css("line-height", "10vh")
      .css("width", "200px")
      .css("padding", "0");
      $(".navbar-nav").css("height", "10vh");
  } else {
    navExpand = true;
    $(".navbar-nav").css("height", "auto");
    $(".navbar").css("height", "auto");
    $(".nav-link")
      .css("font-size", "16px")
      .css("width", "100%")
      .css("line-height", "16px")
      .css("height", "auto")
      .css("padding-top", "1vh")
      .css("padding-bottom", "1vh")
      .removeClass("active");
  }
}

// Setup handlers
$(function() {
  // Handle navbar click
  $(".navbar-toggler").click(expandTop);
});