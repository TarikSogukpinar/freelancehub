import nodemailer from "nodemailer";

const sendEmail = (email, subject, text) => {
  return new Promise(async (resolve, reject) => {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMT_HOST,
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: text,
      });
      resolve({ error: false, message: "Email sent successfully" });
    } catch (error) {
      console.log(error);
      reject({ error: true, message: error.message });
    }
  });
};

export default sendEmail;
