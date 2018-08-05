import * as httpProxy from 'http-proxy';
import * as http from 'http';
import * as env from './env';

const proxy = http.createServer((request, response) => {
  let hostHeader = request.headers['host'];
  console.log('request made to proxy: ' + request.url + ', ' +
    'target: ' + hostHeader);
  httpProxy
    .createProxyServer({target: hostHeader})
    .web(request, response);
});

proxy.listen(env.proxyPort);