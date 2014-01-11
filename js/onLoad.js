$(document).ready(function() {

  $('#description_id').click(function() {
      $('#content_download').slideUp('slow', function() {});
      $('#content_multimedia').slideUp('slow', function() {});
      $('#content_tutorials').slideUp('slow', function() {});
      $('#content_contribute').slideUp('slow', function() {});
      $('#content_contact').slideUp('slow', function() {});
      $('#content_description').slideDown('slow', function() {
        //~ $(document).scrollTo('#content_description');
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
        //~ $(document).scrollTo('#content_download');
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
        //~ $(document).scrollTo('#content_multimedia');
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
        //~ $(document).scrollTo('#content_tutorials');
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
        //~ $(document).scrollTo('#content_contribute');
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
        //~ $(document).scrollTo('#content_contact');
      });
      return false;
  });
  
  $("a[rel^='prettyPhoto']").prettyPhoto({slideshow:3000, autoplay_slideshow:true});
} );
