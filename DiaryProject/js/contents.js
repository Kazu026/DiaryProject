/*
    各コンテンツのフェードアウト機能を管理
 */
$(function() {
    $('[name="band"]:radio').change( function() {
        if($('[id=diary]').prop('checked')){
            $('.text').fadeOut(1);
            $('.text01').fadeIn(1000);
  　    }else if ($('[id=plan]').prop('checked')) {
            $('.text').fadeOut(1);
            $('.text02').fadeIn(1000);
        }else if ($('[id=project]').prop('checked')) {
            $('.text').fadeOut(1);
            $('.text03').fadeIn(1000);
        } else if ($('[id=picture]').prop('checked')) {
            $('.text').fadeOut(1);
            $('.text04').fadeIn(1000);
        }
    });
});
