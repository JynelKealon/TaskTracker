var http = new XMLHttpRequest();
http.open('GET', 'tasks.json', true);
http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let response = JSON.parse(this.responseText);

        let tasks = response.tasks;
        let output = "";

        for(let task of tasks){
            output += 
            `
            <div class="tasks">
            <ul id="taskList" class="checked" class="close">
            <li>${task.title}</li>
            </ul>
            </div>`
        ;
        }
        var taskContainer = document.getElementById("tasks");
    taskContainer.innerHTML = output;
  }
};
    
