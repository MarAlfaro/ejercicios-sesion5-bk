const nodemailer = require('nodemailer');

enviarMail = async () => {
    const config = {
        host : 'smtp.office365.com',
        port : 587,
        auth : {
            user: 'YA24A144@transforma.edu.sv',
            pass: '*********'
        },
        secureConnection: false,
        tls: {
            ciphers:'SSLv3'
        }
    }

    const mensaje = {
        from: 'YA24A144@transforma.edu.sv',
        to : 'misioneslaborales@gmail.com',
        subject : ' Implementación de servidor de correos.',
        text: '¡Servidor de correo funcionando excelente! \nYancy Alfaro\nRepositorio: https://github.com/MarAlfaro/ejercicios-sesion5-bk.git'
    }

    try {
        const transport = nodemailer.createTransport(config);
        const info = await transport.sendMail(mensaje);
        console.log('Correo enviado:', info.messageId);
    } catch (error) {
        console.error('Error al enviar el correo:', error);
    }
}

enviarMail();