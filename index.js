async function returnPrim () {
   primitive  = [false, true, 'string', 12, BigInt(234234234234)]
  return await primitive
}

async function test () {
  return await returnPrim()
}

const p1 = test().then(console.log)


function test2 () {
  return p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(100)
    }, 1000)
  })
}

test2().then(console.log)
