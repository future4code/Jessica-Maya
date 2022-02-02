import { PaymentDataBase } from "../data/PaymentDataBase"
import { MissingFieldsToComplet } from "../Error/MissingFieldsToComplet"
import { PaymentInputDTO, PaymentInsert, TYPE } from "../Model/Payment"
import IdGenerator from "../Services/IdGenerator"

export class PaymentBusiness {
    async insertPayment(input: PaymentInsert) {
        
        if(!input.amount || !input.type || !input.id_client || !input.id_buyer) {
            throw new MissingFieldsToComplet()
        }


        const paymentDataBase = new PaymentDataBase()

        if(input.type === TYPE.CREDITCARD) {

          if(!input.card_holder || !input.card_number || !input.card_expiration || !input.card_cvv) {
            throw new MissingFieldsToComplet()
           }
            const paymentCard: PaymentInputDTO = {
                id: IdGenerator.generate(),
                amount: input.amount,
                type: input.type,
                card_holder: input.card_holder,
                card_number: input.card_number,
                card_expiration: input.card_expiration,
                card_cvv: input.card_cvv,
                id_client: input.id_client,
                id_buyer: input.id_buyer
            }

            if(input.card_cvv.toString().length > 3) {
                throw new Error("The card_cvv has only 3 numbers")
            }

            await paymentDataBase.insertPayment(paymentCard)

           return "Purchase made successfully, we'll send you more information about the purchase by email."
        }


        if(input.type === TYPE.BANKSLIP) {
            const paymentBank: PaymentInputDTO = {
                id: IdGenerator.generate(),
                amount: input.amount,
                type: input.type,
                id_client: input.id_client,
                id_buyer: input.id_buyer
            }

            await paymentDataBase.insertPayment(paymentBank)

           const numberSlip = Math.floor(Math.random() * 65536543247556586121540).toString()
            
           return numberSlip
        }

    }
}