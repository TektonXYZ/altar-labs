# Solana AI Trader

## Project Structure

```
solana-ai-trader/
├── agents/              # Agent implementations
│   ├── sentiment.js     # Grok-powered sentiment analysis
│   ├── technical.js     # GPT-4-powered technical analysis
│   ├── onchain.js       # Gemini-powered on-chain analysis
│   ├── fundamental.js   # Claude-powered fundamental analysis
│   └── risk.js          # Kimi-powered risk assessment
├── backend/             # Node.js Express API
│   ├── routes/          # API routes
│   ├── models/          # Database models
│   ├── services/        # Business logic
│   └── index.js         # Server entry point
├── frontend/            # React dashboard
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Dashboard pages
│   │   └── App.js       # Main app
│   └── package.json
├── config/              # Configuration files
│   ├── prompts.md       # Agent prompts
│   └── weights.json     # Scoring weights
├── docs/                # Documentation
│   ├── API.md           # API documentation
│   └── ARCHITECTURE.md  # System architecture
├── .env.example         # Environment template
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Agent Weights

All 5 agents have equal weight (20% each):
- Sentiment: 20%
- Technical: 20%
- On-Chain: 20%
- Fundamental: 20%
- Risk: 20% (with veto power)

## Scoring Formula

```
Final Score = (
  sentiment_score * 0.20 +
  technical_score * 0.20 +
  onchain_score * 0.20 +
  fundamental_score * 0.20 +
  risk_score * 0.20
)
```

## Risk Veto Threshold

Risk Agent can veto if:
- Risk score < 30 (high risk)
- Volatility > 20% (daily)
- Recommended position size < $10
