interface RentalType {
  name: string;
  feeDays: number;
  feeRate: number;
}

export type Category = {
  [code in Code]: RentalType;
};
