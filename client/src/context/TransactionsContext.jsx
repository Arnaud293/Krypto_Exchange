import React, {useEffect, useState} from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionsContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum.window);
    const signer = provider.getSigner();
    const transationContract = new ethers.Contract(contractAddress, contractABI, signer);
};

export const TransactionsProvider = ({ children }) => {
    return (
        <TransactionsContext.Provider value={{value: "test"}}>
            {children}
        </TransactionsContext.Provider>
    )
}