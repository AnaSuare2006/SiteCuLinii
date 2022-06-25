import Two from 'https://cdn.skypack.dev/two.js@latest';
import helper from "./code.js"
console.log("FUNCTIONEAZA")

var two = new Two({
    height: "100vh",
    width: "80%"
}).appendTo(document.getElementById("header"));

let arr1 = [null, null, null, null, null];
let arr2 = [null, null, null, null, null];
let input1, input2, uwu1, uwu2, element1, position1, x1, y1, element2, position2, x2, y2, line, copy1, copy2;

//document.querySelector(".port").addEventListener('input', updateValue);
document.getElementById("con").addEventListener('click', traceLine);
//document.querySelector(".breadboard").addEventListener('input', updateValue);
document.getElementById("del").addEventListener('click', deleteLine);
document.getElementById("res").addEventListener('click', reset);

function traceLine(e) {

    input1 = document.querySelector(".port").value;
    input2 = document.querySelector(".breadboard").value;
    if (arr1[input1] == null && arr2[input2] == null) {

        uwu1 = "btn" + input1;
        uwu2 = "pin" + input2;

        console.log(input1);
        console.log(input2);

        element1 = document.getElementById(`${uwu1}`);
        position1 = element1.getBoundingClientRect();
        x1 = position1.right;
        y1 = (position1.top + position1.bottom) / 2;

        element2 = document.getElementById(`${uwu2}`);
        position2 = element2.getBoundingClientRect();
        x2 = position2.left;
        y2 = (position2.top + position2.bottom) / 2;

        console.log(x1);
        console.log(y1);
        console.log(x2);
        console.log(y2);

        line = two.makeLine(x1, y1, x2, y2);
        line.linewidth = 10;
        line.fill = "#881111";
        two.update();
        arr1[input1] = 1;
        arr2[input2] = 1;
        let header = document.querySelector(".erorrs");
        header.innerText = "No errors";
        copy1=input1;
        copy2=input2;
    }
    else {
        let header = document.querySelector(".erorrs");
        header.innerText = "Port is already in use!";
    }
}

function deleteLine(e) {

    console.log('STERS');
    two.remove(line);
    two.update();
    arr1[copy1] = null;
    arr2[copy2] = null;
    let header = document.querySelector(".erorrs");
    header.innerText = "Line deleted";
};

function reset(e) {

    console.log('Reset');
    two.clear();
    two.update();
    arr1 = [null, null, null, null, null];
    arr2 = [null, null, null, null, null];
    let header = document.querySelector(".erorrs");
    header.innerText = "Connections Reset";
};