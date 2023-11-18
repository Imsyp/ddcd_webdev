var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

function templateHTML(title, list, body, control) {
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB2</a></h1>  
    ${list}
    ${control}
    ${body}
  </body>
  </html>
  `;
}

function templateList(filelist) {
  var list = '<ol>';
  var i = 0;
  while(i < filelist.length) {
    list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i++;
  }
  list += '</ol>';

  return list;
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname

    if(pathname === '/') {
        if(queryData.id === undefined) {
          fs.readdir('./data', function(error, filelist) {
            var title = 'Welcome';
            var description = 'Hello, Node.js';
            var list = templateList(filelist);
            var template = templateHTML(title, list, 
              `<h2>${title}</h2>${description}`, 
              `<a href = "/create">create</a>`
            );  //home에서는 update 빼고 create만
            response.writeHead(200);
            response.end(template);
          })
        } else {
          fs.readdir('./data', function(error, filelist) {
            fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) {
              var title = queryData.id;
              var list = templateList(filelist);
              var template = templateHTML(title, list, 
                `<h2>${title}</h2>${description}`, 
                `<a href = "/create">create</a> <a href = "/update?id=${title}">update</a>`  
              );  //id값을 선택한 페이지에서는 update ui가 나오도록
              response.writeHead(200);
              response.end(template);
            });
          });
        }
    } else if(pathname === '/create') {
      fs.readdir('./data', function(error, filelist) {
        var title = 'Web - create';
        var list = templateList(filelist);
        //place holder는 text input 박스 안에 나타나는 텍스트
        var template = templateHTML(title, list, `
        <form action = "http://localhost:3000/create_process" method = "post">
          <p><input type = "text" name = "title" placeholder = "title"></p>
          <p>
            <textarea name = "description" placeholder = "description"></textarea>
          </p>
          <p>
            <input type = "submit">
          </p>
        </form>
        `, '');
        response.writeHead(200);
        response.end(template);
      }); 
    } else if(pathname === '/create_process') {
      var body = '';
      //request <- var app = http.createServer(function(request,response)
      //사용자가 요청할 때 웹브라우저에서 제공하는 정보
      request.on('data', function(data) {
        body += data;
      });
      //정보 수신이 끝난 시점
      //post.tile과 post.description과 같은 방식으로 post 데이터에 접근할 수 있음
      request.on('end', function() {
        var post = qs.parse(body);
        var title = post.title;
        var description = post.description
        fs.writeFile(`data/${title}`, description, 'utf8', function(err) {
          //302: 페이지를 다른 곳으로 redirection한다는 뜻
          response.writeHead(302, {Location: `/?id=${title}`});
          response.end();
        })
      });
    } else {
      response.writeHead(404);
      response.end('Not found')
    }
});
app.listen(3000);
