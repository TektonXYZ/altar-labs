# API Documentation

## Endpoints

### POST /api/analyze
Analyze a Solana token across all 5 agents.

**Request:**
```json
{
  "coin": "BONK",
  "contract": "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"
}
```

**Response:**
```json
{
  "coin": "BONK",
  "timestamp": "2025-03-18T12:00:00Z",
  "scores": {
    "sentiment": 75,
    "technical": 65,
    "onchain": 70,
    "fundamental": 60,
    "risk": 55
  },
  "final_score": 65,
  "decision": "SMALL_BUY",
  "risk_veto": false
}
```

### GET /api/history
Get analysis history.

**Query Parameters:**
- `limit`: Number of results (default: 20)
- `coin`: Filter by coin symbol

### GET /api/agents/status
Check agent health and API status.

**Response:**
```json
{
  "sentiment": "online",
  "technical": "online",
  "onchain": "online",
  "fundamental": "online",
  "risk": "online"
}
```

## Rate Limits

- 60 requests per minute per endpoint
- Analyze endpoint: 10 requests per minute

## Error Codes

- `400`: Bad request
- `429`: Rate limited
- `500`: Server error
- `503`: Agent offline
