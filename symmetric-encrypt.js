import { createCipheriv, randomBytes, createDecipheriv } from "crypto";
// iv stands for 'initialization vector'

// make the cipher
const message = 'i like turtles'
const key = randomBytes(32)
const iv = randomBytes(16)

// iv is provided so that a different encryptedmessage is created everytime even tho it is using the same message
const cipher = createCipheriv('aes256', key, iv)

// Encrypt the cipher
const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex')
console.log('encryptedMessage:', encryptedMessage)

// Decrypt the encrypted message
// pass the same key and vector in the createDecipheriv method
const decipher = createDecipheriv('aes256', key, iv)
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf8') + decipher.final('utf8')

console.log('decryptedMessage:', decryptedMessage)