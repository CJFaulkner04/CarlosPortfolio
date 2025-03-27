let nav = document.querySelector("nav");
let ul = document.querySelector("ul");
let acc = document.querySelector(".acc");
let navPro = document.querySelector(".navPro");
let heroText = document.querySelector(".heroText b");
let cooking = true;

const names = ["Carlos.", "a Developer.", "a Designer."];
let i = 0;
let charIndex = 0;
let isDeleting = false;

    function updateTextAndAnimate() {
    if (!heroText) return;

    const currentText = names[i];
    
    if (isDeleting) {
        heroText.innerText = currentText.slice(0, charIndex--);
    } else {
        heroText.innerText = currentText.slice(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 4000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        i = (i + 1) % names.length;
    }

    const speed = isDeleting ? 80 : 150;
    setTimeout(updateTextAndAnimate, speed);
    }

    updateTextAndAnimate();


window.onscroll = () => {
    if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.style.backgroundColor = "rgba(10,10,10,0.75)";
        nav.style.width = "300px";
        nav.style.border = "none";
        nav.style.borderRadius= "20px";
        nav.style.padding = "2px";
        nav.style.boxShadow = " 0 0px 5px 1px rgba(0,0,0,0.3)"
        nav.style.marginTop = "10px";
        ul.style.width = "200px";
        //acc.innerHTML = `<i class="fa-solid fa-phone fa-md"></i>`;
        acc.style.width ="30px";
        
        navPro.style.width = "30px";
        navPro.innerHTML = `<div class="imgWrapper">
                    <img src="images/me.png">
                </div>`;
    } else {
        nav.style.backgroundColor = "black";
        nav.style.width = "100vw";
        nav.style.border = "none";
        // nav.style.borderBottom = "1px solid rgb(223, 223, 223)";
        nav.style.borderRadius = "0";
        nav.style.padding = "15px 0";
        nav.style.boxShadow = "none";
        nav.style.marginTop = "0";
        ul.style.width = "250px";
       // acc.innerHTML = `<i class="fa-solid fa-phone fa-md"></i> <i class="fa-brands fa-linkedin-in fa-lg"></i> <i class="fa-brands fa-github-alt fa-lg"></i>`;
        if(screen.width > 500){
            acc.style.width ="100px";
        } else {
            acc.style.width = "30px";
        }
        navPro.style.width = "100px";
        navPro.innerHTML = `<div class="imgWrapper">
                    <img src="images/me.png">
                </div>
                <h1>Bubbly</h1>`;

    }
}