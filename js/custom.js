$(document).ready(function() {
    $( ".header-buttom" ).slideUp()
    $( ".icon-one" ).click(function(){
        $(this).toggleClass('active-one');
        $( ".header-buttom" ).slideToggle();
      });
  })

