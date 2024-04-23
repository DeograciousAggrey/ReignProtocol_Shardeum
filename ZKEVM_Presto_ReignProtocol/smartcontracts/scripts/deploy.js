const fs = require("fs");

const main = async () => {


    //Deploy DSMath library
    const contractFactoryDSMath = await hre.ethers.getContractFactory("DSMath");
    const contractDSMath = await contractFactoryDSMath.deploy();
    await contractDSMath.deployed();
    console.log("DSMath deployed to:", contractDSMath.address);
    const contractInfoDSMath = {
        address: contractDSMath.address,
        abi: contractDSMath.interface.format("json"),
    };
    const contractDSMathAddress = contractDSMath.address;
    fs.writeFileSync('DeployFiles/DSMath.json', JSON.stringify(contractInfoDSMath, null, 2));
    fs.writeFileSync('DeployFiles/DSMathAddress.txt', contractDSMathAddress);


    //Deploy Constants library
    const contractFactoryConstants = await hre.ethers.getContractFactory("Constants");
    const contractConstants = await contractFactoryConstants.deploy();
    await contractConstants.deployed();
    console.log("Constants deployed to:", contractConstants.address);
    const contractInfo = {
        address: contractConstants.address,
        abi: contractConstants.interface.format("json"),
    };
    const contractConstantsAddress = contractConstants.address;
    fs.writeFileSync('DeployFiles/Constants.json', JSON.stringify(contractInfo, null, 2));
    fs.writeFileSync('DeployFiles/ConstantsAddress.txt', contractConstantsAddress);


    //Deploy ConfigOptions library
    const contractFactoryConfigOptions = await hre.ethers.getContractFactory("ConfigOptions");
    const contractConfigOptions = await contractFactoryConfigOptions.deploy();
    await contractConfigOptions.deployed();
    console.log("ConfigOptions deployed to:", contractConfigOptions.address);
    const contractInfoConfigOptions = {
        address: contractConfigOptions.address,
        abi: contractConfigOptions.interface.format("json"),
    };
    const contractConfigOptionsAddress = contractConfigOptions.address;
    fs.writeFileSync('DeployFiles/ConfigOptions.json', JSON.stringify(contractInfoConfigOptions, null, 2));
    fs.writeFileSync('DeployFiles/ConfigOptionsAddress.txt', contractConfigOptionsAddress);

    //Deploy PauserPausable contract
    const contractFactoryPauserPausable = await hre.ethers.getContractFactory("PauserPausable");
    const contractPauserPausable = await contractFactoryPauserPausable.deploy();
    await contractPauserPausable.deployed();
    console.log("PauserPausable deployed to:", contractPauserPausable.address);
    const contractInfoPauserPausable = {
        address: contractPauserPausable.address,
        abi: contractPauserPausable.interface.format("json"),
    };
    const contractPauserPausableAddress = contractPauserPausable.address;
    fs.writeFileSync('DeployFiles/PauserPausable.json', JSON.stringify(contractInfoPauserPausable, null, 2));
    fs.writeFileSync('DeployFiles/PauserPausableAddress.txt', contractPauserPausableAddress);

    //Deploy Accounting library
    const contractFactoryAccounting = await hre.ethers.getContractFactory("Accounting");
    const contractAccounting = await contractFactoryAccounting.deploy();
    await contractAccounting.deployed();
    console.log("Accounting deployed to:", contractAccounting.address);
    const contractInfoAccounting = {
        address: contractAccounting.address,
        abi: contractAccounting.interface.format("json"),
    };
    const contractAccountingAddress = contractAccounting.address;
    fs.writeFileSync('DeployFiles/Accounting.json', JSON.stringify(contractInfoAccounting, null, 2));
    fs.writeFileSync('DeployFiles/AccountingAddress.txt', contractAccountingAddress);


    //Deploy BaseUpgradeablePausable contract
    const contractFactoryBaseUpgradeablePausable = await hre.ethers.getContractFactory("BaseUpgradeablePausable");
    const contractBaseUpgradeablePausable = await contractFactoryBaseUpgradeablePausable.deploy();
    await contractBaseUpgradeablePausable.deployed();   
    console.log("BaseUpgradeablePausable deployed to:", contractBaseUpgradeablePausable.address);
    const contractInfoBaseUpgradeablePausable = {
        address: contractBaseUpgradeablePausable.address,
        abi: contractBaseUpgradeablePausable.interface.format("json"),
    };
    const contractBaseUpgradeablePausableAddress = contractBaseUpgradeablePausable.address;
    fs.writeFileSync('DeployFiles/BaseUpgradeablePausable.json', JSON.stringify(contractInfoBaseUpgradeablePausable, null, 2));
    fs.writeFileSync('DeployFiles/BaseUpgradeablePausableAddress.txt', contractBaseUpgradeablePausableAddress);

    //Deploy Borrower contract
    const contractFactoryBorrower = await hre.ethers.getContractFactory("Borrower");
    const contractBorrower = await contractFactoryBorrower.deploy();
    await contractBorrower.deployed();
    console.log("Borrower deployed to:", contractBorrower.address);
    const contractInfoBorrower = {
        address: contractBorrower.address,
        abi: contractBorrower.interface.format("json"),
    };
    const contractBorrowerAddress = contractBorrower.address;
    fs.writeFileSync('DeployFiles/Borrower.json', JSON.stringify(contractInfoBorrower, null, 2));
    fs.writeFileSync('DeployFiles/BorrowerAddress.txt', contractBorrowerAddress);

    //Deploy CollateralToken contract
    const contractFactoryCollateralToken = await hre.ethers.getContractFactory("CollateralToken");
    const contractCollateralToken = await contractFactoryCollateralToken.deploy();
    await contractCollateralToken.deployed();
    console.log("CollateralToken deployed to:", contractCollateralToken.address);
    const contractInfoCollateralToken = {
        address: contractCollateralToken.address,
        abi: contractCollateralToken.interface.format("json"),
    };
    const contractCollateralTokenAddress = contractCollateralToken.address;
    fs.writeFileSync('DeployFiles/CollateralToken.json', JSON.stringify(contractInfoCollateralToken, null, 2));
    fs.writeFileSync('DeployFiles/CollateralTokenAddress.txt', contractCollateralTokenAddress);

    //Deploy ConfigHelper library
    const contractFactoryConfigHelper = await hre.ethers.getContractFactory("ConfigHelper");
    const contractConfigHelper = await contractFactoryConfigHelper.deploy();
    await contractConfigHelper.deployed();
    console.log("ConfigHelper deployed to:", contractConfigHelper.address);
    const contractInfoConfigHelper = {
        address: contractConfigHelper.address,
        abi: contractConfigHelper.interface.format("json"),
    };
    const contractConfigHelperAddress = contractConfigHelper.address;
    fs.writeFileSync('DeployFiles/ConfigHelper.json', JSON.stringify(contractInfoConfigHelper, null, 2));
    fs.writeFileSync('DeployFiles/ConfigHelperAddress.txt', contractConfigHelperAddress);

    //Deploy IdentityToken contract
    const contractFactoryIdentityToken = await hre.ethers.getContractFactory("IdentityToken");
    const contractIdentityToken = await contractFactoryIdentityToken.deploy();
    await contractIdentityToken.deployed();
    console.log("IdentityToken deployed to:", contractIdentityToken.address);
    const contractInfoIdentityToken = {
        address: contractIdentityToken.address,
        abi: contractIdentityToken.interface.format("json"),
    };
    const contractIdentityTokenAddress = contractIdentityToken.address;
    fs.writeFileSync('DeployFiles/IdentityToken.json', JSON.stringify(contractInfoIdentityToken, null, 2));
    fs.writeFileSync('DeployFiles/IdentityTokenAddress.txt', contractIdentityTokenAddress);



    //Deploy Investor contract
    const contractFactoryInvestor = await hre.ethers.getContractFactory("Investor");
    const contractInvestor = await contractFactoryInvestor.deploy();
    await contractInvestor.deployed();
    console.log("Investor deployed to:", contractInvestor.address);
    const contractInfoInvestor = {
        address: contractInvestor.address,
        abi: contractInvestor.interface.format("json"),
    };
    const contractInvestorAddress = contractInvestor.address;
    fs.writeFileSync('DeployFiles/Investor.json', JSON.stringify(contractInfoInvestor, null, 2));
    fs.writeFileSync('DeployFiles/InvestorAddress.txt', contractInvestorAddress);









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