const lsdnFactoryABI = require("./artifacts/lsdn_factory_abi.json");
const lsmABI = require("./artifacts/lsm_abi.json");
const protectedStakingABI = require("./artifacts/protected_staking_abi.json");
const feesAndMevABI = require("./artifacts/fees_and_mev_abi.json");
const giantProtectedStakingABI = require("./artifacts/giant_protected_staking_abi.json");
const giantFeesAndMevABI = require("./artifacts/giant_fees_and_mev_abi.json");
const smartWalletNamingABI = require("./artifacts/smart_wallet_naming_abi.json");
const syndicateABI = require("./artifacts/syndicate_abi.json");
const giantLPTokenABI = require("./artifacts/giant_lp_abi.json");
const lpTokenABI = require("./artifacts/lp_token_abi.json");
const smartWalletABI = require("./artifacts/smart_wallet_abi.json");
const rageQuitAssistantABI = require("./artifacts/rage_quit_assistant.json");
const frenDelegationBribesABI = require("./artifacts/fren_delegation_bribes_abi.json");

const lsdContracts = {
    LSDN_FACTORY: lsdnFactoryABI,
    LIQUID_STAKING_MANAGER: lsmABI,
    PROTECTED_STAKING: protectedStakingABI,
    FEES_AND_MEV: feesAndMevABI,
    GIANT_PROTECTED_STAKING: giantProtectedStakingABI,
    GIANT_FEES_AND_MEV: giantFeesAndMevABI,
    SMART_WALLET_NAMING_REGISTRY: smartWalletNamingABI,
    SYNDICATE: syndicateABI,
    GIANT_LP: giantLPTokenABI,
    LP_TOKEN: lpTokenABI,
    SMART_WALLET: smartWalletABI,
    RAGE_QUIT_ASSISTANT: rageQuitAssistantABI,
    FREN_DELEGATION_BRIBES: frenDelegationBribesABI
};

module.exports = {
    lsdContracts
};
