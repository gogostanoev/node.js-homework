import fs from "fs";


const writeToFile = (path, data) => {
    fs.writeFileSync(path, data);
};

const appendToFile = (path, data) => {
    fs.appendFileSync(path, data);
};


const readFromFile = (path) => {
    const content = fs.readFileSync(path, { encoding: "utf-8" });

    return content
};

export const readTodos = (path) => {

    const todos = readFromFile(path);

    const parsedTodos = JSON.parse(todos);

    return parsedTodos
}


let id = 0;


export const addTodo = (path, todoName, isTodoDone) => {

    id++

    const todo = {
        id: id,
        name: todoName,
        done: isTodoDone
    }
    
    const allTodos = readTodos(path);

    allTodos.push(todo);
    console.log(allTodos);

    writeToFile(path, JSON.stringify(allTodos, null, 2))
}



export const removeTodoId = (path, todoId) => {
    const arrayTodo = readTodos(path);

    const modifiedTodo = arrayTodo.findIndex((todo) => todo.id === todoId);
    
    if(modifiedTodo !== -1){
        arrayTodo.splice(modifiedTodo, 1);
        writeToFile(path, JSON.stringify(arrayTodo, null, 2));
        console.log(`The todo item with id ${todoId} has been removed`)
    }else {
        console.log(`The todo item with id ${todoId} does not exist`)
    }
}


export const readTodoId = (path, todoId) => {
    const readArrayTodo = readTodos(path);

    const readTodo = readArrayTodo.find((todo) => todo.id === todoId);
    if(readTodo){
        console.log("The selected todo item is:", Object.values(readTodo))
    }else { 
        console.log("This todo item does not exist.")
    }
}


export const changeStatus = (path, todoId, status) => {
    const changeArrayTodo = readTodos(path);

    const statusTodo = changeArrayTodo.find((todo) => todo.id === todoId)
    if(statusTodo){
        statusTodo.done = status
        console.log(`The status of this particular todo item ${statusTodo.name} has been changed to ${statusTodo.done}`)
    }else {
        console.log(`The todo item does not exist :()`)
    }

    writeToFile(path, JSON.stringify(changeArrayTodo, null, 2))
}
