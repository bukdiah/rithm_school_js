// Part 1
// wait for the DOM to load
document.addEventListener("DOMContentLoaded", function(){
    var heading = document.querySelector("#change_heading");
    heading.innerText = "Hello World!";

    var section = document.querySelector("section");
    
    section.addEventListener("mouseover", function(event) {
        var selected = document.querySelector(".selected");
        selected.innerText = event.target.className;
    });

    var div = document.createElement("div");
    div.classList.add("purple");

    section.appendChild(div);

    var raceButton = document.querySelector("button");
    var car1 = document.querySelector(".car1");
    var car2 = document.querySelector(".car2");
    
    function race() {
        var body = document.body;
        var width = body.clientWidth;
        var car1_margin = 0;
        var car2_margin = 0;
        
        car1.style.marginLeft = 0;
        car2.style.marginLeft = 0;
        
        car1_margin+=Math.floor(Math.random()*(60-1+1)+1);
        car2_margin+=Math.floor(Math.random()*(60-1+1)+1);

        car1.timer = setInterval(function(){
            car1_margin+=Math.floor(Math.random()*(60-1+1)+1);
            
            if (car1_margin-50 <= width) {
                car1.style.marginLeft = `${car1_margin}px`;
            } else {
                raceButton.disabled = false;
                clearInterval(car1.timer);
                clearInterval(car2.timer);
                alert("CAR 1 WINS!");

            }
        }, 1000);

        car2.timer = setInterval(function(){
            car2_margin+=Math.floor(Math.random()*(60-1+1)+1);
            if (car2_margin-50 <= width) {
                car2.style.marginLeft = `${car2_margin}px`;
            } else {
                raceButton.disabled = false;
                clearInterval(car1.timer);
                clearInterval(car2.timer);
                alert("CAR 2 WINS!");
            }
        }, 1000);
    }
    raceButton.addEventListener("click", function(event) {
        race();
        raceButton.disabled = true;
    });
});