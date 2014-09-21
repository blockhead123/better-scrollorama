Better Scrollorama
==================

    A new improve scrollorama with a different twist. 
    Plugin is still in its alpha stage and i do suggest not using it yet.

Example
--------

    <script type='text/javascript'>//<![CDATA[
        $(function(){
        $(".scroll").betterScrollorama();
        });//]]>
    </script>
    <div class="scroll">
        <div class="scene">
            <div class="item item-center item-vertical-center" bs-fadein="true">
                The quick brown fox!
            </div>
        </div>
        <div bs-pin="1000" class="scene" style="background-color: gray">
            I'm pinning
        </div>
    </div>


Structure
---------

    The basic structure of BS is that controls are being handled on the div it self. 
    If you want to make an item fade-in then you add "bs-fadein" or if you want to 
    pin a specific scene then you go with "bs-pin".
    
    Main Div
        |
        |-----> Scene
                    |
                    |----> Item
                    
    An Example for fading items:
    
        <div class="scene">
            <div class="item" bs-fadein="true"></div>
        </div>
        
    An Example for adding pins:
    
        <div class="scene" bs-pin="1000">
        </div>
        
Scene Parameters
----------------
    
| Name       | Parameter | Description                                       |
| ---------- | --------- | ------------------------------------------------- |
| bs-pin     | decimal   | used to pin the scene (incomplete implementation) |
| bs-fadein  | boolean   | used to fade-in the scene (not implemented)       |
| bs-fadeout | boolean   | used to fade-out the scene (not implemented)      |
| bs-tween   | tween     | tween type  (not implemented)                     |

Item Parameters
---------------

    bs-fadein: used to fade-in the item  (not implemented)
        parameters: {boolean}
    + bs-fadeout: used to fade-out the item  (not implemented)
        + parameters: {boolean}
    + bs-tween: tween type  (not implemented)
        + parameters: {tween name}
    + bs-anim-to: animation from current state to the new state
        + parameters: {array}
            + anim: type of property the animation is going to do
                + property: name of property
                + value: value of the property
            + dur: {decimal} lenght by scroll

Options
-------

* 'sceneName' : name of scene element

    Parameters :
    + object : element you can use either id class or anything else
    Default : '.scene'
    
* 'itemName' : name of item element

    Parameters :
    + object : element you can use either id class or anything else
    Default : '.item'
    
* 'parentBox' : is used to detect the parent of the plugin. used for validating the height of each of the scenes.

    Parameters :
    + object : element you can use either id class or anything else
    Default : '.scene'
    

Events
-------

    <script>
    $(".scroll").betterScrollorama({
        'onSceneActive' : function (v) { /*make something*/ }
    });
    </script>

* 'onScroll' : executed on scroll

    Parameters :
    + object : current box object
    + returns : tweenmax object


* 'onSceneActive' : executed when there is a scene active.

    Parameters :
    + object : current box object

* 'onSceneLeave' : executed on animation complete.  (not implemented yet)

    Parameters :
    + object : current box object
