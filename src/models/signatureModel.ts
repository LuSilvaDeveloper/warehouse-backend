// DB schema for signatures

export interface Signature {
  id: string;
  invoiceId: string;
  signatureUrl: string;
  createdAt: Date;
}
