let Web3 = require('web3')
let url_infura = 'https://mainnet.infura.io/v3/fd87525346254c0482847e88e35d7b9a'
let web3 = new Web3(url_infura)
//get Account Balance
//0xdaf37dc4e4aacc0fab643bb4b9e52b82bc547d7261ba97c7383f93a88019afaf
//let address = "0xdaf37dc4e4aacc0fab643bb4b9e52b82bc547d7261ba97c7383f93a88019afaf"Doesnt work
let address = "0x9568D560Ed103f2d57Cc978357592B7Fac7a7F11"
web3.eth.getBalance(address, function(error, balance) {
	if (!error) {
		console.log('Balance: ' + web3.utils.fromWei(balance, 'ether'))
	} else {
		console.log('Error: ' + error)
	}
})