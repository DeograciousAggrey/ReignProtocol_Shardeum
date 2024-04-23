
const fs = require("fs");

const main = async () => {

//Deploy ReignCoin contract
const contractFactoryReignCoin = await hre.ethers.getContractFactory("ReignCoin");
const contractReignCoin = await contractFactoryReignCoin.deploy();
await contractReignCoin.deployed();
console.log("ReignCoin deployed to:", contractReignCoin.address);
const contractInfoReignCoin = {
    address: contractReignCoin.address,
    abi: contractReignCoin.interface.format("json"),
};
const contractReignCoinAddress = contractReignCoin.address;
fs.writeFileSync('DeployFiles/ReignCoin.json', JSON.stringify(contractInfoReignCoin, null, 2));
fs.writeFileSync('DeployFiles/ReignCoinAddress.txt', contractReignCoinAddress);


//Deploy SeniorPool contract
const contractFactorySeniorPool = await hre.ethers.getContractFactory("SeniorPool");
const contractSeniorPool = await contractFactorySeniorPool.deploy();
await contractSeniorPool.deployed();
console.log("SeniorPool deployed to:", contractSeniorPool.address);
const contractInfoSeniorPool = {
    address: contractSeniorPool.address,
    abi: contractSeniorPool.interface.format("json"),
};
const contractSeniorPoolAddress = contractSeniorPool.address;
fs.writeFileSync('DeployFiles/SeniorPool.json', JSON.stringify(contractInfoSeniorPool, null, 2));
fs.writeFileSync('DeployFiles/SeniorPoolAddress.txt', contractSeniorPoolAddress);



//Deploy ReignConfig contract
const contractFactoryReignConfig = await hre.ethers.getContractFactory("ReignConfig");
const contractReignConfig = await contractFactoryReignConfig.deploy();
await contractReignConfig.deployed();
console.log("ReignConfig deployed to:", contractReignConfig.address);
const contractInfoReignConfig = {
    address: contractReignConfig.address,
    abi: contractReignConfig.interface.format("json"),
};
const contractReignConfigAddress = contractReignConfig.address;
fs.writeFileSync('DeployFiles/ReignConfig.json', JSON.stringify(contractInfoReignConfig, null, 2));
fs.writeFileSync('DeployFiles/ReignConfigAddress.txt', contractReignConfigAddress);

//Deploy ReignKeeper contract
const contractFactoryReignKeeper = await hre.ethers.getContractFactory("ReignKeeper");
const contractReignKeeper = await contractFactoryReignKeeper.deploy();
await contractReignKeeper.deployed();
console.log("ReignKeeper deployed to:", contractReignKeeper.address);
const contractInfoReignKeeper = {
    address: contractReignKeeper.address,
    abi: contractReignKeeper.interface.format("json"),
};
const contractReignKeeperAddress = contractReignKeeper.address;
fs.writeFileSync('DeployFiles/ReignKeeper.json', JSON.stringify(contractInfoReignKeeper, null, 2));
fs.writeFileSync('DeployFiles/ReignKeeperAddress.txt', contractReignKeeperAddress);

//Deploy ReignTreasury contract
const contractFactoryReignTreasury = await hre.ethers.getContractFactory("ReignTreasury");
const contractReignTreasury = await contractFactoryReignTreasury.deploy();
await contractReignTreasury.deployed();
console.log("ReignTreasury deployed to:", contractReignTreasury.address);
const contractInfoReignTreasury = {
    address: contractReignTreasury.address,
    abi: contractReignTreasury.interface.format("json"),
};
const contractReignTreasuryAddress = contractReignTreasury.address;
fs.writeFileSync('DeployFiles/ReignTreasury.json', JSON.stringify(contractInfoReignTreasury, null, 2));
fs.writeFileSync('DeployFiles/ReignTreasuryAddress.txt', contractReignTreasuryAddress);


//Deploy AuthorizeUser contract
const contractFactoryAuthorizeUser = await hre.ethers.getContractFactory("AuthorizeUser");
const contractAuthorizeUser = await contractFactoryAuthorizeUser.deploy();
await contractAuthorizeUser.deployed();
console.log("AuthorizeUser deployed to:", contractAuthorizeUser.address);
const contractInfoAuthorizeUser = {
    address: contractAuthorizeUser.address,
    abi: contractAuthorizeUser.interface.format("json"),
};
const contractAuthorizeUserAddress = contractAuthorizeUser.address;
fs.writeFileSync('DeployFiles/AuthorizeUser.json', JSON.stringify(contractInfoAuthorizeUser, null, 2));
fs.writeFileSync('DeployFiles/AuthorizeUserAddress.txt', contractAuthorizeUserAddress);



//Deploy TestUSDCToken contract
const initialSupply = ethers.utils.parseUnits("1000000000", 6); // 1 billion tokens with 6 decimals
const contractFactoryTestUSDCToken = await hre.ethers.getContractFactory("TestUSDCToken");
const contractTestUSDCToken = await contractFactoryTestUSDCToken.deploy(initialSupply);
await contractTestUSDCToken.deployed();
console.log("TestUSDCToken deployed to:", contractTestUSDCToken.address);
const contractInfoTestUSDCToken = {
    address: contractTestUSDCToken.address,
    abi: contractTestUSDCToken.interface.format("json"),
};
const contractTestUSDCTokenAddress = contractTestUSDCToken.address;
fs.writeFileSync('DeployFiles/TestUSDCToken.json', JSON.stringify(contractInfoTestUSDCToken, null, 2));
fs.writeFileSync('DeployFiles/TestUSDCTokenAddress.txt', contractTestUSDCTokenAddress);





//Deploy ReignStaking contract
const APR = 10; // 10%
const contractFactoryReignStaking = await hre.ethers.getContractFactory("ReignStaking");
const contractReignStaking = await contractFactoryReignStaking.deploy(contractTestUSDCToken.address, APR);
await contractReignStaking.deployed();
console.log("ReignStaking deployed to:", contractReignStaking.address);
const contractInfoReignStaking = {
    address: contractReignStaking.address,
    abi: contractReignStaking.interface.format("json"),
};
const contractReignStakingAddress = contractReignStaking.address;
fs.writeFileSync('DeployFiles/ReignStaking.json', JSON.stringify(contractInfoReignStaking, null, 2));
fs.writeFileSync('DeployFiles/ReignStakingAddress.txt', contractReignStakingAddress);



//Deploy NFTMinter contract
const contractFactoryNFTMinter = await hre.ethers.getContractFactory("NFTMinter");
const contractNFTMinter = await contractFactoryNFTMinter.deploy();
await contractNFTMinter.deployed();
console.log("NFTMinter deployed to:", contractNFTMinter.address);
const contractInfoNFTMinter = {
    address: contractNFTMinter.address,
    abi: contractNFTMinter.interface.format("json"),
};
const contractNFTMinterAddress = contractNFTMinter.address;
fs.writeFileSync('DeployFiles/NFTMinter.json', JSON.stringify(contractInfoNFTMinter, null, 2));
fs.writeFileSync('DeployFiles/NFTMinterAddress.txt', contractNFTMinterAddress);















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