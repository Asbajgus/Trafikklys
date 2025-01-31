
        function redLightOn() {
            document.getElementById("rød").classList.add("red");
            document.getElementById("gul").classList.remove("yellow");
            document.getElementById("grønn").classList.remove("green");
        }

        function yellowLightOn() {
            document.getElementById("rød").classList.remove("red");
            document.getElementById("gul").classList.add("yellow");
            document.getElementById("grønn").classList.remove("green");
        }

        function greenLightOn() {
            document.getElementById("rød").classList.remove("red");
            document.getElementById("gul").classList.remove("yellow");
            document.getElementById("grønn").classList.add("green");
        }
        yellowAndRedLightOn = function() {
            document.getElementById("rød").classList.add("red");
            document.getElementById("gul").classList.add("yellow");
            document.getElementById("grønn").classList.remove("green");
        }

        function intervall() {
          
            setInterval(function() {
                redLightOn();  
                setTimeout(yellowAndRedLightOn, 1000);  
                setTimeout(greenLightOn, 3000); 
            }, 6000);
        }
console.debug("script.js loaded");
window.onload = intervall;