console.log("the index.js file is loaded");

$("#logo").on("click", function(){
    console.log("you clicked on the logo");
    document.getElementById("logo").style.filter="invert(100%)";
});