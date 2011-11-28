try{
  (function( $ ){

    $.patience = function( options ) {  

      var settings = $.extend( {
        div_loading : 'loading-patience',
        message : 'Loading...',
        height: 200,
        width: 200

      }, options);

      if (typeof options === "undefined" )
        $('body').append('<div id="'+settings.div_loading+'" style="width:'+settings.width+'px;height:'+settings.height+'px; display:none;">'+settings.message+'</div>')
      else
        if (typeof options.div_loading === "undefined")
        $('body').append('<div id="'+settings.div_loading+'" style="width:'+settings.width+'px;height:'+settings.height+'px; display:none;">'+settings.message+'</div>')

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
