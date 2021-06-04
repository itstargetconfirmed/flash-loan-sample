const FlashLoanProvider = artifacts.require("FlashLoanProvider");
const FakeUSDT = artifacts.require("FakeUSDT");

module.exports = function (deployer) {
    deployer.then(async () => {
        const fakeUSDT = await FakeUSDT.deployed();
        await deployer.deploy(FlashLoanProvider, [fakeUSDT.address]);
    });
};