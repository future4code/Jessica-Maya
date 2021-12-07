import dotenv from 'dotenv'
import app from "./app"
import createAddressInfo from './endpoints/createAddressInfo'
import createUser from './endpoints/createUser'
// import passRecovery from './endpoints/passRecovery'
import { getAddressInfo } from './services/getAddressInfo'
import { mailTransporter } from './services/mailTransporter'

dotenv.config()

app.post("/users/signup", createUser)
app.post('/address/signup', createAddressInfo)

getAddressInfo("05424150", "10", "casa").then(console.log)

mailTransporter.sendMail({
    from: "<jessicatestesfullstack@gmail.com>",
    to: "yuzo.dev.practice@gmail.com",
    subject: "Email de Jessica Bento - atividade teste",
    text: "para enviar o email utilizei o mailTransporter",
    html: `<p>Oi este daqui foi um teste simples de aprendizado como usar mailTransporter.</p>`
}).then(console.log)