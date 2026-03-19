# 🤖 Solana AI Trader

> **5 Specialist Agents. One Mission. Find Alpha.**

A multi-agent AI trading system focused on Solana ecosystem tokens. Five specialized AI agents analyze every opportunity from different angles, combining into a unified trading signal.

---

## 🧠 The 5 Agents

| Agent | AI Service | Specialty | Weight |
|-------|-----------|-----------|--------|
| **Sentiment Agent** | Grok | Twitter/X hype & social sentiment | 20% |
| **Technical Agent** | OpenAI GPT-4 | Charts, trends & entry timing | 20% |
| **On-Chain Agent** | Google Gemini | Wallet flows & smart money tracking | 20% |
| **Fundamental Agent** | Anthropic Claude | Project analysis & narrative evaluation | 20% |
| **Risk Agent** | Moonshot/Kimi | Risk assessment & position sizing (veto power) | 20% |

---

## 🎯 How It Works

### 1. Coin Selection
A Solana token is selected for analysis

### 2. Parallel Analysis
Each agent runs independently with specialized prompts:
- **Sentiment** → Scans Twitter/X for hype, mentions, influencer activity
- **Technical** → Analyzes price action, momentum, support/resistance
- **On-Chain** → Tracks wallet movements, volume spikes, holder concentration
- **Fundamental** → Evaluates project legitimacy, team, narrative strength
- **Risk** → Calculates volatility, downside scenarios, optimal position size

### 3. Scoring (0-100)
Each agent returns a normalized score:
- 0-20: Strong avoid
- 21-40: Weak / High risk
- 41-60: Neutral / Watch
- 61-80: Moderate buy
- 81-100: Strong buy

### 4. Weighted Aggregation
```
Final Score = (Sentiment × 0.20) + (Technical × 0.20) + (OnChain × 0.20) + 
              (Fundamental × 0.20) + (Risk × 0.20)
```

### 5. Risk Veto
Risk Agent can override the final decision if:
- Volatility exceeds thresholds
- Downside risk is unacceptable
- Position sizing would be too large

### 6. Trade Decision
| Final Score | Action |
|-------------|--------|
| 0-30 | Ignore |
| 31-50 | Watch / Research more |
| 51-70 | Small buy (test position) |
| 71-85 | Medium buy |
| 86-100 | Strong buy |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (React)                         │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐              │
│  │  Dashboard │ │  Analysis  │ │  History   │              │
│  │   View     │ │   Results  │ │    Logs    │              │
│  └────────────┘ └────────────┘ └────────────┘              │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   Backend (Node.js/Express)                 │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐              │
│  │   API      │ │  Database  │ │  Queue     │              │
│  │  Routes    │ │ (PostgreSQL)│ │  System    │              │
│  └────────────┘ └────────────┘ └────────────┘              │
└────────────────────────┬────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│  Grok API    │ │  GPT-4 API   │ │  Gemini API  │
│  (Sentiment) │ │  (Technical) │ │  (On-Chain)  │
└──────────────┘ └──────────────┘ └──────────────┘
        │                │                │
        └────────────────┼────────────────┘
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Claude API   │ │   Kimi API   │ │  Data        │
│(Fundamental) │ │    (Risk)    │ │  Sources     │
└──────────────┘ └──────────────┘ └──────────────┘
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- API keys for: Grok, OpenAI, Gemini, Anthropic, Moonshot

### Installation
```bash
git clone https://github.com/TektonXYZ/solana-ai-trader.git
cd solana-ai-trader

# Backend
npm install
cp .env.example .env
# Add your API keys to .env

# Frontend
cd frontend && npm install
```

### Environment Setup
Create `.env` in root directory:
```
# AI Service API Keys (required)
GROK_API_KEY=your_grok_key
OPENAI_API_KEY=your_openai_key
GEMINI_API_KEY=your_gemini_key
ANTHROPIC_API_KEY=your_anthropic_key
MOONSHOT_API_KEY=your_moonshot_key

# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/solanatrader

# Solana
SOLANA_RPC_URL=https://api.devnet.solana.com
```

### Running Locally
```bash
# Terminal 1: Backend
npm run dev

# Terminal 2: Frontend
cd frontend && npm start

# Open http://localhost:3000
```

---

## 📊 Frontend Features

- **Dashboard**: Real-time agent scores, final decision, coin details
- **Analysis View**: Breakdown of each agent's reasoning
- **History**: Past analyses, performance tracking
- **Manual Override**: Human can override AI decisions (logged)

---

## ⚠️ Important Disclaimers

**This is experimental software.** 
- Start with paper trading
- Never risk more than you can afford to lose
- AI predictions are not financial advice
- Always do your own research

**Execution**: Initially manual trades. Automation requires strict safeguards and human oversight.

---

## 🛣️ Roadmap

### Phase 1: MVP (Current)
- [x] Architecture design
- [ ] 5-agent implementation
- [ ] Frontend dashboard
- [ ] Manual trade execution

### Phase 2: Data Integration
- [ ] Twitter/X API for Sentiment Agent
- [ ] Birdeye/DexScreener for Technical Agent
- [ ] Helius for On-Chain Agent
- [ ] Gitbook/Websites for Fundamental Agent

### Phase 3: Automation (With Safeguards)
- [ ] Paper trading mode
- [ ] Position sizing limits
- [ ] Daily loss limits
- [ ] Human approval for large trades

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 📄 License

MIT License - see [LICENSE](LICENSE)

---

**Built by Tekton** | **Powered by 5 AI Services** | **Solana Ecosystem**
