const FakeUSDT = artifacts.require('FakeUSDT');
const FlashLoanProvider = artifacts.require('FlashLoanProvider');
const FlashLoanUser = artifacts.require('FlashLoanUser');

contract('Flash Loan Provider Test', async accounts  => {

    it('flash loan balance should be 1 billion fake USDT.', async () => {

        // get instance of fake USDT.
        const fakeUSDT = await FakeUSDT.deployed(); 

        // get instance of flash loan provider.
        const flashLoanProvider = await FlashLoanProvider.deployed(); 

        // use web3 to get the address of the first account. 
        const addresses  = await web3.eth.getAccounts(); 
        const first_address = addresses[0];

        // the first address has 1 billion tokens which we minted to test the flash loan provider. 
        // provider to flash loan provider. 
        const tx = await fakeUSDT.transfer(flashLoanProvider.address, '1000000000000000', {
            from: first_address
        });

        // check fake USDT balance of flash loan provider.
        const balance = await fakeUSDT.balanceOf.call(flashLoanProvider.address);

        // balance should be 1 billion.
        assert.equal(balance, '1000000000000000');
    });

    it('balance of flash loan provider should be 1 billion fake USDT after executing flash loan through user contract.', async () => {
    
        // get instance of fake USDT.
        const fakeUSDT = await FakeUSDT.deployed(); 

        // get instance of flash loan provider.
        const flashLoanProvider = await FlashLoanProvider.deployed(); 

        // use web3 to get the address of the second account. 
        const addresses  = await web3.eth.getAccounts(); 
        const second_address = addresses[1];  
        
        // get flash loan user instance. 
        const flashLoanUser = await FlashLoanUser.deployed();

        // execute flashloan.
        const tx = await flashLoanUser.startFlashLoan(
            flashLoanProvider.address,
            '1000000000000000',
            fakeUSDT.address
        );

        // check fake USDT balance of flash loan provider.
        const balance = await fakeUSDT.balanceOf.call(flashLoanProvider.address);

        // balance should be 1 billion.
        assert.equal(balance, '1000000000000000');

    });
});