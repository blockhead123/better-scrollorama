(function( $ ) {

    $.fn.betterScrollorama = function( options ) {

        // DEFAULT OPTIONS
        var settings = $.extend({
            // These are the defaults.
            // These are the events
            onSceneActive: false,
            onSceneLeave: false,
            sceneName: '.scene',
            parentBox: "document"                               // default is currently window
        }, options );

        var bs = this;

        if(settings.parentBox == "document"){
            $('body').css({ overflowY : 'scroll'});
            var wWidth = $("body").innerWidth();                // setting parent width for scene width
            var wHeight = $(document).height();                 // setting parent height for scene height
        }
        else{
            $(settings.parentBox).css("overflow", "scroll");
            var wWidth = $(settings.parentBox).width();         // setting parent width for scene width
            var wHeight = $(settings.parentBox).height();       // setting parent height for scene height
        }

        // TRIGGER EVENTS
        bs.triggerEvent = function(event){

        };

        // INITIALIZE MAIN TIMELINE
        var timeline = new TimelineLite();

        // VALIDATE SCENES
        bs.validateScenes = function(){
            $(this).find(settings.sceneName).each(function(){
                $(this).css("width", wWidth + "px");
                $(this).css("height", wHeight + "px");
                $(this).css("display", "block");
                $(this).css("position", "relative");
            });
        };

        // MAIN EXECUTIONS
        bs.validateScenes();

        return bs;

    };
}( jQuery ));
