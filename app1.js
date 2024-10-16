require('babel-register')

// const os = require('os')
const fs = require('fs')
const http = require('http')


// console.log(os.arch())
// console.log(os.homedir())

// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)

//         fs.writeFile('test.txt', 'writeFile réussi', 'utf-8', (err) => {

//             fs.readFile('test.txt', 'utf-8', (err, data) => {
//                 console.log(data)
//             })
//         })
//     }
// })

http.createServer((req, res) => {

    if (req.url == '/') {
        res.writeHead(200, {'Content-type': 'text/html'})
        res.write("<h1>Accueil</h1>\n")
        res.end()
    } else if (req.url === '/test') {

        fs.readFile('test.txt', 'utf-8', (err, data) => {
            if (err) {
                send404(res)
            } else {
                res.writeHead(200, {'Content-type': 'text/html'})
                res.write(data)
                res.end()
            }
        })
        
    } else {
        send404(res)
    }

}).listen(8080)

function send404(res) {
    res.writeHead(404, {'Content-type': 'text/html'})
    res.write("<span style='color: red'>Erreur 404</span>")
    res.end()
}