document.addEventListener("DOMContentLoaded", function () {
    const movingCircle = document.getElementById("movingCircle");

    movingCircle.addEventListener("mouseover", function () {
        if (movingCircle.classList.contains("moveLeft")) {
            movingCircle.classList.remove("moveLeft");
            movingCircle.classList.add("moveRight");
        } else if (movingCircle.classList.contains("moveRight")) {
            movingCircle.classList.remove("moveRight");
            movingCircle.classList.add("moveCenter");
        } else if (movingCircle.classList.contains("moveCenter")) {
            movingCircle.classList.remove("moveCenter");
            movingCircle.classList.add("moveLeft");
        } else {
            movingCircle.classList.add("moveLeft");
        }
    });
});
