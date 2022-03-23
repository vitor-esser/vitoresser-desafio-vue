import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { ITransactions } from '@/modules/transactions/interfaces/ITransactions'
import transactionSingleton from "@/modules/transactions/services";

@Module({ namespaced: true, name: 'TransactionsModule' })
export class TransactionsStoreModule extends VuexModule {
	// public transactions: ITransactions[] = []
	// public specificTransaction!: ITransactions

	// public get transactionsData(): ITransactions[] {
	// 	console.log('transactions')
	// 	return this.transactions
	// }

	// public get specificTransactionData(): ITransactions {
	// 	return this.specificTransaction
	// }

	// @Mutation
	// changeTransactionsData(value: ITransactions[]) {
	// 	this.transactions = value
	// }

	// @Mutation
	// changeSpecificTransactionsData(value: ITransactions) {
	// 	this.specificTransaction = value
	// }

	@Action
	public async getAllTransactions() {
		return console.log('entrou')
		// try{
		// 	const transactions = await transactionSingleton.getAllTransactions()
		// 	this.context.commit('changeTransactionsData', transactions)
		// } catch(error) {
		// 	console.error(error)
		// }
	}

	// @Action
	// public async getSpecificTransaction(transactionId: string) {
	// 	try {
	// 		const transaction = await transactionSingleton.getTransaction(transactionId)
	// 		this.context.commit('changeSpecificTransactionsData', transaction)
	// 	} catch (error) {
	// 		console.error(error)
	// 	}
	// }
}