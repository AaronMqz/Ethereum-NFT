const { expect } = require("chai");

describe("AaronNFTs Contract", () => {
  const setup = async ({ maxSupply = 1000 } = {}) => {
    const [owner] = await ethers.getSigners();
    const avatars = await ethers.getContractFactory("AaronEpamNFTs");
    const deployed = await avatars.deploy(maxSupply);

    return {
      owner,
      deployed,
    };
  };
  
  describe("Deployment", () => {
    it("Sets max supply to passed param", async () => {
      const maxSupply = 10000;

      const { deployed } = await setup({ maxSupply });

      const returnedMaxSupply = await deployed.maxSupply();
      expect(maxSupply).to.equal(returnedMaxSupply);
    });
  });
  
 });
