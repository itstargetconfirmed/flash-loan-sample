const FlashLoanUser = artifacts.require("FlashLoanUser");

module.exports = function (deployer) {
  deployer.deploy(FlashLoanUser);
};
