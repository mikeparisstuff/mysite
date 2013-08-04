$(function() {
    /*
        Every second update the hour, minute, and second hand rotations.
     */
   setInterval( function() {
        var now = new Date();
        var seconds = now.getSeconds();
        var minutes = now.getMinutes();
        var hours = now.getHours();
        if (hours > 12)
            hours -= 12;

        var srotate = "rotate(" + seconds*6 + "deg)";
        var mrotate = "rotate(" + minutes*6 + "deg)";
        var hrotate = "rotate("+ hours*30 + "deg)";
        $("#sec").css({"transform": srotate});
        $("#min").css({"transform": mrotate});
        $("#hour").css({"transform": hrotate});
        $("#time").text(formatTime(hours)+":"+formatTime(minutes)+":"+formatTime(seconds));
   }, 1000);

   function formatTime(t) {
        if(t<10)
            return "0"+t;
        else return t;
   }
});