let numberFirst = +prompt('birnchi soni kiriting')

let numberSecond = +prompt('ikkinchi soni kiriting')

const all = function (first, second) {

    if (isNaN(first) || isNaN(second)) {
        alert(' son kiriting')
        return
    }

    if (first === second) {
        alert('ikkalasi bir biriga teng')
        return first;
    } 
    
    else{
    alert("eng kotta son " + Math.max(first, second))
    }
}

all(first, second)