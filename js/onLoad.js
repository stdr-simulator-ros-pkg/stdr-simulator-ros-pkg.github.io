$(document).ready(function() {

  $('#description_id').click(function() {
      $('#content_download').slideUp('slow', function() {});
      $('#content_multimedia').slideUp('slow', function() {});
      $('#content_tutorials').slideUp('slow', function() {});
      $('#content_contribute').slideUp('slow', function() {});
      $('#content_contact').slideUp('slow', function() {});
      $('#content_description').slideDown('slow', function() {
        $('html, body').animate({
            scrollTop: $("#content_description").offset().top
        }, 1000);
      });
      return false;
  });
  
  $('#download_id').click(function() {
      $('#content_description').slideUp('slow', function() {});
      $('#content_multimedia').slideUp('slow', function() {});
      $('#content_tutorials').slideUp('slow', function() {});
      $('#content_contribute').slideUp('slow', function() {});
      $('#content_contact').slideUp('slow', function() {});
      $('#content_download').slideDown('slow', function() {
        $('html, body').animate({
            scrollTop: $("#content_download").offset().top
        }, 1000);
      });
      return false;
  });
  
  $('#multimedia_id').click(function() {
      $('#content_description').slideUp('slow', function() {});
      $('#content_download').slideUp('slow', function() {});
      $('#content_tutorials').slideUp('slow', function() {});
      $('#content_contribute').slideUp('slow', function() {});
      $('#content_contact').slideUp('slow', function() {});
      $('#content_multimedia').slideDown('slow', function() {
        $('html, body').animate({
            scrollTop: $("#content_multimedia").offset().top
        }, 1000);
      });
      return false;
  });
  
  $('#tutorials_id').click(function() {
      $('#content_description').slideUp('slow', function() {});
      $('#content_download').slideUp('slow', function() {});
      $('#content_multimedia').slideUp('slow', function() {});
      $('#content_contribute').slideUp('slow', function() {});
      $('#content_contact').slideUp('slow', function() {});
      $('#content_tutorials').slideDown('slow', function() {
        $('html, body').animate({
            scrollTop: $("#content_tutorials").offset().top
        }, 1000);
      });
      return false;
  });
  
  $('#contribute_id').click(function() {
      $('#content_description').slideUp('slow', function() {});
      $('#content_download').slideUp('slow', function() {});
      $('#content_multimedia').slideUp('slow', function() {});
      $('#content_tutorials').slideUp('slow', function() {});
      $('#content_contact').slideUp('slow', function() {});
      $('#content_contribute').slideDown('slow', function() {
        $('html, body').animate({
            scrollTop: $("#content_contribute").offset().top
        }, 1000);
      });
      return false;
  });
  
  $('#contact_id').click(function() {
      $('#content_description').slideUp('slow', function() {});
      $('#content_download').slideUp('slow', function() {});
      $('#content_multimedia').slideUp('slow', function() {});
      $('#content_tutorials').slideUp('slow', function() {});
      $('#content_contribute').slideUp('slow', function() {});
      $('#content_contact').slideDown('slow', function() {
        $('html, body').animate({
            scrollTop: $("#content_contact").offset().top
        }, 1000);
      });
      return false;
  });
  
  $("a[rel^='prettyPhoto']").prettyPhoto({slideshow:3000, autoplay_slideshow:true});
} );
