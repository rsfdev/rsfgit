const ul = document.getElementById('users')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data)

    return data.map((user) => {
      const li = document.createElement('li');
      li.innerHTML = `${user.name} ${user.username}`
      ul.appendChild(li)
    })
  })
  .catch((error) => {
    console.log('Error!!!' + error)
  })
test
  // Promise.all([promise1, promise2, promise3]) - return all promises
  // Promise.race([promise1, promise2, promise3]) - return the first one found
