const { ethers } = require("hardhat");

const deploy = async () => {

  // getSigners() trae la información que traemos desde nuestra llave privada
  // deployer es un objeto que nos permite desplegar contratos a la red que tengamos configurada
  const [deployer] = await ethers.getSigners(); 

  console.log("Deploying contract with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const AaronEpamNFTs = await ethers.getContractFactory("AaronEpamNFTs");
  // Instancia del contracto desplegado
  const deployed = await AaronEpamNFTs.deploy(10000);

  console.log("AaronEpamNFTs is deployed at:", deployed.address);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
