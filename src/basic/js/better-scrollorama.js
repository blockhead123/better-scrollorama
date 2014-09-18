(function( $ ) {

    $.fn.betterScrollorama = function( options ) {

        // DEFAULT OPTIONS
        var settings = $.extend({
            // These are the defaults.
            // These are the events
            onSceneActive: false,
            onSceneLeave: false,
            sceneName: '.scene',
            itemName: '.item',
            parentBox: "document"                               // default is currently window
        }, options );


        // MODEL

        var bs = this;
        var wWidth = 0;
        var wHeight = 0;

        // Validate ParentBox height and width
        // and make sure scroll is activated all the time.
        bs.validateParentBox = function(){
            if(settings.parentBox == "document"){
                $('body').css({ overflowY : 'scroll'});
                wWidth = $("body").innerWidth();                // setting parent width for scene width
                wHeight = $(document).height();                 // setting parent height for scene height
            }
            else{
                $(settings.parentBox).css("overflow", "scroll");
                wWidth = $(settings.parentBox).width();         // setting parent width for scene width
                wHeight = $(settings.parentBox).height();       // setting parent height for scene height
            }
        };

        // Initialize Main Scene Timeline
        var timeline = new TimelineLite();

        // Validate Scene Items
        bs.validateItems = function(scene){
            scene.find(settings.itemName).each(function(){
                if($(this).hasClass("item-vertical-center")){
                    bs.alignment.vertical(this);
                }
            });
        };

        // Validate Scenes
        bs.validateScenes = function(){
            $(this).find(settings.sceneName).each(function(){
                $(this).css("width", wWidth + "px");
                $(this).css("height", wHeight + "px");
                bs.validateItems($(this));
            });
        };

        // CONTROLS
        // Alignment Handlings
        bs.alignment = {
            vertical: function(item){
                itemPercent = 50 - parseInt(  ($(item).height() / 2) / wHeight * 100 );
                $(item).css({top:itemPercent+'%'});
            },
            horizontal: function(item){
                // no execution yet
            }
        };

        // TRIGGERS
        bs.triggerEvent = function(event){

        };

        // Main Execution
        bs.validateParentBox();
        bs.validateScenes();

        return bs;

    };
}( jQuery ));
