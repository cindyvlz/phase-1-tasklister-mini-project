document.addEventListener("DOMContentLoaded", () => {
   document.querySelector('form').addEventListener('Create New Task', (e) => {
    e.preventDefault()
    FixToDo(e.target.new-task-description.value)
   })
});

function FixToDo(todo){
  let p = document.createElement('p')
  p.textContent = todo
  document.querySelector('#tasks').appendChild(p)
}