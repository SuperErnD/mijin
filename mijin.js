/**
 * @param {Function} into
 * @param {Function} what
 * @param {string} type
 * @param {boolean} customReturn
 */
export default (into, what, type = "BEFORE", customReturn = false) => {
    if (!into || !what || !typeof what === 'function' || !typeof into === 'function') {
        throw new Error("Invalid inject function usage!: invalid what or into")
    }

    if(type === "BEFORE") {
        if(!customReturn) {
            return (...args) => {
                what.apply(into, args)
                return into.apply(into, args)
            }
        } else if(customReturn) {
            return (...args) => {
                const a = what.apply(into, args)
                into.apply(into, args)
                return a
            }
        }
    } else if(type === "AFTER") {
        if(!customReturn) {
            return (...args) => {
                const a = into.apply(into, args)
                what.apply(into, args)
                return a
            }
        } else if(customReturn) {
            return (...args) => {
                const a = what.apply(into, args)
                into.apply(into, args)
                return a
            }
        }
    }

}