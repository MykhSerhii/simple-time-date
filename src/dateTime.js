import {isInteger} from "./helpers"


export function setFormat(dateTime, timeFormat = 'Y.M.D H:m:s') {
    let newDateTime = ''
    for (let i = 0; i < timeFormat.length; i++) {
        let letter = timeFormat[i]
        switch (letter) {
            case 'D':
                letter = dateTime.getUTCDate()
                break
            case 'M':
                letter = dateTime.getUTCMonth() + 1
                break
            case 'Y':
                letter = dateTime.getUTCFullYear()
                break
            case 'H':
                letter = dateTime.getUTCHours()
                break
            case 'm':
                letter = dateTime.getUTCMinutes()
                break
            case 's':
                letter = dateTime.getUTCSeconds()
                break
            case 'S':
                letter = dateTime.getUTCMilliseconds()
                if (letter < 100) {
                    letter = '0' + letter
                }
                if (letter < 10) {
                    letter = '0' + letter
                }
                break
        }
        if (typeof letter === 'number' && letter < 10) {
            letter = '0' + letter
        }
        newDateTime += letter
    }
    return newDateTime
}

export function setZone(dateTime, timeZone = '') {
    const zone = Number(timeZone.slice(1))
    if (isInteger(zone)) {
        if (timeZone[0] === '+') {
            dateTime.setUTCHours(dateTime.getUTCHours() + zone)
        } else if (timeZone[0] === '-') {
            dateTime.setUTCHours(dateTime.getUTCHours() - zone)
        }
    }
    return dateTime
}

export class DateTime {
    now() {
        const time = new Date()
        return setFormat(setZone(time))
    }
}

