function letter_counter() {
    para = document.querySelector('input').value
    paragrapgh_in_lowercase =para.toLowerCase()
    // array_of_letters(paragrapgh_in_lowercase);
    count(paragrapgh_in_lowercase)
}

function array_of_letters(sentence) {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    heading = 'Letter Index Appearance ';
    console.log(heading);

    let array_string = sentence.split('').map(result_string => {
        return result_string
    });

    let count = 0

    for(var i = 0; i < array_string.length; i++) {
        document.querySelector('h5').textContent += array_string[i] + ', '
        let prev = array_string[i]
        for(var j = 0; j <= letters.length; j++) {
            if(array_string[i] == letters[j]) {
                count += 1
                let az = document.getElementById('appear').textContent += letters[j]
                document.getElementById('letter').innerHTML += i +' -> ' + array_string[i] + '->' + count + '<br/>'
            }
        }        
    }

    document.querySelector('input').value = ''
    document.querySelector('h4').textContent += '' + letters
}

function count(parameter) {
    let appearance = 0
    for(var i = 0; i < parameter.length; i++) {
        appearance = 1
        for(let j = 0; j < parameter.length; i++) {
            console.log(parameter[i] + ' : ' + parameter[j])
            if(parameter[i] == parameter[j]) {
                console.log(parameter[i] + ' : ' + parameter[j])
                console.log("same" )
                appearance +=  1
            }
        }
    }
}