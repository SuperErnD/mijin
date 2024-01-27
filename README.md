# Mijin 
<sub><sup>From Mixin and Inject</sup></sub>

## An just simple function-library for injecting into methods

Writed to node.js but should just work on browser/deno

### <font color="yellow">warning!!!</font>

use remixin instead, it better (yet :D). mijin will be soon (maybe?) rewritten like remixin

Remixin: https://github.com/soundcloud/remixin/tree/master

You can use it, but it recommended to use with functions, not classes, and also if you inject into class method you cant get `this` object

### <font color="yellow">!!!</font>



## Examples

### Node
```js
import mijin from './mijin.js'
const a = () => {
    console.log('Hello world 1')
}

const b = () => {
    console.log('Hello world 2')
}

const c = mijin(a, b, "AFTER")

c()
// Hello world 1
// Hello world 2
```

### Deno
```js
import mijin from 'https://deno.land/x/mijin/mijin.js'
const a = () => {
    console.log('Hello world 1')
}

const b = () => {
    console.log('Hello world 2')
}

const c = mijin(a, b, "AFTER")

c()
// Hello world 1
// Hello world 2
```

### Browser
```js

const a = () => {
    console.log('Hello world 1')
}

const b = () => {
    console.log('Hello world 2')
}

const c = mijin(a, b, "AFTER")

c()
// Hello world 1
// Hello world 2
```

## Build
```sh
npm run build
# Now check ./dist!
```

## License

[WTFPL](http://www.wtfpl.net/)
