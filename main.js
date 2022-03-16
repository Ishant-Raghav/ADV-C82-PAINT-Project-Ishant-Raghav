var mouseEvent="empty";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="Red";
width_of_line=2;

Canvas.addEventListner("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").Value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}
Canvas.addEventListner("mousemove",my_mousemove);
function my_mousemove(e){
    var current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    var current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        console.log("Current Position Of X And Y Coordinates = ")
        console.log("X = "+current_position_of_mouse_x+",Y = "+current_position_of_mouse_y);
        ctx.beginPath()
        ctx.stockStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius,0 ,2 * Math.PI);
        ctx.strock();
    }
}
canvas.addEventListner("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListner("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
function Clear_area() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}