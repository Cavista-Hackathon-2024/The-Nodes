import nodemailer from 'nodemailer'
import config from '../../Config/config';

export class MailService {
    private transporter = nodemailer.createTransport({
        service: config.mail.smtpHost, 
        auth: {
          user: config.mail.smtpClientId, 
          pass: config.mail.smtpClientSecret 
        },
      });
    constructor() {}
    public async SendMail(email: string, subject: string, message: string) {
        try {
            const mailOptions: nodemailer.SendMailOptions = {
                from: config.mail.smtpClientId,
                to: email,
                subject: subject,
                html: message,
              };
            const isMailSent = await this.transporter.sendMail(mailOptions)
            if (!isMailSent) {
                return false
            }
            return true
        } catch (error) {
            return error
        }
    }
}