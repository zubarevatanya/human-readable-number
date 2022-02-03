module.exports = function toReadable(number) {
    if (number === 0) {
        return tens(0);
    }
    return thousands(number);
}

function tens(number) {
    switch (number) {
        case 0: return "zero"
        case 1: return "one"
        case 2: return "two"
        case 3: return "three"
        case 4: return "four"
        case 5: return "five"
        case 6: return "six"
        case 7: return "seven"
        case 8: return "eight"
        case 9: return "nine"
        case 10: return "ten"
        case 11: return "eleven"
        case 12: return "twelve"
        case 13: return "thirteen"
        case 14: return "fourteen"
        case 15: return "fifteen"
        case 16: return "sixteen"
        case 17: return "seventeen"
        case 18: return "eighteen"
        case 19: return "nineteen"
    }
}

function tens10(number) {
    switch (number) {
        case 2: return "twenty"
        case 3: return "thirty"
        case 4: return "forty"
        case 5: return "fifty"
        case 6: return "sixty"
        case 7: return "seventy"
        case 8: return "eighty"
        case 9: return "ninety"
    }
}

function hundreds(number) {
    const mains = Math.trunc(number / 10)
    if (mains < 2) {
        return tens(number)
    } else {
        const beforeTen = number % 10
        if (beforeTen === 0) {
            return tens10(mains)
        } else {
            return `${tens10(mains)} ${tens(beforeTen)}`
        }
    }

}

function hundredToString(num) {
    return `${tens(num)} hundred`
}

function thousands(number) {
    const mains = Math.trunc(number / 100)
    if (mains > 0) {
        const beforeHundred = number % 100
        if (beforeHundred === 0) {
            return hundredToString(mains)
        } else {
            return `${hundredToString(mains)} ${hundreds(beforeHundred)}`
        }
    } else {
        return hundreds(number)
    }
}