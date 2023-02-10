let myArray: number[] = [];
let task: string;

function addTask(task):number {
    myArray.push(task);
    console.log(task + " Inserted");
    return myArray.length;
}
function listAllTasks(): void{
    for (let i = 0; i < myArray.length; i++)
    {
        console.log(myArray[i]);
    }
}
function deleteTask(task): number{
    myArray.splice(myArray.indexOf(task), 1);
    console.log("Index deleted");
    console.log(myArray.length);
    return myArray.length;
}

addTask("Task 1");
addTask("Task 2");
addTask("Task 3");
listAllTasks();
deleteTask("Task 3");