const {
  Connection,
  PublicKey,
  clusterApiUrl,
  Keypair,
  LAMPORTS_PER_SOL
} = require('@solana/web3.js')

// create a new wallet
const wallet = new Keypair()

// get public Key
const publicKey = wallet.publicKey
// get secretKey
const secretKey = wallet._keypair.secretKey

console.log(publicKey, secretKey)