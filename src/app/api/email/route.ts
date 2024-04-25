import nodemailer from 'nodemailer';
import {NextRequest, NextResponse} from "next/server";
import {render} from "@react-email/render";
import ConfirmationEmail from './confirmation';

const transporter = nodemailer.createTransport({
    host: 'mail.torontosteamnclean.ca',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: '_mainaccount@torontosteamnclean.ca',
        pass: '2NR8uaZwv5Z3N4h',
    },
});

export async function POST(req: NextRequest, res: NextResponse) {
    const body =await req.json();

    const emailHtml = render(ConfirmationEmail(body));

    const options = {
        from: 'Toronto Steam n’ Clean <info@torontosteamnclean.ca>',
        to: [body.email, 'info@torontosteamnclean.ca'],
        subject: 'We have received your request',
        html: emailHtml,
        replyTo: [body.email, 'info@torontosteamnclean.ca']
    };

    transporter.sendMail(options);

    console.log(body);

    return NextResponse.json({status: 'OK'});
}