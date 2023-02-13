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

// To show custom alert
const alert = (message, type = 'success', id = 'default', time = 3000) => {
    let fragment = create(`<div class="alert mb-0 alert-${type} alert-dismissible" role="alert">
            <div>${message}</div>,
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`);
    document.body.insertBefore(fragment, document.getElementById(id));
    setTimeout(() => {
        document.body.removeChild(document.getElementById(id));
    }, time);
}


const clickValidEmail = () => {
    const submitBtn = document.getElementById('btn');
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (submitBtn.value.match(validRegex)) {

    } else {

    }
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(submitBtn.value)) {
        alert("Thanks for Subscribing our Services!");
    } else {
        alert("Please,Enter the Vaild Email Address!", 'danger');
    }
}


// submitBtn.addEventListener('click', (e) => {
//     // e.preventDefault();
//     clickValidEmail();
// })
const copyRight = document.getElementById('copy');
copyRight.innerHTML = `Copyright &copy; ${new Date().getFullYear()} Defence Shorts`

setInterval((console.clear()),500);