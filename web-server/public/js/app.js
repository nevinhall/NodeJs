console.log('client side js is loaded')


const weatherFrom = document.querySelector('form')
const searchElement = document.querySelector('input')
const messsage1 = document.querySelector('#message-1')
const messsage2 = document.querySelector('#message-2')




weatherFrom.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = searchElement.value

    messsage1.textContent = 'loading...'
    messsage2.textContent = ' '

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return messsage1.textContent = data.error
            }
            messsage1.textContent = data.location
            messsage2.textContent = data.forecast
        })


    })
})