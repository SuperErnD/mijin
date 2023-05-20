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
            return () => {
                what.apply(into, arguments)
                return into.apply(into, arguments)
            }
        } else if(customReturn) {
            return () => {
                const a = what.apply(into, arguments)
                into.apply(into, arguments)
                return a
            }
        }
    } else if(type === "AFTER") {
        if(!customReturn) {
            return () => {
                const a = into.apply(into, arguments)
                what.apply(into, arguments)
                return a
            }
        } else if(customReturn) {
            return () => {
                const a = what.apply(into, arguments)
                into.apply(into, arguments)
                return a
            }
        }
    }

}