// API request, fetch, and data display
document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const quote = document.querySelector('input').value
    try{
        const response = await fetch(`https://for-blossom-api.herokuapp.com/api/${quote}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h4').innerText = data.quote
    }catch(error){
        console.log(error)
    }

    const author = document.querySelector('input').value
    try{
        const response = await fetch(`https://for-blossom-api.herokuapp.com/api/${author}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h5').innerText = data.author
    }catch(error){
        console.log(error)
    }

    const work = document.querySelector('input').value
    try{
        const response = await fetch(`https://for-blossom-api.herokuapp.com/api/${work}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h6').innerText = data.work
    }catch(error){
        console.log(error)
    }
}