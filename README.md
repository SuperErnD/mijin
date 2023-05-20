# Mijin 
<sub><sup>From Mixin and Inject</sup></sub>

## An just simple function-library for injecting into methods

Based on Node but compatible with Deno and browser!

## Examples

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