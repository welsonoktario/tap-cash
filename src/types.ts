export interface User {
  id: string;
  username: string;
  name: string;
  phone: string;
}

export interface Account {
  userId: number;
  username: string;
  virtualTapCashId: string;
  pin: string;
  customerName: string;
  accountNumber: string;
  bankAccountBalance: number;
  role: string;
}
