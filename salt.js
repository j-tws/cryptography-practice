import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

function signup(email, password){
  // salt is a random generated string to add more 'unpredicatbility' to the hash password
  const salt = randomBytes(16).toString('hex')
  const hashedPassword = scryptSync(password, salt, 64).toString('hex')

  const user = { email, password: `${salt}:${hashedPassword}`}

  // figuratively creates registered user to an imaginary database
  users.push(user)

  return user
}

function login(email, password){
  // figuratively find a matching user via email
  const user = users.find(user => user.email === email)

  const [salt, key] = user.password.split(':')
  const hashedBuffer = scryptSync(password, salt, 64)

  const keyBuffer = Buffer.from(key, 'hex')
  const match = timingSafeEqual(hashedBuffer, keyBuffer)

  if (match){
    return 'login successful!'
  } else {
    return 'login fail!'
  }
}