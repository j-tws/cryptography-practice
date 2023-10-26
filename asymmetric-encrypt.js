import { publicEncrypt, privateDecrypt } from "crypto";
import { publicKey, privateKey } from "./keypair.js";

const message = 'i like fried eggs alot'

// drop in the mailbox
const encryptedData = publicEncrypt(
  publicKey,
  Buffer.from(message)
)

console.log('encryptedData:', encryptedData.toString('hex'))

// receipient collects the data from mailbox by using privatekey to 'unlock' /decrypt
const decryptedData = privateDecrypt(
  privateKey,
  encryptedData
)

console.log('decryptedData:', decryptedData.toString('utf-8'))