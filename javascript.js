let section = document.querySelectorAll('section');
let navli = document.querySelectorAll('nav .container ul li');

window.addEventListener("scroll", () => {
    let currunt = " ";

    section.forEach(sectionn => {
        const sectionTop = sectionn.offsetTop;
        const sectionHeight = sectionn.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            currunt = sectionn.getAttribute('id');
        }

    })

    navli.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(currunt)) {
            li.classList.add('active')
        }
    })
})