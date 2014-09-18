(function( $ ) {

    $.fn.betterScrollorama = function( options ) {

        // DEFAULT OPTIONS
        var settings = $.extend({
            // These are the defaults.
            // These are the events
            onSceneActive: false,
            onSceneLeave: false,
            onScroll: false,
            sceneName: '.scene',
            itemName: '.item',
            parentBox: "document"                                   // default is currently window
        }, options );


        // MODEL

        var bs = this;
        var wWidth = 0;
        var wHeight = 0;

        // Set Spacers
        bs.validatePins = function(scene){
            if(parseInt(scene.attr("bs-pin"))>0){
                scene.before('<div class="bs-spacer" style="height: '+parseInt(scene.attr("bs-pin"))+'px;"></div>')
            }
        };

        // Validate ParentBox height and width
        // and make sure scroll is activated all the time.
        bs.validateParentBox = function(){
            if(settings.parentBox == "document"){
                $('body').css({ overflowY : 'scroll'});
                wWidth = $("body").innerWidth();                    // setting parent width for scene width
                wHeight = $(document).height();                     // setting parent height for scene height
            }
            else{
                $(settings.parentBox).css("overflow", "scroll");
                wWidth = $(settings.parentBox).width();             // setting parent width for scene width
                wHeight = $(settings.parentBox).height();           // setting parent height for scene height
            }
        };

        // Initialize Main Scene Timeline
        var tl = new TimelineLite();

        // Add Tweens To Main Timeline
        bs.addSceneTween = function(scene, tweenName, dur, arg){
            if(parseInt(scene.attr("bs-pin"))>0){
                var cDur = parseInt(scene.attr("bs-pin"));
            }
            else{
                var cDur = dur;
            }
            console.log(cDur);
            tl.add( TweenLite.to($(tweenName), cDur, arg));
        };

        // Add Dummy Tweens
        bs.addSTDummy = function(scene, dur){
            bs.addSceneTween(scene,".dummy",dur,{left: 100, onStart: function(){
                console.log("yep");
            }, onReverseComplete: function(){
                console.log("yep");
            }})
        };

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
                bs.validatePins($(this));
                bs.addSTDummy($(this), wHeight);
            });
        };

        // Get Active Scene
        bs.getActiveScene = function(){
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

        // Execture Scroll
        bs.scrollExec = function(pBox){
            if(pBox == "document"){
                var parentBoxP = document;
            }
            else{
                var parentBoxP = pBox;
            }

            // Execute Scroll Event
            $(parentBoxP).scroll(function(){
                if(settings.onScroll!=false){
                    settings.onScroll(this);
                }
                var cTop = $(document).scrollTop();
                tl.seek(cTop, false);
            });

        };

        // Pin a scene
        bs.pin = function(scene){

        };

        // TRIGGERS
        bs.triggerEvent = function(event){

        };

        // Main Execution
        bs.validateParentBox();
        bs.validateScenes();
        bs.scrollExec(settings.parentBox);
        console.log(tl);
        return bs;

    };
}( jQuery ));
