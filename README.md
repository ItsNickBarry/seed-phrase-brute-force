# Seed Phrase Brute Force

Fill in missing seed phrase words via brute-force search.

> Note: currently only supports a search for the last two words of a seed phrase, due to a specific use case.  Functionality may be expanded upon request.

## Usage

Pass in the partial seed phrase and target address as environment variables:

```javascript
SEED_PHRASE="test test test test test test test test test test" TARGET="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" node index.js
