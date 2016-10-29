$("#sidebar-toggle").on("click", function(e) {
  e.preventDefault();
  $('body').toggleClass("sidebar--open");
});
