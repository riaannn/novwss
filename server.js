import http from "node:http";
import wisp from "wisp-server-node";

const httpServer = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("ok");
});

httpServer.on("upgrade", (req, socket, head) => {
  wisp.routeRequest(req, socket, head);
});

httpServer.listen(process.env.PORT || 8080, "0.0.0.0");
