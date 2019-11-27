let elems = document.getElementsByClassName("myBar");
    for (elem of elems) {
        let width = parseInt(elem.textContent);
        elem.style.width = width + '%';    
    }

let spans = document.querySelectorAll(".myBar span");
    for (span of spans) {
        span.style.opacity = 1;   
    }
    
let img = document.querySelector('img');
    function change_photo() {
        let count = img.src.charAt(img.src.length - 5);
        count++;
        img.src = `img/${count}.JPG`;
        if (count > 6) {
            img.src = `img/1.JPG`;
        } 
    }
    