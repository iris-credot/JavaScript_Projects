const taskScheduler = [
    {
    title : "see mum",
    description : "Need to visit mum", 
    dueDate : "2024-03-05", 
    },
    {
        title : "public meeting",
        description : "meeting of the application", 
        dueDate : "2024-02-05" , 
        },
        {
            title : "make phone call",
            description : "Need to call the secretary for introduction", 
            dueDate :"2024-02-05" , 
            },
];
function getTaskScheduler (title, description, dueDate){
  const newSchedule ={
title,
description,
dueDate,
  }
  taskScheduler.push(newSchedule); 
};
function displayByDueDate (){
    const allSchedules = [...new Set(taskScheduler.map(todo => todo.dueDate))];
    const tasksInScheduler = allSchedules.map(cat => taskScheduler.filter(todo => todo.dueDate === cat).map(todo => todo.title));

    allSchedules.forEach((dueDate, index) => {
        console.log(`\nAll Todos By Date: (${dueDate}):`);
        tasksInScheduler[index].forEach(task => console.log(task));
        console.log("\n=============\n");
    });
};



function markAsCompleted(givenTitle){
    for(let j=0; j<=taskScheduler.length-1;  j++){
      if(taskScheduler[j].title === givenTitle)
      {
        taskScheduler[j].dueDate = "Completed";
        break;
      }
    }
};

function deleteTask(givenTitle){
    for(let j=0; j<=taskScheduler.length-1;  j++){
      if(taskScheduler[j].title === givenTitle)
      {
        taskScheduler.splice(j, 1);
        break;
      }
    }
};
//getTaskScheduler('medical treatment', 'need to go for eye treatment', '2024-05-09'); 
//markAsCompleted('medical treatment');
//deleteTask('public meeting');
displayByDueDate();
 //console.log(taskScheduler);