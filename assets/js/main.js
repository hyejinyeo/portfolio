/* ==================== NAV ==================== */
// Toggle menu show
const hamburger = document.getElementById('nav-toggle'),
      navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
})

// Toggle menu hidden after clicking a nav link
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navUl.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// Scroll sections active link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



/* ==================== PORTFOLIO ==================== */
// Swiper 
let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



/* ==================== CONTACT ==================== */
// const form = document.querySelector('.contact__form'),
//       submitButton = document.getElementById("contact__submit");


// function sendMessage(e) {
//     e.preventDefault();

//     const name = document.querySelector('input[name="name"]'),
//           email = document.querySelector('input[name="email"]'),
//           subject = document.querySelector('input[name="subject"]'),
//           msg = document.querySelector('textarea[name="message"]')

//     Email.send({
//         // mailtrap.io
//         Host : "smtp.mailtrap.io",
//         Username : "f3a70d3f5513e3",
//         Password : "ba9271bcc805fc",
//         To : 'random@mail.com',
//         From : email.value,
//         Subject : 'Contact Portfolio : ' + subject.value,
//         Body : 'Nom : ' + name.value + '<br>' + 'Message : ' + msg.value
//     }).then(
//         message => alert(message)
//     );


// }

// submitButton.addEventListener('click', sendMessage)





// Elastic
// Host : "smtp.gmail.com",
// Username : "hyejinyeo.dev@gmail.com",
// Password : "D07116BF3EA057F664E4C888EEB945229E81",
// SecureToken : "6141ef35-0e98-4e85-a37a-afdb8924605f"


/* ==================== OTHERS ==================== */
/* ---------- Show scroll up button ---------- */
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

