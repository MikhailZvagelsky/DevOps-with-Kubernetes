import { nanoid } from 'nanoid'

const randomString = nanoid(24)

const print = () => {
  const now = new Date().toISOString()
  console.log(`${now}: ${randomString}`)
}

setInterval(print, 5000)
