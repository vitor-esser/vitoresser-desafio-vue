import store from '@/store'
import { getModule } from 'vuex-module-decorators'
import { TransactionsStoreModule } from './module'

export const TransactionsModule = getModule(TransactionsStoreModule, store)