import Vue from 'vue'
import Vuex from 'vuex'
import { TransactionsModule } from './modules/transactions'

Vue.use(Vuex)

export default new Vuex.Store ({
	modules: {
		TransactionsModule: TransactionsModule
	}
})
