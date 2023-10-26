import { createHmac } from "crypto";

// HMAC creates a different hash when the using different key but same password/message
// Which is unlike just hashing the password where it will create the same hash if the password/message is the same

const key = 'very secret key'
const message = 'booyah'

const hmac = createHmac('sha256', key).update(message).digest('hex')

const key2 = 'another secret key'
const hmac2 = createHmac('sha256', key2).update(message).digest('hex')

console.log('hmac:', hmac);
console.log('hmac2:', hmac2);