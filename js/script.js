const BUTTON = document.getElementById('case-changer');

BUTTON.addEventListener('click', changeCase);

function changeCase () {
    let casingMethod = parseInt(document.getElementById('casing').value);
    let input = document.getElementById('input').value;
    document.getElementById('output').innerHTML = "";

    switch (casingMethod) {
        case 1:
            document.getElementById('output').value = input.toUpperCase();
            break;
        case 2:
            document.getElementById('output').value = input.toLowerCase();
            break;
        case 3:
            // capitalize words
            break;
        case 4:
            // capitalize sentences
            break;
        case 5:
            spongeBob(input);
            break;
        case 6:
            revBob(input);
            break;
        case 7:
            random(input);
            break;
        default:
            alert("Please select a casing method.");
    }
}

function spongeBob(input) {
    let excerpt = input.length;
    let letter;
    for (let i = 0; i < excerpt; i++) {
        if (i % 2 === 0) {
            letter = input[i].toLowerCase(); // even is lower
        }
        else {
            letter = input[i].toUpperCase(); // odd is upper
        }
        document.getElementById('output').append(letter);
    }
}

function revBob(input) {
    let excerpt = input.length;
    let letter;
    for (let i = 0; i < excerpt; i++) {
        if (i % 2 === 0) {
            letter = input[i].toUpperCase(); // even is upper
        }
        else {
            letter = input[i].toLowerCase(); // odd is lower
        }
        document.getElementById('output').append(letter);
    }
}

function random(input) {
    let excerpt = input.length;
    let letter;
    let coinFlip;
    for (let i = 0; i < excerpt; i++) {
        coinFlip = randomInt(0, 1);
        if (coinFlip % 2 === 0) {
            letter = input[i].toLowerCase();
        }
        else {
            letter = input[i].toUpperCase();
        }
        document.getElementById('output').append(letter);
    }
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}