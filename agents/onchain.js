// On-Chain Agent - Powered by Google Gemini
// Analyzes wallet flows and on-chain metrics

const { GoogleGenerativeAI } = require('@google/generative-ai');

class OnChainAgent {
  constructor(apiKey) {
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.name = 'On-Chain Agent';
    this.provider = 'Google Gemini';
  }

  async analyze(coin, walletData) {
    // TODO: Implement Gemini analysis
    // TODO: Helius/Birdeye data fetching
    // TODO: Wallet flow analysis
    
    return {
      score: 0, // 0-100
      reasoning: 'Not implemented yet',
      provider: this.provider
    };
  }
}

module.exports = OnChainAgent;
