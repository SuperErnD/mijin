import mijin from "./mijin.js"
import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";

Deno.test({
    name: "basic example",
    fn() {
        const a = () => {
            console.log('Hello world 1')
        }
        
        const b = () => {
            console.log('Hello world 2')
        }
        
        const c = mijin(a, b, "AFTER")
        
        c()
    }
})

Deno.test({
    name: "inject into method a and set other value as return",
    fn() {
        const a = () => {
            return 1
        }
        
        const b = () => {
            return 2
        }
        
        const c = mijin(a, b, "AFTER", true)
        
        assertEquals(c(), 2)
    }
})