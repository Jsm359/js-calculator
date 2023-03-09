let list = [];
let allNumber = "";

function addToList(a) {
    if (a === '+' || a === '-' || a === '*' || a === '/') {
        list.push(' ' + a + ' ');
    } else {
        list.push(a);
    }
    document.getElementById("result").innerHTML = list.join('');
}

function check(expression) {
    const regex = /^[\d\s()+\-*/.,]+$/ ;
    if (!regex.test(expression)) {
        throw new Error('error');
    }
    return eval(expression);
}

function joinList() {
    allNumber = list.join('');
}

function calculate(listNumber) {
    joinList(listNumber);
    document.getElementById("result").innerHTML = check(allNumber);
    document.getElementById("calculate").innerHTML = allNumber;
    list = [];
}

function clear() {
    list.pop();
    document.getElementById("result").innerHTML = list.join('');
}

function reset() {
    list = [];
    document.getElementById("result").innerHTML = '0';
    document.getElementById("calculate").innerHTML = "";
}