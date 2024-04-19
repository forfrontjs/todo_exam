let arr = []

let inp = document.querySelector('.inp')
let btn = document.querySelector('.btn')
let task = document.querySelector('.task')
let time = new Date()
let hour = `${time.getHours()}:${time.getMinutes()}`
let date = `${time.getDate()}`
let month = `${time.getMonth() + 1 < 10?`0${time.getMonth() + 1}`:time.getMonth() + 1}`
let year = `${time.getFullYear()}`


let show = ()=>{
    task.innerHTML = ''
    arr.forEach((el)=>{
        task.innerHTML += `
        <div class="todo">
            <li>${el.title}</li>
            <p>${hour}    ${date}.${month}.${year}</p>
        </div>
        `
    })
}


btn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(inp.value.trim() === '' || /^\d/.test(inp.value)){
        return alert('Введите корректное задание')
    }
    arr = [...arr, {id: arr.length +1, title: inp.value,}]
    inp.value = ''
    show()
})
show()

