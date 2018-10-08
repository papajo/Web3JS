let Web3 = require('web3')
let url_infura = 'https://mainnet.infura.io/v3/fd87525346254c0482847e88e35d7b9a'
let web3 = new Web3(url_infura)
//get Wallet

let wallet = web3.eth.accounts.wallet.create(2, 'random string')

console.log(wallet)  //should display 2 accounts

let account = web3.eth.accounts.create()
wallet.add(account.privateKey)

console.log(wallet) //should display 3 accounts