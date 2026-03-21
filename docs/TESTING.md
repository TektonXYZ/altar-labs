# Testing Strategy

## Unit Tests

Each agent should have comprehensive unit tests:

```javascript
// Example: Sentiment Agent Test
describe('SentimentAgent', () => {
  test('should return score between 0-100', async () => {
    const result = await agent.analyze('BONK');
    expect(result.score).toBeGreaterThanOrEqual(0);
    expect(result.score).toBeLessThanOrEqual(100);
  });
});
```

## Integration Tests

Test the full pipeline:
1. Input coin symbol
2. All 5 agents process
3. Coordinator aggregates
4. Final decision returned

## Load Testing

- 100 concurrent analyses
- Response time < 5 seconds
- Error rate < 1%
