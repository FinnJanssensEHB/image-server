const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

router.get("/test", (req, res) => {
  res.json({
    hello: "test!",
  });
});

router.post("/testpost", (req, res) => {
  res.json({
    hello: "hit the POST!",
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);

// const port = 3000;
// var http = require("http"),
//   Stream = require("stream").Transform,
//   fs = require("fs");

// var image = "";

// app.get("/", (req, res) => {
//   res.send("Image server is up");
// });

// app.get("/image/:imageId", (req, res) => {
//   image = req.params.imageId;
//   http
//     .request(
//       `http://finalshowcasebackend.be/storage/${image}`,
//       function (response) {
//         var data = new Stream();

//         response.on("data", function (chunk) {
//           data.push(chunk);
//         });

//         response.on("end", function () {
//           fs.writeFileSync(image, data.read());
//           res.sendFile(__dirname + `/${image}`);
//           res.on("finish", function () {
//             try {
//               console.log(`./${image}`);
//               fs.stat(`./${image}`, function (err, stats) {
//                 console.log(stats); //here we got all information of file in stats variable

//                 if (err) {
//                   return console.error(err);
//                 }

//                 fs.unlink(`./${image}`, function (err) {
//                   if (err) return console.log(err);
//                   console.log("file deleted successfully");
//                 });
//               });
//             } catch (e) {
//               console.log("error removing ");
//             }
//           });
//         });
//       }
//     )
//     .end();
// });

// app.listen(port, () => {
//   console.log(`Image server hosted on ${port}`);
// });

// var url = "http://finalshowcasebackend.be/storage/mainImage_FRIDGED.jpg";

// app.get("/path/for/site", function (req, res) {
//   http
//     .request(url, function (response) {
//       var data = new Stream();

//       response.on("data", function (chunk) {
//         data.push(chunk);
//       });

//       response.on("end", function () {
//         fs.writeFileSync("image.jpg", data.read());
//       });
//     })
//     .end();
//   res.sendFile(filepath);
// });
