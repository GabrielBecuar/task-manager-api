const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to:email,
        from:'gabrielbecuar@gmail.com',
        subject: 'Thanks for joining in!',
        text:`Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail =(email,name)=>{
    sgMail.send({
        to:email,
        from:'gabrielbecuar@gmail.com',
        subject: 'Sorry to see you go!',
        text:`Good bye ${name}. I hope to see you back soon.`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}

// sgMail.send({
//     to:'gabrielbecuar@gmail.com',
//     from:'gabrielbecuar@gmail.com',
//     subject:'This is my first creation',
//     text: 'I hope this one actually get you.'
// })