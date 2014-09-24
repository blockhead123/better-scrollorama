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
<table>
  <tr>
    <th>Name</th>
    <th>Parameter</th>
    <th colspan=5>Description</th>
  </tr>
  <tr>
    <td>bs-fadein</td>
    <td>boolean</td>
    <td colspan=5>used to fade-in the item  (not implemented) </td>
  </tr>
  <tr>
    <td>bs-fadeout</td>
    <td>boolean</td>
    <td colspan=5>used to fade-out the item  (not implemented) </td>
  </tr>
  <tr>
    <td>bs-tween</td>
    <td>tween</td>
    <td colspan=5>tween type  (not implemented) </td>
  </tr>
  <tr>
    <td>bs-anim-to</td>
    <td>array</td>
    <td colspan=5>animation from current state to the new state (not implemented) </td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>anim</td>
    <td colspan=2>type of property it's going to do</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>property</td>
    <td>name of element property (style, class etc...)</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>value</td>
    <td>value of the property</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>dur</td>
    <td>decimal</td>
    <td>lenght by scroll</td>
  </tr>
</table>

Options
-------

<table>
    <tr>
        <th>
            Name
        </th>
        <th colspan=2>
            Description
        </th>
    </tr>
    <tr>
        <td>
            sceneName
        </td>
        <td colspan=2>
            name of scene element
        </td>
    </tr>
    <tr>
        <td>
        </td>
        <th colspan=2>
            Parameters
        </th>
    </tr>
    <tr>
        <td>
        </td>
        <td>
            object
        </td>
        <td>
            element you can use either id class or anything else
        </td>
    </tr>
    <tr>
        <td>
        </td>
        <td>
            default
        </td>
        <td>
            '.scene'
        </td>
    </tr>
    <tr>
        <td>
        </td>
    </tr>
    <tr>
        <th>
            Name
        </th>
        <th colspan=2>
            Description
        </th>
    </tr>
    <tr>
        <td>
            itemName
        </td>
        <td colspan=2>
            name of item element
        </td>
    </tr>
    <tr>
        <td>
        </td>
        <th colspan=2>
            Parameters
        </th>
    </tr>
    <tr>
        <td>
        </td>
        <td>
            object
        </td>
        <td>
            element you can use either id class or anything else
        </td>
    </tr>
    <tr>
        <td>
        </td>
        <td>
            default
        </td>
        <td>
            '.item'
        </td>
    </tr>
    <tr>
        <td>
        </td>
    </tr>
    <tr>
        <th>
            Name
        </th>
        <th colspan=2>
            Description
        </th>
    </tr>
    <tr>
        <td>
            parentBox
        </td>
        <td colspan=2>
            is used to detect the parent of the plugin. used for validating the height of each of the scenes.
        </td>
    </tr>
    <tr>
        <td>
        </td>
        <th colspan=2>
            Parameters
        </th>
    </tr>
    <tr>
        <td>
        </td>
        <td>
            object
        </td>
        <td>
            element you can use either id class or anything else
        </td>
    </tr>
    <tr>
        <td>
        </td>
        <td>
            default
        </td>
        <td>
            root object 
        </td>
    </tr>
</table>

Events
-------

    <script>
    $(".scroll").betterScrollorama({
        'onSceneActive' : function (v) { /*make something*/ }
    });
    </script>
    
<table>
    <tr>
        <th>
            Name
        </th>
        <th colspan=2>
            Description
        </th>
    </tr>
    <tr>
        <td>
            onScroll
        </td>
        <td colspan=2>
            executed on scroll
        </td>
    </tr>
    <tr>
        <td>
        </td>
        <th colspan=2>
            Parameters
        </th>
    </tr>
    <tr>
        <td>
        </td>
        <td>
            object
        </td>
        <td>
            current box object
        </td>
    </tr>
    <tr>
        <td>
        </td>
        <td>
            returns
        </td>
        <td>
            tweenmax object
        </td>
    </tr>
    <tr>
        <td>
        </td>
    </tr>
    <tr>
        <th>
            Name
        </th>
        <th colspan=2>
            Description
        </th>
    </tr>
    <tr>
        <td>
            onSceneActive
        </td>
        <td colspan=2>
            executed when there is a scene active.
        </td>
    </tr>
    <tr>
        <td>
        </td>
        <th colspan=2>
            Parameters
        </th>
    </tr>
    <tr>
        <td>
        </td>
        <td>
            object
        </td>
        <td>
            current box object
        </td>
    </tr>
    <tr>
        <td>
        </td>
    </tr>
    <tr>
        <th>
            Name
        </th>
        <th colspan=2>
            Description
        </th>
    </tr>
    <tr>
        <td>
            onSceneLeave
        </td>
        <td colspan=2>
            executed on animation complete.  (not implemented yet)
        </td>
    </tr>
    <tr>
        <td>
        </td>
        <th colspan=2>
            Parameters
        </th>
    </tr>
    <tr>
        <td>
        </td>
        <td>
            object
        </td>
        <td>
            current box object
        </td>
    </tr>
</table>
