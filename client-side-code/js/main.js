document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://kelly-hill.d1wmevh37vf11g.amplifyapp.com/api/${waterProducts}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.water
        document.querySelector('h2').innerText = data.temp
    }catch(error){
        console.log(error)
    }
}