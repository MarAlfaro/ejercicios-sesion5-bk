const EmailCtrl = require('./actividad');

// Ruta para enviar el correo electrónico
router.post('/email', EmailCtrl.sendEmail);
