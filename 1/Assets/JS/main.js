const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const firstError = document.getElementById("first-error");
const lastError = document.getElementById("last-error");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkconditions(firstName, firstError, "first name")
    checkconditions(lastName, lastError, "last name")

    if(firstName.checkValidity() && lastName.checkValidity()) {
        modal.classList.add("show")
    }
})

function checkconditions(elem, error, value) {
    if(!elem.checkValidity()) {
        elem.classList.add("invalid")
        error.style.display = "block"
        if (elem.validity.valueMissing) {
            error.innerText = "Please enter your " + value
        }else {
            error.innerText = "The value doesn't contain enough characters"
        }
    }else {
        error.style.display = "none"
        elem.classList.remove("invalid")
    }
}

// modal handling
closeButton.addEventListener("click", (e) => {
    modal.classList.remove("show")
})

document.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.classList.remove("show")
    }
})