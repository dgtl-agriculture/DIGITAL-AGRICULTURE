// Source - https://stackoverflow.com/a/74935628
    // Posted by strawberrymilk, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-02-09, License - CC BY-SA 4.0

    var counter = 0;

    var bgColor = [
        "#00000", // color array for background-color
        "#00000",
    ];

    var imgArray = [
        "pics/genda.png", //add URLs for your images here
        "pics/genda2.png"
    ];


    container.onclick = function (e) { //add images on click-event

        if (counter == bgColor.length) counter = 0; //loop background colors
        if (counter == imgArray.length) counter = 0; //loop images

        document.body.style.background = bgColor[counter]; //change background 

        var pic = document.createElement('img'); //create new element 
        pic.src = imgArray[counter]; //add URL for images
        pic.classList.add("image"); //add class name for images
        pic.style.position = 'absolute';
        pic.style.top = e.clientY + 'px'; //place images where you click
        pic.style.left = e.clientX + 'px';
        this.appendChild(pic);
        counter++;
    }


    reset = document.querySelector(".reset") //remove images on click-event
    reset.addEventListener('click', function () {
        document.querySelectorAll('.image').forEach(function (x) {
            x.remove();
        })
    })