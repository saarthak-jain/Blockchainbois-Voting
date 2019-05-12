const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('a5e2e4054d5e4c4cfd52f0e78f53a58b270820e2c1ff667d607a9ab23f2245fb');
const myWalletAddress = myKey.getPublic('hex');

let BlockchainBois = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
BlockchainBois.addTransaction(tx1);

console.log('\nStarting the miner...');
BlockchainBois.minePendingTransactions(myWalletAddress);

console.log('Balance of xavier is', BlockchainBois.getBalanceOfAddress(myWalletAddress));
console.log('Is chain valid?', BlockchainBois.isChainValid());