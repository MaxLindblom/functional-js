/*
To be used in a Quokka instance
*/

const letters = ['v', 'a', 'p', 'o', 'r', 'x', 'w', 'a', 'v', 'e']

const capitalise = l => l.toUpperCase()

const capitalised = letters.map(capitalise)
capitalised

const isNotX = l => l !== 'X'

const filtered = capitalised.filter(isNotX)
filtered

const vaporWaved = filtered.reduce((acc, f) => {
  if (!acc) {
    return f
  }
  return acc += ` ${f}`
}, '')
vaporWaved

const vaporWave = arr => arr
.map(l => l.toUpperCase())
.filter(c => c !== 'X')
.reduce((acc, f) => !acc ? f : acc +` ${f}`)
vaporWave

console.log(vaporWave(letters))
