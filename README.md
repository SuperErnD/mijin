# Mijin 
<sub><sup>From Mixin and Inject</sup></sub>

## An just simple function-library for injecting into methods

Based on Node but compatible with Deno and browser!



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

### Deno (NOT COMPATIBLE BECAUSE arguments IS MISSING`)
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