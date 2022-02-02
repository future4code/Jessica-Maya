import { PaymentInputDTO, PaymentInsert } from "../Model/Payment"
import { BaseDataBase } from "./BaseDataBase"

export class PaymentDataBase extends BaseDataBase {
    
    private static TABLE_NAME = "wirecard_payment"

    async insertPayment(payment: PaymentInputDTO) {
        try {
            await this.getConnection()
            .insert(payment)
            .into(PaymentDataBase.TABLE_NAME)

           
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Unexpected database error")
            }
        }
    }

    async paymentValidation(card_holder: string){
        try {
            const paymentName = await this.getConnection()
            .select("wirecard_payment.card_holder")
            .where({card_holder: card_holder})
            .from(PaymentDataBase.TABLE_NAME)

            return paymentName[0]

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Unexpected database error")
            }
        }
    }
        
}
