export function isInteger(value) {
    return Number.isInteger(Number(value))
}

export function isString(value) {
    return typeof value === 'string' && value.trim !== ''
}
