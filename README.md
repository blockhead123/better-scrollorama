Better Scrollorama
==================
A new improve scrollorama with a different twist.

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


Options
-------

* 'sceneName' : name of scene

    Parameters :
    + object : element
    Default : '.scene'

Events
-------

    <script>
    $(".box").betterScrollorama({
        'onSceneActive' : function (v) { /*make something*/ }
    });
    </script>

* 'onSceneActive' : executed when there is a scene active.

    Parameters :
    + object : current box object

* 'onSceneLeave' : executed on animation complete

    Parameters :
    + object : current box object
