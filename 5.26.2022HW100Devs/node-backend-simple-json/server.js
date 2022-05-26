const http = require('http');
const fs = require('fs')
const url = require('url');
const path = require('path')
const figlet = require('figlet')

const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  const pageName = req.url == '/' ? 'index.html' : req.url;
  const isAPI = pageName.startsWith('/api');

  let filePath = path.join(__dirname, pageName);
  let fileType = path.extname(filePath);

  if(fileType.length === 0 && !isAPI){
    filePath = path.join(__dirname, pageName + '.html')
    fileType = path.extName(filePath);
  }
  let contentType = getContentType(fileType);
  let params = url.parse(req.url, true).query;

  function pageResponse(){
    fs.readFile(filePath, (err, data) => {
      res.writeHead(200, contentType)
      try {
        res.write(data)
      } catch(err){
        console.log(`Error. Cannot load ${pageName}.`)
        console.log(err)
      }
      res.end()
    })
  }
  function getAPI (){
    if(params['student'] in storedResponses){
      return storedResponses[params['student']]
    }
    return storedResponses['unknown']
  }
  function serveAPI(){
    if('student' in params){
      res.writeHead(200, contentType);
      const objToJSON = getAPI()
      res.end(JSON.stringify(objToJSON))
    }
  }
  function serveError(){
    figlet('404 Page Not Found', function(err,data) {
      if(err){
        console.log('Error')
        console.dir(err)
        return
      }
      res.write(data)
      res.end()
    })
  }

  try{
    if(isAPI){
      serveAPI()
    }else{
      pageResponse()
    }
  }
  catch(err){
    serveError()
}
})

function getContentType(fileType){
  const defaultType = 'text/html';
  const contentTypes = {
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg'
  }
  return contentTypes[fileType] || defaultType;
}

const storedResponses = {
  'leon':{
    name: 'leon',
    status: 'Boss Man',
    currentOccupation: 'Baller'
  },
  'emily': {
    name: 'emily',
    status: 'rad as hell',
    currentOccupation: 'Software Engineer'
  },
  'bob': {
    name: 'bob bobber bobbity bobson',
    status: 'bobbin\'',
    currentOccupation: 'the OG'
  },
  'unknown':{
    name:'unknown',
    status: 'unknown',
    currentOccupation: 'unknown'
  }
}

server.listen(PORT)