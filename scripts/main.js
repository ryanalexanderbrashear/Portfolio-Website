function addColorClass(ele) {
    var id = ele.id
    document.getElementById(id).classList.add("colored");
}

function removeColorClass(ele) {
    var id = ele.id
    document.getElementById(id).classList.remove("colored");
}

function validateForm() {
    var form = document.forms["contact-form"];
    var name = form["name"].value;
    var email = form["email"].value
    var phone = form["phone"].value

    if (name == "") {
        $("#modal-name").popover('show');
        return false;
    } else {
        $("#modal-name").popover('hide');
    }

    if (validateEmail(email) == false) {
        $("#modal-email").popover('show');
        return false;
    } else {
        $("#modal-email").popover('hide');
    }

    if (validatePhoneNumber(phone) == false) {
        $("#modal-phone").popover('show');
        return false;
    } else {
        $("#modal-phone").popover('hide');
    }
}

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true
    }
    return false
}

function validatePhoneNumber(phoneNumber) {
    if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phoneNumber)) {
        return true
    }
    return false
}