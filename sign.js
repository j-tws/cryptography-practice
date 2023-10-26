import { createSign, createVerify } from "crypto";
import { publicKey, privateKey } from "./keypair.js";

const message = 'your soul now belongs to mine muahahaha'

// sign
const signer = createSign('rsa-sha256')

signer.update(message)

const signature = signer.sign(privateKey, 'hex')
console.log('signature:', signature)

//verify

const verifier = createVerify('rsa-sha256')

verifier.update(message)

const isVerified = verifier.verify(publicKey, signature, 'hex')
console.log('isVerified:', isVerified)