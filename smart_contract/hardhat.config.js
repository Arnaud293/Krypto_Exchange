require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/bSIHBXXVnpc3ZSHXIjzMoydxFdtv5cxn',
      accounts: ['7eaf1bbf5237ee5ec8b335a6b96905eed72ee2b36e095131636e7389d025127e']
    }
  }
};
