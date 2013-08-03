$(function() {
    /*
        Every second update the hour, minute, and second hand rotations.
     */
   setInterval( function() {
        var now = new Date();
        var seconds = now.getSeconds();
        var minutes = now.getMinutes();
        var hours = now.getHours();

        var srotate = "rotate(" + seconds*6 + "deg)";
        var mrotate = "rotate(" + minutes*6 + "deg)";
        var hrotate = "rotate("+ hours*30 + "deg)";
        $("#sec").css({"transform": srotate});
        $("#min").css({"transform": mrotate});
        $("#hour").css({"transform": hrotate});
        $("#time").text(hours+":"+minutes+":"+seconds);
   }, 1000);
});