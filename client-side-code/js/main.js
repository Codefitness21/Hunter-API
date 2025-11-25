document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const waterProducts = document.querySelector('input').value
    try{
        const res = await fetch(`https://hunter-products-api-28bef2dc8c29.herokuapp.com/api/${waterProducts}`)
        const data = await res.json()

        console.log(data)
        document.querySelector('h2').innerText = data.water
        document.querySelector('h3').innerText = data.temp
    }catch(error){
        console.log(error)
    }
}