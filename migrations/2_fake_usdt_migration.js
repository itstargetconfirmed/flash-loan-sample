const FakeUSDT = artifacts.require("FakeUSDT");

module.exports = function (deployer) {
  deployer.deploy(FakeUSDT);
};
