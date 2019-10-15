$(function() {

  $('#aside1').hide();
  
  $( window ).resize(function() {
    if ( parseInt($( window ).width()) <= 768) {
      $('#aside1').hide();
      $('a.toggleSidebar span.fas').removeClass('fa-angle-left');
      $('a.toggleSidebar span.fas').addClass('fa-angle-right');
      $(function(){
        $("a.toggleSidebar").hover(
          function(){
                //Ao posicionar o cursor sobre a div
                $('#aside1').css('box-shadow', '5px 5px 5px 5px  rgba(0,0,0,0.2)');
              },
              function(){
                //Ao remover o cursor da div
                $('#aside1').css('box-shadow', '5px 5px 5px 5px  rgba(0,0,0,0');
              }
          );
      });
      $('#aside1').css('width','250px');
      $('#aside1').css('height','1280px');
      $(document).off('click', 'a.toggleSidebar');
      $(document).on('click', 'a.toggleSidebar', function(){
        if ($('#aside1').css('display') == 'none') {
          $('#aside1').show();
          $('a.toggleSidebar span.fas').removeClass('fa-angle-right');
          $('a.toggleSidebar span.fas').addClass('fa-angle-left');
        } else {
          $('#aside1').hide();
          $('a.toggleSidebar span.fas').removeClass('fa-angle-left');
          $('a.toggleSidebar span.fas').addClass('fa-angle-right');
        }        
      });
    } else {
      $('#aside1').hide();      
      $(function(){
        $("a.toggleSidebar").hover(
          function(){
                //Ao posicionar o cursor sobre a div
                $('#aside1').css('box-shadow', '5px 5px 5px 5px  rgba(0,0,0,0.2)');
              },
              function(){
                //Ao remover o cursor da div
                $('#aside1').css('box-shadow', '5px 5px 5px 5px  rgba(0,0,0,0');
              }
          );
      }); 
      $('#aside1').css('width','215px');
      $(document).off('click', 'a.toggleSidebar');
      $(document).on('click', 'a.toggleSidebar', function() {
        if ($('#aside1').css('display') == 'none') {
          $('#aside1').show();
          $('a.toggleSidebar span.fas').removeClass('fa-angle-right');
          $('a.toggleSidebar span.fas').addClass('fa-angle-left');
        } else {
          $('#aside1').hide();
          $('a.toggleSidebar span.fas').removeClass('fa-angle-left');
          $('a.toggleSidebar span.fas').addClass('fa-angle-right');
        }
      });
    }
  }).resize();
});