const provider = window.ethereum; // Initializing RPC provider

let locks = {
  "0x5e4fadf7bd22d0b0f1ad32dbb646a96852810dac": {
    network: 80001,
    name: "Back Benchers",
    emailRequired: true,
  },
};

let networkConfigs = {
  1: {
    provider,
  },
  5: {
    provider: provider,
  },
  80001: {
    provider: provider,
  },
};

module.exports = { provider, networkConfigs, locks };
