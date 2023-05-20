// deno-lint-ignore-file
import mijin from "./mijin";

test('basic example', () => {
    const a = () => {
        console.log('Hello world 1')
    }
    
    const b = () => {
        console.log('Hello world 2')
    }
    
    const c = mijin(a, b, "AFTER")
    
    c()
})

test('inject into method a and set other value as return', () => {
    const a = () => {
        return 1
    }
    
    const b = () => {
        return 2
    }
    
    const c = mijin(a, b, "AFTER", true)
    
    expect(c()).toBe(2)
})
