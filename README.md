# simple-time-date
easy and simple to get date and time\
<br/>

## Instailation
```bash
npm install simple-time-date
```
<br/>

## Example

### setZone(time, zone)
##### Options:
- time - `Date` object
- zone - `string`, UTC time zone
#### Code
1. ESM
    ```js
    import {setZone} from 'simple-time-date'
   

    const time = new Date()
    console.log(time)                      // 2023-05-28T18:27:37.802Z (+0)
   
    const newTime = setZone(time, '+3')    // or +3, +03, -2, -02
    console.log(newTime)                   // 2023-05-28T21:27:37.802Z (+3)
    ```
2. CommonJS
    ```js
    const {setZone} = require('simple-time-date')
   

    const time = new Date()
    console.log(time)                      // 2023-05-28T18:27:37.802Z (+0)
   
    const newTime = setZone(time, '+3')    // or +3, +03, -2, -02
    console.log(newTime)                   // 2023-05-28T21:27:37.802Z (+3)
    ```
---

### setFormat(time, format)

#### Options:
- time - `Date` object
- zone - `string`, time format
#### Time format:
- Y - years
- M - months
- D - days
- H - hours
- m - minutes
- s - seconds
- S - milliseconds
#### Code
1. ESM
    ```js
    import {setFormat} from 'simple-time-date'


    const time = new Date()
    console.log(time)                                   // 2023-05-28T18:40:55.932Z
   
    const newTime = setFormat(time, 'Y-M-D H:m:s.S')
    console.log(newTime)                                // 2023-05-28 18:40:55.932
   
    const newTime2 = setFormat(time, 'D.M.Y H:m:s')
    console.log(newTime2)                               // 28.05.2023 18:40:55
    ```
2. CommonJS
    ```js
    const {setFormat} = require('simple-time-date')


    const time = new Date()
    console.log(time)                                   // 2023-05-28T18:40:55.932Z
   
    const newTime = setFormat(time, 'Y-M-D H:m:s.S')
    console.log(newTime)                                // 2023-05-28 18:40:55.932
   
    const newTime2 = setFormat(time, 'D.M.Y H:m:s')
    console.log(newTime2)                               // 28.05.2023 18:40:55
    ```
---

### DateTime()
Class DateTime(). Constructor accepts an object with optional parameters.
#### Options
- format - `string`, time format. Default: `Y.M.D H:m:s`
- zone - `string`, UTC time zone. Default: `0`

Object has methods:
- `now(format)` - returns the time elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.\
Used saved format and zone.\
Options: 
  - format - `string`, time format (not required)
  

- `create(timeString, format)` - returns the time.\
Used saved format and zone.\
Options:
  - timeString - `string`, the standard string representation of a date time string is a simplification of the ISO 8601 calendar date extended format
  - format - `string`, time format (not required)
#### Code
1. ESM
    ```js
    import {DateTime} from 'simple-time-date'
    
    
    const time = new Date()
    console.log(time)                                       // 2023-05-28T19:41:46.792Z
    
    const time1 = new Date('2023-05-28 19:15')
    console.log(time1)                                      // 2023-05-28T16:15:00.000Z
    
    const time2 = new DateTime()
    console.log(time2.now())                                // 2023.05.28 19:41:46
    console.log(time2.create('2023-05-28 19:15'))           // 2023.05.28 16:15:00
    
    const time3 = new DateTime({format: 'Y-M-D H:m:s.S'})
    console.log(time3.now())                                // 2023-05-28 19:41:46.799
    console.log(time3.create('2023-05-28 19:15'))           // 2023-05-28 16:15:00.000
    
    const time4 = new DateTime({zone: '-5', format: 'D.M.Y H:m:s'})
    console.log(time4.now())                                // 28.05.2023 14:41:46
    console.log(time4.create('2023-05-28 19:15'))           // 28.05.2023 11:15:00
    ```
2. CommonJS
    ```js
    const {DateTime} = require('simple-time-date')
    
    
    const time = new Date()
    console.log(time)                                       // 2023-05-28T19:41:46.792Z
    
    const time1 = new Date('2023-05-28 19:15')
    console.log(time1)                                      // 2023-05-28T16:15:00.000Z
    
    const time2 = new DateTime()
    console.log(time2.now())                                // 2023.05.28 19:41:46
    console.log(time2.create('2023-05-28 19:15'))           // 2023.05.28 16:15:00
    
    const time3 = new DateTime({format: 'Y-M-D H:m:s.S'})
    console.log(time3.now())                                // 2023-05-28 19:41:46.799
    console.log(time3.create('2023-05-28 19:15'))           // 2023-05-28 16:15:00.000
    
    const time4 = new DateTime({zone: '-5', format: 'D.M.Y H:m:s'})
    console.log(time4.now())                                // 28.05.2023 14:41:46
    console.log(time4.create('2023-05-28 19:15'))           // 28.05.2023 11:15:00
    ```
