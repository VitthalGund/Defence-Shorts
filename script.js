let inp = document.getElementById('element');
function handed() {
    if (inp.value == undefined || inp.value == null) {
        alert("Please Enter the vaild Email Id!", 'danger');
    } else {
        alert("Thanks to Subscribe!");
    }
    window.location.href("https://www.youtube.com/@defenceshort1/");
}
inp.addEventListener('click', (e) => {
    e.preventDefault();
    handed(); 
});

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
    document.body.insertBefore(fragment, document.body.childNodes[2]);
    setTimeout(() => {
        document.body.removeChild(document.body.childNodes[2]);
    }, time);
}