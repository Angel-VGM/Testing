/// My first server
//

const http = require("http")

const hostname = 'localhost'
const port = 3001

const server =  http.createServer( (req, res) => {
	res.statusCode = 200;
	res.setHeader = ('content-type', 'text/plain');
	res.end('Hello mother fucjkefucker')
})

server.listen(port, hostname, () => { console.log(`server runnig in ${hostname}:${port} `) } )
