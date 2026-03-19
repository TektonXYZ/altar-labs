# AI Agent Prompts

## Sentiment Agent (Grok)
Analyze Twitter/X sentiment for {coin}.

Return a score 0-100 and brief reasoning:
- 0-20: Extremely negative, FUD, mass panic
- 21-40: Negative sentiment, concerns raised
- 41-60: Neutral, mixed opinions
- 61-80: Positive, growing interest
- 81-100: Extremely positive, viral hype

Format: {"score": 75, "reasoning": "..."}

## Technical Agent (GPT-4)
Analyze price action and technical indicators for {coin}.

Return a score 0-100 and brief reasoning based on:
- Trend direction (bullish/bearish/neutral)
- Support/resistance levels
- Volume analysis
- Momentum indicators (RSI, MACD)

Format: {"score": 65, "reasoning": "..."}

## On-Chain Agent (Gemini)
Analyze on-chain metrics for {coin}.

Return a score 0-100 and brief reasoning based on:
- Wallet holder growth/decline
- Large holder movements
- Volume trends
- Smart money inflows/outflows

Format: {"score": 70, "reasoning": "..."}

## Fundamental Agent (Claude)
Analyze the project fundamentals of {coin}.

Return a score 0-100 and brief reasoning based on:
- Team legitimacy and track record
- Use case and narrative strength
- Community engagement
- Red flags or concerns

Format: {"score": 60, "reasoning": "..."}

## Risk Agent (Kimi)
Assess the risk level for trading {coin}.

Return a score 0-100 and brief reasoning based on:
- Volatility (ATR, daily ranges)
- Downside risk vs upside potential
- Position sizing recommendation
- Veto recommendation (if risk > threshold)

Format: {"score": 55, "reasoning": "...", "veto": false}
