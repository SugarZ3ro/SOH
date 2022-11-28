const router = require("express").Router();
const nodemailer = require('nodemailer');
const path= require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

// View engine setup
// router.engine('handlebars', exphbs.engine());
// router.set('view engine', 'handlebars');

// Static folder
// router.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
  console.log("get req accepted");
});

router.post('/send', (req, res) => {
    try{
  const output = `
    <p><h1>MO SWACHA RAJYA</h1></p>
    <h3>Rate our work</h3>
    <ul>  
      <a href="https://www.youtube.com/">click here</a>
       </ul>
    <h3>Message</h3>
    <p>hello there</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'mail.YOURDOMAIN.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    service:"Gmail",
    auth: {
        user: 'murmudamodar111@gmail.com', // generated ethereal user
        pass: 'vmwqbaicrpmwdeyp'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    } 
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: 'murmudamodar111@gmail.com', // sender address
      to: 'ashish2ekka10@gmail.com', // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello kaise ho', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', {msg:'Email has been sent'});
  });

  res.status(200).json(res);

}
catch(err){
    res.status(500).json(err);
}
  });




module.exports = router ;