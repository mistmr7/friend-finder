let server = require('../../app/server')

server.app.get('/', (res, req) => { 
    res.sendFile(path.join(__dirname, '../public/home.html'))
})

server.app.get('/survey', (res, req) => {
    res.sendFile(path.join(__dirname, '../../survey.html'))
})

