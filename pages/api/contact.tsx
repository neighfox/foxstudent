

export default function nodemailer (req : any, res : any)  {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "neighfox@gmail.com",
      pass: process.env.password,
    },
    secure: true,
  });
  const mailData = {
    from: "neighfox@gmail.com",
    to: "neighfox@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err : any, info : any) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
