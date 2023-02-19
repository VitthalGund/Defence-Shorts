// let inp = document.getElementById('element');
// function handed() {
//     let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if (inp.value.match(validRegex)) {
//         inp.scrollTop();
//         alert("Please,Enter the Vaild Email Address!", 'danger');
//     } else {
//         inp.scrollTop();
//         alert("Thanks to Subscribe!");
//         window.location.href("https://www.youtube.com/@defenceshort1/");
//     }
// }
// inp.addEventListener('click', (e) => {
//     e.preventDefault();
//     handed();
// });

// TO create Elements Tag
function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

const validateEmail = (email) => {
    let r = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return r.test(email);
};

// To show custom alert
const alert = (message, type = 'success', id = 'default', time = 4000) => {
    let pos = document.getElementById(id);
    pos.innerHTML = `<div class="alert mb-0 alert-${type} alert-dismissible" style="position:fixed;top:0;width=100%;"role="alert">
            <div>${message}</div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
    setTimeout(() => {
        pos.innerHTML = " ";
    }, time);
}

const loadJavaScriptFile = async (url) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = url;
        script.onload = () => {
            resolve("Script Loaded Successfully!");
        }
        document.body.append(script);
    });
}

const submitBtn = document.getElementById('btn');
const clickValidEmail = () => {
    console.log("inFunction");
    let val = document.querySelector('#element').value;
    console.log(val)
    if (validateEmail(val)) {
        console.log("inConditionIF");
        alert("Thanks for Subscribing our Services!");
    } else {
        console.log("inConditionELSE");
        alert("Please,Enter the Vaild Email Address!", 'danger');
    }
}

const handleContactSubmit = () => {
    const num = document.getElementById('number').value > 9 ? document.getElementById('number').value : "No";
    console.log(num);
    const email = clickValidEmail(document.getElementById('email').value) ? document.getElementById('email').value : "No";
    console.log(email);
    if (email != "No" && num != "No") {
        alert("Thanks to Contact Us!\nWe Will soon contact You using given details!");
    } else {
        alert("Please, Enter the Valid Details!",'danger');
    }

}

const connect = document.getElementById('contacts')
connect.addEventListener('click', (e) => {
    handleContactSubmit();
})
submitBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    clickValidEmail();
})
const copyRight = document.getElementById('copy');
copyRight.innerHTML = `Copyright &copy; ${new Date().getFullYear()} Defence Shorts`

// setInterval((console.clear()),500);