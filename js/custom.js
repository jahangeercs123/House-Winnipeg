$(document).ready(function() {
    $( ".icon-one" ).click(function(){
        $(this).toggleClass('active-one');
        $( ".header-buttom" ).slideToggle();
      });
  })