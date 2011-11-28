try{
  (function( $ ){
    var scripts = document.getElementsByTagName('script');
    var thisScript = scripts[scripts.length-1];
    var path=thisScript.src.substr(0,thisScript.src.lastIndexOf('/')+1);

    $.patience = function( options ) {  

      var settings = $.extend( {
        div_loading : 'loading-patience',
        loading_image : path+"ajax-loader.gif",
        message : 'Loading...',
        height: 120,
        width: 200

      }, options);

      var div_loading = '<div id="'+settings.div_loading+'" style="width:'+settings.width+'px;height:'+settings.height+'px; display:none; background-image:url('+settings.loading_image+'); background-repeat:no-repeat; background-position: center 30%; border:1px solid; box-shadow:2px 2px 5px #888888; text-align:center; position:absolute; margin-left:auto; margin-right:auto"><div style="margin-top:'+(settings.height-120+85)+'px;">'+settings.message+'</div></div>'

      if (typeof options === "undefined" ){
        $('#'+settings.div_loading).remove();
        $('body').append(div_loading);

      } else{
        if (typeof options.div_loading === "undefined"){
          $('#'+settings.div_loading).remove();
          $('body').append(div_loading);
        }
      }

      $('#'+settings.div_loading).ajaxStart(function(){

        var v_position = $(window).scrollTop()+ (($(window).height()-$(this).height())/2)
        var h_position = $(window).scrollLeft()+ (($(window).width()-$(this).width())/2)

        $(this).css('top',v_position);
        $(this).css('left',h_position);
        $(this).show();

      });

      $('#'+settings.div_loading).ajaxStop(function(){
        $(this).hide();

      });
    };
  })( jQuery );
} catch (err)
{
  if (err.toString().match('jQuery is not defined') != null)
    alert('I\'m sorry, but jQuery is not loaded')
}

$(document).ready(function(){
  if ($('meta[name=patience]').attr('content') === "true"){
    $.patience();
  }
});
