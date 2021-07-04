let navLinks = document.querySelectorAll(".container header .top-bar nav ul li a")


for(let i=0; i<navLinks.length; i++) {
    navLinks[i].onclick = () => {
        for(let x=0; x<navLinks.length; x++) {
            navLinks[x].classList.remove("active");
            navLinks[i].classList.add("active");
    }
}
}

const countdown = () => {
    let spans = document.querySelectorAll(".countdown span")

    let count = [20, 20, 30, 30];

    setInterval(()=> {

        if(count[0] === 0) {
            return false
        }

        count[3] -= 1;
        if(count[3] === 0) {
            count[2] -= 1
            count[3] = 60
        }
        if(count[2] === 0) {
            count[1] -= 1
            count[2] = 60
        }
        if(count[1] === 0) {
            count[0] -= 1
            count[1] = 24
        }

        for(let i=0; i<spans.length; i++) {
            spans[i].textContent = count[i];

        }


    }, 1000)
}
countdown()