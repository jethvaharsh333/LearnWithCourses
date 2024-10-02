import nodemailer from "nodemailer";
const domain = process.env.NEXT_PUBLIC_APP_URL;

const USER = process.env.EMAIL_USER;
const PASS = process.env.EMAIL_PASS;
console.log(USER, PASS);

const transporter = nodemailer.createTransport({
    host: "harshcse98@gmail.com",
    service: "gmail",
    secure : false,
    port : 587,
    auth: {
        user: USER,
        pass: PASS,
    },
    // logger: true,
});

console.log(transporter);

export const sendTwoFactorEmail = async (email: string, token: string) => {
    const ans = await transporter.sendMail({
        from: '"lwc" <harshcse98@gmail.com>',
        to: email,
        subject: "2FA Code",
        text: "Hello world?",
        html: `<p>Your 2FA Code: ${token}</p>`,
    });  
};
  
export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `${process.env.DOMAIN}/auth/new-password?token=${token}`;

    await transporter.sendMail({
        from: '"lwc" <harshcse98@gmail.com>',
        to: email, // list of receivers
        subject: "Reset your password", // Subject line
        // text: "Hello world?", // plain text body
        html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`, // html body
    });  
};
  
export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;
    console.log("Email: ");
    console.log(transporter);
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
    const ans = await transporter.sendMail({
        from: '"lwc" <harshcse98@gmail.com>',
        to: email, // list of receivers
        subject: "Confirm your email", // Subject line
        // text: "Hello world?", // plain text body
        html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`, // html body
    });
    console.log("ans:", ans);
};

// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);
// export const sendTwoFactorEmail = async ( email: string, token: string) => {
//     await resend.emails.send({
//         from: "onboarding@resend.dev",
//         to: email,
//         subject: "2FA Code",
//         html: `<p>Your 2FA Code: ${token}</p>`
//     })
// }
// export const sendPasswordResetEmail = async(email:string,token:string) => {
//     const resetLink = `${domain}/auth/new-password?token=${token}`;
//     await resend.emails.send({
//         from: "onboarding@resend.dev",
//         to: email,
//         subject: "Reset your password",
//         html: `<p>Click <a href="${resetLink}">here</a> to confirm password.</p>`
//     })
// }
// export const sendVerificationEmail = async(email:string,token:string) => {
//     const confirmLink = `${domain}/auth/new-verification?token=${token}`;
//     await resend.emails.send({
//         from: "onboarding@resend.dev",
//         to: email,
//         subject: "Confirm your email",
//         html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`
//     })
// }