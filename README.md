# Seed Phrase Brute Force

Fill in missing seed phrase words via brute-force search.

## Usage

Store your seed phrase as an environment variable, with missing words represented as `"x"`:

```bash
# first word of seed phrase is missing
export SEED_PHRASE="x test test test test test test test test test test"
```

Store the address of the first account associated with the seed phrase as an environment variable:

```bash
export TARGET="0xf39Fd6e51aad88F6F4ce6aB88272"
```

Run the script with Node:
```bash
node index.js
```
