let myButton = document.getElementById('activet');
let result = document.getElementById('result')
let scors = document.getElementById('points')
let attent = document.getElementById('attent')
let table = ['1', '2', '3', '4', 'SSR'];

function roulet() {
    result.innerHTML = ' ' + table[Math.random() * table.length>>0]

    if(result === table[0]) {
        scors.innerHTML = ' ' + "1";
        console.log('reussi 1');
    }

    else if(result === table[1]) {
        scors.innerHTML = ' ' +'3';
        console.log('reussi 2');
    }

    else if(result === table[2]) {
        scors.innerHTML = ' ' + '20';
        console.log('reussi 3');
    }

    else if(result === table[3]) {
        scors.innerHTML = ' ' + '50';
        console.log('reussi 4');
    }

    else if(result === table[4]) {
        scors.innerHTML = ' ' + '100';
        console.log('reussi SSR');
    }

    else {
        console.log('test');
    }

}

myButton.addEventListener("click",roulet);