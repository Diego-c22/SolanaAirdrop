const {
  Connection,
  PublicKey,
  clusterApiUrl,
  Keypair,
  LAMPORTS_PER_SOL
} = require('@solana/web3.js')

// create a new wallet
const wallet = new Keypair()