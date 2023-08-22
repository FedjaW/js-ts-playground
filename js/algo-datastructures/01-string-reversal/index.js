// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// my solution
function reverse(str) {
    const reversedString = []
    for (let index = str.length-1; index >= 0; index--) {
        reversedString.push(str[index])
    }

    return reversedString
}

// other solution
function reverse2(str) {
    return str.split('').reverse().join('')
}

module.exports = reverse;