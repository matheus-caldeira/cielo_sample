import {NativeModules} from 'react-native';

class Cielo {
  async payment() {
    const json = {
      accessToken: 'change-your-access-token',
      clientID: 'change-your-client-id',
      email: 'matheuscardozo4@gmail.com',
      installments: 0,
      items: [
        {
          name: 'Geral',
          quantity: 1,
          sku: '10',
          unitOfMeasure: 'unidade',
          unitPrice: 10,
        },
      ],
      paymentCode: 'DEBITO_AVISTA',
      value: '10',
    };

    const response = await NativeModules.Payment.payment(JSON.stringify(json));

    return {
      success: response.success,
      code: response.code,
      result: response.success ? JSON.parse(response.result) : response.result,
    };
  }
}

export {Cielo};
