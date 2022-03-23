import Vue from 'vue'
import Vuex from 'vuex'
import { TransactionsStoreModule } from '@/modules/transactions/store/module'

Vue.use(Vuex)

export default new Vuex.Store ({
	modules: {
		TransactionsModule: TransactionsStoreModule
	}
})
