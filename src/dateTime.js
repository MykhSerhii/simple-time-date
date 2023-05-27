import {isInteger, isString} from "./helpers"

const DEFAULT_FORMAT = 'Y.M.D H:m:s'

export function setFormat(dateTime, timeFormat = DEFAULT_FORMAT) {
    let newDateTime = ''
    for (let i = 0; i < timeFormat.length; i++) {
        let letter = timeFormat[i]
        try {
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
        } catch (err) {
            console.error(`Set time format error! Error: ${err.message}`)
            return ''
        }
        if (typeof letter === 'number' && letter < 10) {
            letter = '0' + letter
        }
        newDateTime += letter
    }
    return newDateTime
}

export function setZone(dateTime, timeZone = '') {
    if (!isString(timeZone)) {
        console.error(`Invalid time zone: ${timeZone}! Necessary string.`)
        return ''
    }
    const zone = Number(timeZone.slice(1))
    try {
        if (isInteger(zone)) {
            if (timeZone[0] === '+') {
                dateTime.setUTCHours(dateTime.getUTCHours() + zone)
            } else if (timeZone[0] === '-') {
                dateTime.setUTCHours(dateTime.getUTCHours() - zone)
            }
        }
        return dateTime
    } catch (err) {
        console.error(`Set time zone error! Error: ${err.message}`)
        return ''
    }
}

export class DateTime {
    #format
    #zone

    constructor(format, zone) {
        this.#format = format ?? DEFAULT_FORMAT
        this.#zone = zone ?? ''
    }

    now(format) {
        const time = new Date()
        return setFormat(setZone(time, this.#zone), format ?? this.#format)
    }

    create(timeString, format) {
        let time
        try {
            time = new Date(timeString)
        } catch {
            console.error(`Invalid time string: ${timeString}`)
            return ''
        }
        return setFormat(setZone(time, this.#zone),format ?? this.#format)
    }
}
