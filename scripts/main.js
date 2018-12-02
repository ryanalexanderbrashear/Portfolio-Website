function addColorClass(ele) {
    var id = ele.id
    document.getElementById(id).classList.add("colored");
}

function removeColorClass(ele) {
    var id = ele.id
    document.getElementById(id).classList.remove("colored");
}