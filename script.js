$(".about").click(function() {
    $('html,body').animate({
        scrollTop: $(".jumbotron").offset().top},
        'slow');
});
$(".portofolio").click(function() {
    $('html,body').animate({
        scrollTop: $("#portofolio").offset().top},
        'slow');
});
$(".contact").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});
$(".form-horizontal").submit(function(event) {
  alert("Form has been submitted");
  event.preventDefault();
  this.reset();
});