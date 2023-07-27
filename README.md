# @blockswaplab/lsd-protocol-abis
The lsd-protocol-abis SDK provides ABIs which are used throughout the LSD Protocol.

## Usage
To import the ABIs :  
`const { lsdContracts } = require("@blockswaplab/lsd-protocol-abis");`

### Available ABIs
The SDK provides ABIs for the following contracts :  
* LSDN Factory: `lsdContracts.LSDN_FACTORY`
* Liquid Staking Manager: `lsdContracts.LIQUID_STAKING_MANAGER`  
* Protected Staking Pool (SavETH Vault): `lsdContracts.PROTECTED_STAKING`  
* Fees and MEV Pool: `lsdContracts.FEES_AND_MEV`  
* Giant Protected Staking Pool (Giant SavETH Pool): `lsdContracts.GIANT_PROTECTED_STAKING`  
* Giant Fees and MEV Pool: `lsdContracts.GIANT_FEES_AND_MEV`  
* Smart Wallet Naming Registry: `lsdContracts.SMART_WALLET_NAMING_REGISTRY`
