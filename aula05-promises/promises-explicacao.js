const retornaPromessa = param => {
  return new Promise((resolve, reject) => {
    if (typeof param !== 'number') {
      reject("Deu ruim")
    } else {
      if (param % 2 === 0) {
        setTimeout(() => {
          resolve("é par")
        }, 2000)
      } else {
        setTimeout(() => {
          resolve("impar")
        }, 1000)
      }
    }
  })
}

function job(data) {
  retornaPromessa(data)
    .then(resposta => console.log({ resposta }))
    .catch(erro => console.log({ erro }))
}