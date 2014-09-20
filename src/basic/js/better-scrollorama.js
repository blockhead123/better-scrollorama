(function( $ ) {

    $.fn.betterScrollorama = function( options ) {

        /**
         * DEFAULT OPTIONS
         * @type {*}
         */
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

        // Private options
        var bs = this;
        var wWidth = 0;
        var wHeight = 0;
        var firstSceneHeight = 0;
        var dummy = new Array();

        /**
         * Set Spacers
         *
         * @param scene
         * @returns {number}
         */
        bs.validatePins = function(scene){
            var sceneHeight = wHeight;
            if(parseInt(scene.attr("bs-pin"))>0){
                scene.before('<div class="bs-spacer" style="height: '+parseInt(scene.attr("bs-pin"))+'px;"></div>')
                sceneHeight = parseInt(scene.attr("bs-pin"));
            }
            return sceneHeight;
        };

        /**
         * Validate ParentBox height and width
         * and make sure scroll is activated all the time.
         */
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

        /**
         * Add Tweens To Main Timeline
         * @param {scene} object
         * @param {tweenName} string
         * @param {dur} number
         * @param {arg} array
         * @param {index} number
         */
        bs.addSceneTween = function(scene, tweenName, dur, arg, index){

            if(parseInt(scene.attr("bs-pin"))>0){
                var cDur = parseInt(scene.attr("bs-pin"));
            }
            else{
                var cDur = dur;
            }

            var dummyDetails = {
                scene: ".scene" + index
            };

            dummy.push(dummyDetails);

            tl.add( TweenLite.to($(tweenName), cDur, arg));
        };

        /**
         * Add Dummy Tweens
         *
         * @param {scene} jQuery
         * @param {dur} number
         * @param {index} number
         */
        bs.addSTDummy = function(scene, dur, index){
            bs.addSceneTween(scene,".dummy"+index,dur,{left: 100, onStart: function(){

                var dummyClass = this.target.selector;
                var index = dummyClass.replace(/\D/g, '');

                bs.triggerEvent("activeScene", {index: index});

            }, onReverseComplete: function(){

                var dummyClass = this.target.selector;
                var index = dummyClass.replace(/\D/g, '');

                bs.triggerEvent("activeScene", {index: index});

            }}, index)
        };

        /**
         * Validate Scene Items
         *
         * @param {scene} jquery
         */
        bs.validateItems = function(scene){
            scene.find(settings.itemName).each(function(){
                if($(this).hasClass("item-vertical-center")){
                    bs.alignment.vertical(this);
                }
            });
        };

        /**
         * Validate Scenes
         */
        bs.validateScenes = function(){
            $(this).find(settings.sceneName).each(function(index){
                var sceneHeight = 0;
                $(this).css("width", wWidth + "px");
                $(this).css("height", wHeight + "px");
                $(this).addClass("scene"+index);
                bs.validateItems($(this));
                sceneHeight = bs.validatePins($(this));
                if(index == 0){
                    firstSceneHeight = sceneHeight;
                }
                bs.addSTDummy($(this), wHeight, index);
            });
        };

        /**
         * Validates if it has a Pin
         *
         * @param {scene} jQuery Element
         */
        bs.hasPin = function(scene){
            if(parseInt($(scene).attr("bs-pin"))>0){
            }
        }

        /**
         * Get Active Scene
         *
         * @param index
         * @returns {null}
         */
        bs.getActiveScene = function(index){
            return null;
        };

        // CONTROLS
        /**
         * Alignment Handlings
         * @type {{vertical: vertical, horizontal: horizontal}}
         */
        bs.alignment = {
            vertical: function(item){
                itemPercent = 50 - parseInt(  ($(item).height() / 2) / wHeight * 100 );
                $(item).css({top:itemPercent+'%'});
            },
            horizontal: function(item){
                // no execution yet
            }
        };

        // Execute Scroll
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
                tl.seek(cTop + firstSceneHeight, false);
            });

        };

        // Pin a scene
        bs.pin = function(scene){
        };

        // TRIGGERS
        bs.triggerEvent = function(event, args){
            if(event == "activeScene"){
                var scene = dummy[args.index].scene;
            }
        };

        // Main Execution
        bs.validateParentBox();
        bs.validateScenes();
        bs.scrollExec(settings.parentBox);
        return bs;

    };
}( jQuery ));
