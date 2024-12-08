console.log('я костя!!!')


console.log(' ')


const ex = (num) => {
    return num * -1 
}
console.log(ex('8'))

const txt4 = (word) => {
    if (word[word.length - 1] === 'ь') {
        return word[word.length - 2]
    } else {
        return word[word.length - 1]
    }
}

console.log(txt4('mhmm'))
console.log(txt4('mhmhь'))


const txt5 = (num) => {
    const pp = String(num)
    const tt = pp[0]
    const yy = Number(tt)
        return yy
}

console.log(txt5(97))
console.log( '')

console.log( ' 2зд')


const