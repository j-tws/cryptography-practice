import { createHash } from "crypto";

function hash(input){
  // Creates and returns a Hash object that can be used to generate hash digests 
  // using the given algorithm. Optional options argument controls stream behavior. 
  // For XOF hash functions such as 'shake256', the outputLength option can be used to specify the desired output length in bytes.

  return createHash('sha256').update(input).digest('hex')
}

const password1 = 'chicken'
const hashedPassword1 = hash(password1)

const password2 = 'chicken!!'
const hashedPassword2 = hash(password2)

console.log('hashedPassword1:', hashedPassword1)
console.log('hashedPassword2:', hashedPassword2)

const match = hashedPassword1 === hashedPassword2
console.log(match ? '✅' : '❌');
