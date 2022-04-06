//promise pratice
/*
let p = new Promise((resolve, reject) => {
    let a = 1 + 2
    if (a == 2)
        resolve('Success')
    else
        reject('Failed')
})

p.then((message => {
    console.log(`This is in the then ${message}`)
})).catch((message) => {
    console.log(`This is in the then ${message}`)
})*/

//console.log(fetch('https://jsonplaceholder.typicode.com/users'))




fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => showFunction(data.results))
    .catch(error => showErrorFunction(error))

    let showingUl = document.querySelector('#dataList')
function showFunction(data) {
    console.log(data)
   
    data.forEach(element => {
        //const nameElement = document.createElement('td')
        if (element.dob.age >= 55) {
            showingUl.innerHTML += `
            <td></td>
            <td>${element.name.first}</td> 
            <td>${element.name.last}</td>   
            <td>${element.dob.age}</td> 
            <td>${element.nat}</td>`
        } else
            console.log("yok")

    });
}


function showErrorFunction(error) {
    console.log(error + " hata oldu")
    showingUl.innerHTML += `
            <td></td>
            <td>bulunamadi</td> 
            <td>bulunamadi</td>   
            <td>bulunamadi</td> 
            <td>bulunamadi</td>`
}