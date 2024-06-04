const { sendFile } = require('send')
const { join } = require('path')

module.exports = (req, res) => {
    sendFile(res, join(__dirname, '..', 'views', 'index.html'))
}