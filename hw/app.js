//Завдання 1
let xxx = [23, 45, 5, 6, 99]
let ccc = ['cool', 'bool', 'fool']
let vvv = [23, false, 'book']
console.log(xxx)
console.log(ccc)
console.log(vvv)

//Задання 2
let www = [2, 3, 4, 6]
console.log(www[2])

//Завдання 3
for (let i = 0; i < 10; i++)
    document.write(`<div>page</div>`)

for (let i = 0; i < 10; i++)
    document.write(`<div> ${[i]} page</div>`)
let i = 0
while (i < 20) {
    i++;
    document.write(`<h1>page</h1>`)
}


let i = 0
while (i < 20) {
    i++;
    document.write(`<h1> ${[i]} page</h1>`)
}

let qqq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (i = 0; i < qqq.length; i++) {
    console.log(qqq[i])
 }


let oo = ['desire', 'glory', 'pray', 'hope', 'passion', 'honey', 'lullaby', 'miracle', 'sunshine', 'paradise']
for (i = 0; i < oo.length; i++) {
    console.log(oo[i])
}

let rrr = [2, 4, 'glory', 5, true, 7, false, 9, 33]
for (i = 0; i < rrr.length; i++) {
    if (typeof rrr[i] === 'boolean') {
        console.log(rrr[i]);
    }
}

let ppp = [2, 4, 'glory', 5, true, 7, false, 9, 33]
for (i = 0; i < ppp.length; i++) {
    if (typeof ppp[i] === 'number') {
        console.log(ppp[i]);
    }
}

let zz = [2, 4, 'glory', 5, true, 7, false, 9, 33]
for (i = 0; i < zz.length; i++) {
    if (typeof zz[i] === 'string') {
        console.log(zz[i]);
    }
}

let op = [2, 4, 'glory', 5, true, 7, false, 9, 33]
for (i = 0; i < op.length; i++) {
    console.log(op[i])
}

let op = [];
op[0] = 2;
op[1] = 4;
op[2] = 'glory';
op[3] = 5;
op[4] = true;
op[5] = 11;
op[6] = 'passion';
op[7] = 'paradise';
op[8] = 33;
op[9] = 'sunshine';

for (let i = 0; i < op.length; i++) {
    console.log(op[i]);
}

for (let i = 0; i < 10; i+1) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}

for (let i = 0; i < 100; i++) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}

for (let i = 0; i < 100; i+=2) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}

for (let i = 0; i < 100; i++) {
    if(i % 2 === 0){
        console.log('поточний крок циклу : ' + i + ' ');
        document.write('поточний крок циклу : ' + i + ' ');
    }
}

for (let i = 0; i < 100; i++) {
    if(i % 2 === 1){
        console.log('поточний крок циклу : ' + i + ' ');
        document.write('поточний крок циклу : ' + i + ' ');
    }
}