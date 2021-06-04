// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

interface IFlashLoanProvider { 
    function executeFlashLoan(address callback, uint amount, address _token, bytes memory data) external;
}