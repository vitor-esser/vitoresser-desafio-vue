import ITransactions from "../interfaces/ITransactions"

export const transactions: ITransactions[] =
  [
    {
      "id": "5f89f9f257fe42957bf6dbfd",
      "title": "Resgate",
      "description": "Resgate de Fundos",
      "status": "Solicitada",
      "amount": 2078.66,
      "date": "2018-12-22",
      "from": "Aposentadoria",
      "to": "Conta Warren"
    },
    {
      "id": "5f89f9f271e4213092bd4e41",
      "title": "Depósito",
      "description": "Depósito Mensal Aposentadoria",
      "status": "Conluída",
      "amount": 148856.29,
      "date": "2017-07-23",
      "from": "Trade",
      "to": "Conta Warren"
    },
    {
      "id": "5f89f9f2f318e70ff298f528",
      "title": "Movimentação interna",
      "description": "Transferência de valor interno",
      "status": "Processando",
      "amount": 25092.82,
      "date": "2016-08-25",
      "from": "Férias",
      "to": "Trade"
    }
  ]