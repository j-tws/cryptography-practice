import { generateKeyPairSync } from "crypto";

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048, // the length of your key in bits
  publicKeyEncoding: {
    type: 'spki', // recoomended to be 'spki' from the nodejs docs
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8', // recommended to be 'pkcs8' by the nodejs docs
    format: 'pem',
    // cipher: 'aes-256-cbc',
    // passphrase: 'top secret',
  }
})

console.log(publicKey)
console.log(privateKey)

export { publicKey, privateKey }