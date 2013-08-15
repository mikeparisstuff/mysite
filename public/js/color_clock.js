$(function() {

    function time() {

        var now = new Date();
        var hour = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();

        var color = timeColor(hour, min, sec);
        if (hour > 12) {
            hour = hour - 12;
        }

        hour = formatTime(hour);
        min = formatTime(min);
        sec = formatTime(sec);
        $('#clock').text(hour+":"+min+":"+sec);
        $('.colorclock').css('background-color', '#'+color);
        $('#color').text('#'+color);
        t = setTimeout(function(){time();},500);
    }

    function formatTime(time) {
        if( time < 10) {
            time = '0' + time;
        }
        return time;
    }

    function formatColor(color) {
        if(color.length < 2) {
            color = '0'+color;
        }
        return color;
    }

    function timeColor(hour, min, sec) {
        red = Math.round(255*(hour/23)).toString(16);
        green = Math.round(255*(min/59)).toString(16);
        blue = Math.round(255*(sec/59)).toString(16);
        red = formatColor(red);
        green = formatColor(green);
        blue = formatColor(blue);

        return (red+green+blue).toUpperCase();
    }
    time();
});
