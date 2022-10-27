const questions = document.getElementsByClassName("question-container");
const answers = document.getElementsByClassName("answer");
const arrows = document.getElementsByClassName("arrow");

function active (num) {
    questions[num].style.fontWeight = 700;
    answers[num].style.display = "block";
    arrows[num].style.transform = "rotate(180deg)";
}

function unactive (num) {
    questions[num].style.fontWeight = 400;
    answers[num].style.display = "none";
    arrows[num].style.transform = "rotate(0)";
}

function onClick0 () {
    if (answers[0].style.display != "block") {
        active(0);
        unactive(1);
        unactive(2);
        unactive(3);
        unactive(4);
    }
    else {
        unactive(0);
    }
}

function onClick1 () {
    if (answers[1].style.display != "block") {
        active(1);
        unactive(0);
        unactive(2);
        unactive(3);
        unactive(4);
    }
    else {
        unactive(1);
    }
}

function onClick2 () {
    if (answers[2].style.display != "block") {
        active(2);
        unactive(0);
        unactive(1);
        unactive(3);
        unactive(4);
    }
    else {
        unactive(2);
    }
}

function onClick3 () {
    if (answers[3].style.display != "block") {
        active(3);
        unactive(0);
        unactive(1);
        unactive(2);
        unactive(4);
    }
    else {
        unactive(3);
    }
}

function onClick4 () {
    if (answers[4].style.display != "block") {
        active(4);
        unactive(0);
        unactive(1);
        unactive(2);
        unactive(3);
    }
    else {
        unactive(4);
    }
}

questions[0].addEventListener("click", onClick0);
questions[1].addEventListener("click", onClick1);
questions[2].addEventListener("click", onClick2);
questions[3].addEventListener("click", onClick3);
questions[4].addEventListener("click", onClick4);