const todoList = [
    {
      title: "Visit my Uncle",
      category: { 
        type: "relative", priority: "high"
      },
      completion: false
    },
    {
      title: "Attend Online Lecture",
      category: {
        type: "school",
        priority: "medium"
      },
      completion: false
    },
    {
      title: "Going to church",
      category: {
        type: "believes",
        priority: "medium"
      },
      completion: false
    }
  ];
  
  
  // add new task in todolist
  
  function addNewToDo(title, categoryType, categoryPriority){
    const newTodo = {
      title,
      category: {
        type: categoryType,
        priority: categoryPriority
      },
      completion: false
    }
    todoList.push(newTodo)
  };
  //display all todolist by categories:

  function displayByCategories()
  {
      const allCategories = [...new Set(todoList.map(todo => todo.category.type))];
      const tasksInCategory = allCategories.map(cat => todoList.filter(todo => todo.category.type === cat).map(todo => todo.title));
  
      allCategories.forEach((category, index) => {
          console.log(`\nAll Todos: (${category}):`);
          tasksInCategory[index].forEach(task => console.log(task));
          console.log("\n=============\n");
      });
  };
  // mark task as completed
  function markAsCompleted(givenTitle){
      for(let j=0; j<=todoList.length-1;  j++){
        if(todoList[j].title === givenTitle)
        {
          todoList[j].completion = true;
          break;
        }
      }
  };
  
  // delete a task in todolist
  function deleteToDo(givenTitle){
      for(let j=0; j<=todoList.length-1;  j++){
        if(todoList[j].title === givenTitle)
        {
          todoList.splice(j, 1);
          break;
        }
      }
  };








































  
  
  
  
  addNewToDo("Attend Class 2", "school", "low");
  addNewToDo("Visit Students", "school", "low");
  addNewToDo("Visited my God Mather", "believes", "high");
  
  markAsCompleted("Attend Online Lecture");

  //deleteToDo("Attend Online Lecture");
  displayByCategories(); 
   console.log(todoList);
  
  
  
  
  