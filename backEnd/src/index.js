const express = require("express");
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");
const cors = require("cors");
const filmRoutes = require("./routes/routes");

const app = express();
app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());

// Rotas
app.use("/", filmRoutes);

app.post("/sendMail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, (info) => {
    console.log(`email enviado ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  console.log("erro");
  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "SEU EMAIL",
      pass: "SUA SENHA",
    },
  });

  transporter.verify((error, success) => {
    if (error) {
      console.error("Erro ao conectar ao servidor SMTP:", error);
    } else {
      console.log("Servidor SMTP conectado com sucesso!");
    }
  });

  let mailOptions = {
    from: '"Central de filmes"<example.gimail.com>', // sender address
    to: user.email, // list of receivers
    subject: "Novo filme cadastrado🎇🎆🎞", // Subject line
    html: `<h1>Olá david, novo filme cadastrado !!</h1><br>
    <h4>Um novo filme acaba de ser cadastrado a sua lista , venha ver mais informaões <br> Acesse http://localhost:4200/</h4>`,
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

module.exports = app;
