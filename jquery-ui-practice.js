//Can move the div anywhere on the page
$("#draggable-xy" ).draggable();
//Can move the div only horizontally
$("#draggable-x" ).draggable({axis:"x"});
//Can move the div only vertically
$("#draggable-y" ).draggable({axis:"y"});
//Can move the div only within the parent div
$("#draggable-contained").draggable({containment: "parent"});
//Can be resized to any size
$( "#resizable" ).resizable();
//Can be resized but in increments
$( "#resizable-grid" ).resizable({grid:50});
//Can be resized but when the divs with is 300 it will alert the page
$( "#resizable-alert" ).resizable({
        resize: function( event, ui ) {
            if ($("#resizable-alert").width() > 300) {
                alert("Too big!")
            }
        }
    });
//Can be resized but will also resize 'resizable-2'
$( "#resizable-1" ).resizable(
    {alsoResize:"#resizable-2"}
);
//Can be resized by itseld and by 'resizable-1
$( "#resizable-2" ).resizable();
//Can be dropped into another div
$( "#droppable" ).draggable();
$( "#droppable-container" ).droppable({
    drop: function(event,ui)
    {
        $("#droppable-container").css("background-color","yellow")
        $("#drop-here").html("Dropped")
    }
});
//creates a list with drop downs
$("#accordion").accordion();
//creates a list and its <li>s can be sorted in any order
$("#sortable-list").sortable()