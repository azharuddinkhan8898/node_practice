const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){
        const incompleteTast = this.tasks.filter((task) =>{
            return !task.completed;
        })
        return incompleteTast
    }
}

console.log(tasks.getTasksToDo())