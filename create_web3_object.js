let Web3 = require('web3')
//1. Ganache local blockchain
let url_ganache = 'http://localhost:7545'
//2. infura
let url_infura = 'https://mainnet.infura.io/v3/fd87525346254c0482847e88e35d7b9a'
//3. geth
let url_geth = 'http://127.0.0.1:8545'
//let web3 = new Web3(url_ganache)

//let web3 = new Web3(url_infura)
 
let web3 = new Web3(url_geth)

console.log(web3)