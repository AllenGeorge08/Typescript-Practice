
//Run solana validator locally before using this
import {Connection,Keypair,LAMPORTS_PER_SOL,PublicKey, clusterApiUrl} from "@solana/web3.js";

async function solanaBasics(){

    // Establishing a connection to the solana blockchain
    // const connection = new Connection(clusterApiUrl("devnet"),"confirmed");
    const connection = new Connection("http://127.0.0.1:8899");

    console.log("Connection created to local validator");

    // Generating keypairs (wallets)
    //Keypair = private key + public key (like your wallet)
    const wallet1 = Keypair.generate();
    const wallet2 = Keypair.generate();

    console.log(`Wallet 1: ${wallet1.publicKey.toBase58()}`);
    console.log(`Wallet 2: ${wallet2.publicKey.toBase58()}\n`);

    // Get balance returns balance in lamports
    let  balance1 = await connection.getBalance(wallet1.publicKey);
    let  balance2 = await connection.getBalance(wallet2.publicKey);

    console.log("Initial balances:");
    console.log(`   Wallet 1: ${balance1} lamports (${balance1 / LAMPORTS_PER_SOL} SOL)`);
    console.log(`   Wallet 2: ${balance2} lamports (${balance2 / LAMPORTS_PER_SOL} SOL)\n`);

    const airdropSignature = await connection.requestAirdrop(
        wallet1.publicKey,
        2*LAMPORTS_PER_SOL   //2 Sol
    );

    const airdropSignature2  = await connection.requestAirdrop(
        wallet2.publicKey,
        5*LAMPORTS_PER_SOL  //Requesting airdrop
    )

    console.log(`Airdrop signature: ${airdropSignature}`);
    console.log(`Airdrop signature 2: ${airdropSignature2}`);

    // Always confirm transactions before proceeding
    const latestBlockhash = await connection.getLatestBlockhash();
    await connection.confirmTransaction({
        signature: airdropSignature,
        blockhash: latestBlockhash.blockhash,
        lastValidBlockHeight: latestBlockhash.lastValidBlockHeight
    });

    console.log("Airdrop confirmed\n");

    balance1 = await connection.getBalance(wallet1.publicKey);
    balance2 = await connection.getBalance(wallet2.publicKey);

    console.log(`Updated balance of wallet 2 after airdrop is: ${balance2} lamports`);

    const accountInfo = await connection.getAccountInfo(wallet1.publicKey);
    console.log(`Balance of account 1: ${accountInfo?.lamports} lamports`);
    console.log(`Owner of account 1 : ${accountInfo?.owner.toBase58()}`);


    
    const accountInfo2 = await connection.getAccountInfo(wallet2.publicKey);
    console.log(`Balance of account 2: ${accountInfo2?.lamports} lamports`);
    console.log(`Owner of account 2 : ${accountInfo2?.owner.toBase58()}`);
}

solanaBasics().catch(console.error);





