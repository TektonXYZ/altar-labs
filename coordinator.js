// Multi-Agent Coordinator
// Orchestrates the 5 agents and aggregates scores

const SentimentAgent = require('./agents/sentiment');
const TechnicalAgent = require('./agents/technical');
const OnChainAgent = require('./agents/onchain');
const FundamentalAgent = require('./agents/fundamental');
const RiskAgent = require('./agents/risk');

class MultiAgentSystem {
  constructor(config) {
    this.sentiment = new SentimentAgent(config.grokKey);
    this.technical = new TechnicalAgent(config.openaiKey);
    this.onchain = new OnChainAgent(config.geminiKey);
    this.fundamental = new FundamentalAgent(config.anthropicKey);
    this.risk = new RiskAgent(config.moonshotKey);
    
    this.weights = {
      sentiment: 0.20,
      technical: 0.20,
      onchain: 0.20,
      fundamental: 0.20,
      risk: 0.20
    };
  }

  async analyze(coin) {
    console.log(`Starting analysis for ${coin}...`);
    
    // Run all 5 agents in parallel
    const results = await Promise.all([
      this.sentiment.analyze(coin),
      this.technical.analyze(coin),
      this.onchain.analyze(coin),
      this.fundamental.analyze(coin),
      this.risk.analyze(coin)
    ]);

    const [sentiment, technical, onchain, fundamental, risk] = results;

    // Calculate weighted final score
    const finalScore = (
      sentiment.score * this.weights.sentiment +
      technical.score * this.weights.technical +
      onchain.score * this.weights.onchain +
      fundamental.score * this.weights.fundamental +
      risk.score * this.weights.risk
    );

    // Determine decision
    let decision = 'IGNORE';
    if (risk.veto) {
      decision = 'RISK_VETO';
    } else if (finalScore >= 86) {
      decision = 'STRONG_BUY';
    } else if (finalScore >= 71) {
      decision = 'MEDIUM_BUY';
    } else if (finalScore >= 51) {
      decision = 'SMALL_BUY';
    } else if (finalScore >= 31) {
      decision = 'WATCH';
    }

    return {
      coin,
      timestamp: new Date().toISOString(),
      scores: {
        sentiment: sentiment.score,
        technical: technical.score,
        onchain: onchain.score,
        fundamental: fundamental.score,
        risk: risk.score
      },
      final_score: Math.round(finalScore),
      decision,
      risk_veto: risk.veto,
      details: {
        sentiment,
        technical,
        onchain,
        fundamental,
        risk
      }
    };
  }
}

module.exports = MultiAgentSystem;
