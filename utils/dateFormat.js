var dayjs = require('dayjs')

/* const time = (timestamp) => {
    console.log(timestamp)
    const postedAt = dayjs(timestamp).format('D-M-YY h:mm')
    console.log(postedAt)
}

time(Date.now()) */
module.exports = (timestamp) => {
    const postedAt = dayjs(timestamp).format('D-M-YY h:mm')
    return postedAt
}