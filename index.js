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

const getWalletBalance = async () => {
  try {
    // create a connection
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
    // get balance
    const walletBalance = await connection.getBalance(publicKey)
    return walletBalance

  } catch (err) {
    console.log(err)
  }
}

const main = async () => {
  console.log(await getWalletBalance())
}

main()