import axios from "axios"

type Adress = {
    cep: string
    logradouro: string,
    bairro: string,
    complemento: string,
    cidade: string,
    estado: string,
    numero: string
}

export const getAddressInfo = async (cep: string, numero: string, complemento: string): Promise<Adress> =>{

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    console.log(response.data)
    return {
        cep: response.data.cep,
        logradouro: response.data.logradouro,
        bairro: response.data.bairro,
        complemento: complemento,
        cidade: response.data.localidade,
        numero: numero,
        estado: response.data.uf
    }
}