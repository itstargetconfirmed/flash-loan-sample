# Flash Loan Provider Example

## IFlashLoanProvider.sol

This is an interface for the flash loan provider.

## IFlashLoanUser.sol

This is an interface for the flash loan user. 

## FlashLoanProvider.sol

This is a concrete implementation of a flash loan provider. We use the FakeUSDT ERC20 token to provide an initial balance for testing.

## FlashLoanUser.sol

This is a concrete implementation of a flash loan user. 

## FakeUSDT.sol

This contract is used to provide a balance to the flash loan provider. 

## Test

In the test folder, you can can find a test file (TestFlashLoan.js) which shows the usage of the flash loan provider from a flash loan user.

## Requirements
- Truffle
- OpenZeppelin Contracts
- Blockchain Environment - Eg: Ganache 