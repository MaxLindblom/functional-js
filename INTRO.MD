## Functional Programming in Javascript

### Central Concepts
1. #### First-class functions

(Functions as parameters)

2. #### Pure functions

(Same output for same input, no side-effects!)

Some pure functions:
```
const add = (a, b) => a + b;

const repeat = (s) => s.concat(s);

const purePush = (arr, el) => [...arr, el];
```

Some impure functions:
```
const incrementor = 2;
const increment = a => a += incrementor;

console.log('anything');

['a', 'b', 'c'].push('d');
```

3. #### Recursion

(No loops, call yourself instead)

4. #### Immutability

(Don't reassign variables, don't change values)

5. #### High-order functions

(Functions that can take functions as input and possibly produce functions as output)

### Pros and Cons
- Declarative Programming 
- Modular and Testable
- (Maybe) Confusing/Unclear
- Less Popular
- Focus on Efficient and Concise Code
- Possible in Javascript Out of the Box
- Arrays as Defacto Default Data Type
- No Impure Functions

### Javascript Libraries
- [Lodash](https://lodash.com/) - Most people know this one I think
- [Immutable](https://immutable-js.com/) - Immutable data structures for Node
- [Ramda](https://ramdajs.com/) - Specifically tailored for enabling a functional paradigm

### Built-in Array Methods
- Map
- Reduce
- Filter

(And also)

- Find
- Slice
- Join
- ...

### Further Reading
- Currying
- Composition
- Monads
- ...