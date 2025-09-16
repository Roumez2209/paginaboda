const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // Ruta a tu HTML
  const filePath = path.join(__dirname, "index.html");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error cargando la página");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { ... });


});

