# Mijin 
<sub><sup>From Mixin and Inject</sup></sub>

## An just simple function-library for injecting into methods

### <font color="yellow">WARNING!!!</font>

Based on Node but compatible with Deno and browser!

PLEASE USE FOR ADVANCED MIXINS REMIXIN, MIJIN WILL REWRITTEN LIKE REMIXIN

https://github.com/soundcloud/remixin/tree/master

You can use it, but it recomended to use with functions, not classes, and also if you inject into class method you cant get `this` object

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

```

## Build
```sh
npm run build
# Now check ./dist!
```

## License

[WTFPL](http://www.wtfpl.net/)