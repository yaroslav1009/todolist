let input = document.querySelector('#input');
let remove = document.querySelector('#remove');
let add = document.querySelector('#add');
let list = document.querySelector('#list');
let total = document.querySelector('#total')
let i = 0;

add.addEventListener('click', (e) => {
    if(input.value === '')return
    createDeleteElements(input.value)
    input.value = '';
})
//----create-and-delete-todolist-----
function createDeleteElements(value){
    const li = document.createElement('li');
    const btn = document.createElement('button');
    const p = document.createElement('p');
    i++
    
    p.textContent = value;
    btn.className = 'remove'
    btn.textContent = 'Remove'
    li.appendChild(p);
    li.appendChild(btn);
    //----remove-todolist---
    btn.addEventListener('click', (e) =>{
        li.remove()
        i--
        total.textContent = i;
    })
    //---toggle-class-active
    li.addEventListener('click', (e) => {
        p.classList.toggle('p-active');
        li.classList.toggle('li-active');
    })

    total.textContent = i;
    list.className = 'mb-3'
    list.appendChild(li);
}