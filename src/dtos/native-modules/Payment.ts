interface IPaymentResult {
  code: string;
  result: string; // message or json
  success: boolean;
}

interface IPayment {
  payment: (json: string) => Promise<IPaymentResult>;
  cancel: (json: string) => Promise<IPaymentResult>;
}

export type {IPayment, IPaymentResult};
