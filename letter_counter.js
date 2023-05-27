function letter_counter() {
    para = document.querySelector('input').value
    paragrapgh_in_lowercase =para.toLowerCase()
    array_of_letters(paragrapgh_in_lowercase);
}

function array_of_letters(sentence) {
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    heading = 'Letter Index Appearance ';
    console.log(heading);

    let count = 0;
    let tr_letter = document.getElementById('data').textContent
    let tr_appear = document.getElementById('appear').textContent
    let array_string = sentence.split(' ')
    
    for (var l = 0; l < array_string.length; l++) {
        for (var t = 0; t < array_string[l].length; t++) {
            if (array_string[l][t] == array_string[l][t]) {
                tr_letter = array_string[l][t]
                tr_appear = letters.indexOf(array_string[l][t])
            }
        }
    }
}