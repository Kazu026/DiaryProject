
$(function() {
  $('[name="band"]:radio').change( function() {
    if($('[id=diary]').prop('checked')){
      $('.text').fadeOut();
      $('.text01').fadeIn();
  } else if ($('[id=plan]').prop('checked')) {
      $('.text').fadeOut();
      $('.text02').fadeIn();
    }
  });
});
