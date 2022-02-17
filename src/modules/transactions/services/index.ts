import { Api } from '@/services/api';
import { ITransactions } from '@/modules/transactions/interfaces/ITransactions';

export class TransactionsService extends Api {
  constructor() {
    super();
  }
  public async getAllTransactions(): Promise<ITransactions[]> {
    return await this.get<ITransactions[]>(`/transactions`);
  }

  public async getTransaction(transactionId: string): Promise<ITransactions> {
    return await this.get<ITransactions>(`/transactions/${transactionId}`);
  }
}

const transactionSingleton = new TransactionsService();
export default transactionSingleton;