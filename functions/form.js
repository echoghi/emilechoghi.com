const nodemailer = require('nodemailer');

// Load nodemailer config
require('dotenv').load();

const { USEREMAIL, RECEIVINGEMAIL, USERPASS } = process.env;

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: USEREMAIL,
        pass: USERPASS
    }
});

export function handler(event) {
    // Only allow POST
    if (event.method !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        // send contact info to RECEIVINGEMAIL
        transporter.sendMail(
            {
                from: USEREMAIL,
                to: RECEIVINGEMAIL,
                subject: `Message from ${event.body.name} - ${event.body.email}`,
                text: event.body.message
            },
            (err, info) => {
                if (err) {
                    throw err;
                } else {
                    return {
                        statusCode: 200,
                        body: 'Email Sent',
                        details: info
                    };
                }
            }
        );
    } catch (err) {
        return {
            statusCode: 500,
            body: 'Error occured sending the email',
            details: err
        };
    }

    transporter.close();
}
