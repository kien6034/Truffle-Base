const myNFT = artifacts.require("myERC721");

module.exports = function (deployer) {
    deployer.deploy(myNFT, "Kien", "KIE");
  };
  