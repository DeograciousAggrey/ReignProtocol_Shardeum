
const fs = require("fs");

const main = async () => {




    //Deploy multiSigWallet contract
    const multisigOwners = [
        "0x73bE1a0d90817074884B502447e3a47f07f72ca5",
        "0xfAF0F3dA2295198c0F283a9acAD37F3344137731",
        "0x406107b215a2420D09Ae300D1Ae3600002B53A5A" // New owner address
    ];
    const reignTreasuryAddress = "0x7B27c6427C2ac50237E8C111CC67a38FDaac7b9d";
    const numConfirmationsRequired = 2;
    const contractFactorymultiSigWallet = await hre.ethers.getContractFactory("multiSigWallet");
    const contractmultiSigWallet = await contractFactorymultiSigWallet.deploy(multisigOwners, numConfirmationsRequired, reignTreasuryAddress);
    await contractmultiSigWallet.deployed();
    console.log("multiSigWallet deployed to:", contractmultiSigWallet.address);
    const contractInfomultiSigWallet = { 
        address: contractmultiSigWallet.address,
        abi: contractmultiSigWallet.interface.format("json"),
    };
    const contractmultiSigWalletAddress = contractmultiSigWallet.address;
    fs.writeFileSync('DeployFiles/multiSigWallet.json', JSON.stringify(contractInfomultiSigWallet, null, 2));
    fs.writeFileSync('DeployFiles/multiSigWalletAddress.txt', contractmultiSigWalletAddress);



    


    // //Deploy OpportunityManager contract
    const contractFactoryOpportunityManager = await hre.ethers.getContractFactory("OpportunityManager");
    const contractOpportunityManager = await contractFactoryOpportunityManager.deploy();
    await contractOpportunityManager.deployed();
    console.log("OpportunityManager deployed to:", contractOpportunityManager.address);
    const contractInfoOpportunityManager = {
        address: contractOpportunityManager.address,
        abi: contractOpportunityManager.interface.format("json"),
    };
    const contractOpportunityManagerAddress = contractOpportunityManager.address;
    fs.writeFileSync('DeployFiles/OpportunityManager.json', JSON.stringify(contractInfoOpportunityManager, null, 2));
    fs.writeFileSync('DeployFiles/OpportunityManagerAddress.txt', contractOpportunityManagerAddress);

    
    //Deploy OpportunityPool contract
    const contractFactoryOpportunityPool = await hre.ethers.getContractFactory("OpportunityPool");
    const contractOpportunityPool = await contractFactoryOpportunityPool.deploy();
    await contractOpportunityPool.deployed();
    console.log("OpportunityPool deployed to:", contractOpportunityPool.address);
    const contractInfoOpportunityPool = {
        address: contractOpportunityPool.address,
        abi: contractOpportunityPool.interface.format("json"),
    };
    const contractOpportunityPoolAddress = contractOpportunityPool.address;
    fs.writeFileSync('DeployFiles/OpportunityPool.json', JSON.stringify(contractInfoOpportunityPool, null, 2));
    fs.writeFileSync('DeployFiles/OpportunityPoolAddress.txt', contractOpportunityPoolAddress);


    
    




}
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();










