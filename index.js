const { Wallet, getAddress } = require('ethers');
const fs = require('fs');

const words = String(fs.readFileSync('./english.txt')).split('\n');
const placeholder = /\bx\b/;

const phrase = process.env.SEED_PHRASE;
const target = getAddress(process.env.TARGET);

if (phrase.split(' ').length !== 12) {
  throw new Error('incorrect seed phrase length');
}

const count = phrase.split(' ').reduce((acc, el) => acc + (el.match(placeholder) ? 1 : 0), 0);

for (let i = 0n; i < BigInt(words.length) ** BigInt(count); i++) {
  let testPhrase = phrase;

  for (let j = 0; j < count; j++) {
    const index = i / (BigInt(words.length) ** BigInt(j)) % BigInt(words.length);
    testPhrase = testPhrase.replace(placeholder, words[index]);
  }

  let address;

  try {
    ({ address } = Wallet.fromPhrase(testPhrase));
  } catch (e) {
    // probably invalid checksum
    continue;
  }

  if (address === target) {
    console.log(testPhrase);
    process.exit(0);
  }
}

throw new Error('matching seed not found');
