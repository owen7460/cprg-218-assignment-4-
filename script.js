fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
  .then(response => response.json())
  .then(data => {
    // console.log(data)
    // randomjoke = document.getElementById('content')
    content.innerHTML = `${data.setup ? data.setup + `...` + data.delivery : data.joke}`
  })


Programming.addEventListener("click", () => {
  fetch("https://v2.jokeapi.dev/joke/Coding")
    .then(response => response.json())
    .then(data => {
      joke.innerHTML = `A Random Programming Joke`
      content.innerHTML = `${data.setup ? data.setup + `...` + data.delivery : data.joke}`
    })
})

Misc.addEventListener("click", () => {
  fetch("https://v2.jokeapi.dev/joke/Misc")
    .then(response => response.json())
    .then(data => {
      joke.innerHTML = `A Random Miscellaneous Joke`
      content.innerHTML = `${data.setup ? data.setup + `...` + data.delivery : data.joke}`
    })
})

Pun.addEventListener("click", () => {
  fetch("https://v2.jokeapi.dev/joke/Pun")
    .then(response => response.json())
    .then(data => {
      joke.innerHTML = `A Random Pun`
      content.innerHTML = `${data.setup ? data.setup + `...` + data.delivery : data.joke}`
    })
})

Spooky.addEventListener("click", () => {
  fetch("https://v2.jokeapi.dev/joke/Spooky")
    .then(response => response.json())
    .then(data => {
      content.innerHTML = `${data.setup ? data.setup + `...` + data.delivery : data.joke}`
      joke.innerHTML = `A Random Spooky Joke`
    })
})

Christmas.addEventListener("click", () => {
  fetch("https://v2.jokeapi.dev/joke/Christmas")
    .then(response => response.json())
    .then(data => {
      content.innerHTML = `${data.setup ? data.setup + `...` + data.delivery : data.joke}`
      joke.innerHTML = `A Random Christmas Joke`
    })
})