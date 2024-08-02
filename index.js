const { Wallet, getAddress } = require('ethers');
const fs = require('fs');

const words = String(fs.readFileSync('./english.txt')).split('\n');

const phrase = process.env.SEED_PHRASE;
const target = getAddress(process.env.TARGET);

console.log(words);

//ethers.Wallet.fromPhrase

for (let i = 0; i < words.length; i++) {
  console.log(i);
  const fullPhrase = `${ phrase } ${ words[i] }`;

  let address;

  try {
    ({ address } = Wallet.fromPhrase(fullPhrase));
  } catch (e) {
    // probably invalid checksum
    continue;
  }

  if (Wallet.fromPhrase(fullPhrase).address === target) {
    console.log(fullPhrase);
    process.exit(0);
  }
}
