function myMenuFunction() {

    var menußth = document.getElementById("myNavMenu");
    
    if (menußth.className === "nav-menu") {
    
        menußth.className += " responsive";
    
    } else {
    
        menußth.className = "nav-menu";
    
    }
    
    }
    /*-----Dark mode---*/

    document.addEventListener("DOMContentLoaded", function() {
        const toggleSwitch = document.getElementById('toggle-switch');

        toggleSwitch.addEventListener('click', function() {
            document.body.classList.toggle('dark');
        });
    });

    
    

    var typingEffect = new Typed(".typedText" ,{
        Strings: ["Designer", "Coder", "Developer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,
    })


    /*---Scroll animation---*/

const sr = scrollReveal({ 
origin: "top",

distance: "80px",

duration: 2000,

reset: true,
});

sr.reveal(".featured-name", {delay: 100}); 
sr.reveal(".text-info", {delay: 200 }); 
sr.reveal(".text-btn", {delay: 200 }); 
sr.reveal(".socical_icons", {delay: 200 }); 
sr.reveal(".featured-image", {delay: 200});


sr.reveal(".project-box", {interval: 200});

sr.reveal(".top-header", {});


const srLeft = ScrollReveal({

    origin: "left",
    
    distance: "80px",
    
    duration: 2000,
    
    reset: true,
    
    })
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        fetch('/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, subject, message })
        }).then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message.');
            }
        });
    });
    
    

    /*......active link---*/

const sections= document.querySelectorAll(".section[id]");
function scrollActive() {
const scrollY = window.scrollY;
sections.forEach((current) => 
{

    const sectionHeight = current.offsetHeight,

    sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute("id");

if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
    document
        .querySelector(".nav.menu a[herf'=" + sectionId + "]")
        .classList.add("active-link");
}else {
    document
        .querySelector(".nav-menu a[href'=" + sectionId + "]")
        .classList.remove("active-link");
}

});
window.addEventListener("scroll", scrollActive);

}
function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "jesikasahu9@gmail.com",
        Password : "3C7586AC38AA6BB5795E322E61496A86D53B",
        To : 'jesikasahu9@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Subject: " + document.getElementById("subject").value
            + "<br> Message: " + document.getElementById("message").value
        }).then(
        message => alert("Message Sent Succesfully")
        ); 
}
    