// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import './IFlashLoanUser.sol';
import './IFlashLoanProvider.sol';

contract FlashLoanUser is IFlashLoanUser { 

    IFlashLoanProvider private provider; 

    function startFlashLoan(
        address _provider, 
        uint amount, 
        address _token
    ) external { 
        provider = IFlashLoanProvider(_provider);
        provider.executeFlashLoan(address(this), amount, _token, bytes(''));
    }

    // the flash loan will call this function
    // perform arbitrage, liquidation etc in this function.
    // must repay flash loan.
    function flashLoanCallback(uint amount, address _token, bytes memory data) external override {
        require(msg.sender == address(provider), 'only flash loan provider can execute callback.');
        
        // perform arbitrage, liquidation etc in this function.

        // repay. 
        IERC20(_token).transfer(address(provider), amount);

        // take profit to user EOA.
    }

}