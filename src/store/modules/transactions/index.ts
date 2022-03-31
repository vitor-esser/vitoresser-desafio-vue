import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { ITransactions } from '@/modules/transactions/interfaces/ITransactions'
import transactionSingleton from "@/modules/transactions/services";
import store from '@/store';

@Module({ namespaced: true, name: 'TransactionsModule' })
export class TransactionsModule extends VuexModule {
	public transactions: ITransactions[] = []
	public specificTransaction!: ITransactions

	public get transactionsData(): ITransactions[] {
		return this.transactions
	}

	public get specificTransactionData(): ITransactions {
		return this.specificTransaction
	}

	@Mutation
	changeTransactionsData(value: ITransactions[]) {
		this.transactions = value
	}

	@Mutation
	changeSpecificTransactionsData(value: ITransactions) {
		this.specificTransaction = value
	}

	@Action
	public async getAllTransactions() {
		try{
			const transactions = await transactionSingleton.getAllTransactions()
			this.context.commit('changeTransactionsData', transactions)
			return transactions
		} catch(error) {
			console.error(error)
		}
	}

	@Action
	public async getSpecificTransaction(transactionId: string) {
		try {
			const transaction = await transactionSingleton.getTransaction(transactionId)
			this.context.commit('changeSpecificTransactionsData', transaction)
			return transaction
		} catch (error) {
			console.error(error)
		}
	}
}