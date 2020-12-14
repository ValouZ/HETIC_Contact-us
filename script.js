const label = document.getElementsByClassName("label-content");
let i = 0;
let interval = setInterval(addAnimationLabel, 100);

function addAnimationLabel() {
    if (i == label.length - 1)
        clearInterval(interval);
    label[i].classList.add("label-animation");
    i++;
}