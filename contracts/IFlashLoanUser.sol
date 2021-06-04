// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

interface IFlashLoanUser { 
    function flashLoanCallback(uint amount, address token, bytes memory data) external;
}