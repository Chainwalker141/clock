// Analogclock
var hourhand = document.getElementById('hourhand');
var minutehand = document.getElementById('minutehand');
var secondshand = document.getElementById('secondshand');

function initClock() {
    var date = new Date
    var hour = date.getHours() % 12; // 0 - 23
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var hourDeg = (hour * 30) + (0.5 * minute);
    var minuteDeg = (minute * 6) + (0.1 * second);
    var secondDeg = second * 6;

    hourhand.style.transform = 'rotate(' + hourDeg + 'deg)';
    minutehand.style.transform = 'rotate(' + minuteDeg + 'deg)';
    secondshand.style.transform = 'rotate(' + secondDeg + 'deg)';

    setTimeout(initClock, 1000)
};

initClock();

// Digiclock
function digiClock(){
    const fullDate = new Date();
    var digihours = fullDate.getHours();
    var digiminutes = fullDate.getMinutes();
    var digiseconds = fullDate.getSeconds();

    if (digihours < 10){
        digihours = "0" + digihours;
    }
    if (digiminutes < 10){
        digiminutes = "0" + digiminutes;
    }
    if (digiseconds < 10){
        digiseconds = "0" + digiseconds;
    }

    document.getElementById('digihour').innerHTML = digihours;
    document.getElementById('digiminute').innerHTML = ":" + "&nbsp;" + digiminutes;
    document.getElementById('digiseconds').innerHTML = ":" + "&nbsp;" + digiseconds;

    setTimeout(digiClock, 1000)
}

digiClock();

// Wallpaper Engine Scheisse
window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
        if (properties.backgroundcolor) {
            // Convert the custom color to 0 - 255 range for CSS usage
            var backgroundcolor = properties.backgroundcolor.value.split(' ');
            backgroundcolor = backgroundcolor.map(function(c) {
                return Math.ceil(c * 255);
            });
            var backgroundcolorAsCSS = 'rgb(' + backgroundcolor + ')';
            // Do something useful with the value here or assign it to a global variable
            var r = document.querySelector(':root');
            r.style.setProperty('--background-color', backgroundcolorAsCSS);
        }
    },
};