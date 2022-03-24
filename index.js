let para = document.getElementById("para");
let heading1 = document.getElementById("heading1");
let btn = document.getElementById('btn')
let adviceContent
let adviceId
let adviceHash = 'ADVICE # '
let quote = '"'
let request = new XMLHttpRequest()

function fetchData() {
    request.open('GET', 'https://api.adviceslip.com/advice', true)
    request.onload = function() {
        let data = JSON.parse(request.responseText)
        adviceContent = data.slip.advice;
        adviceId = data.slip.id;
        // console.log(data.slip)

    }
    request.send()
}
btn.addEventListener('click', (e) => {
    fetchData()
        // console.log(adviceContent)
    para.innerText = quote + adviceContent + quote
    heading1.innerText = adviceHash + adviceId

})