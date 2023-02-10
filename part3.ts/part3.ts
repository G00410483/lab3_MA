interface myInterface {
    Tasks:Array<string>;
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;
}
class MyClass implements myInterface {
    constructor(){}
    Tasks:Array<string> = [];

    addTask(task:string):number{
        this.Tasks.push(task);
        console.log("Task " + task + " add to the list.");
        return this.Tasks.length;

    }
    listAllTasks(): void{
        for (let i = 0; i < myArray.length; i++)
        {
            console.log(myArray[i]);
        }
    }
    deleteTask(task): number{
        myArray.splice(myArray.indexOf(task), 1);
        console.log("Index deleted");
        console.log(myArray.length);
        return myArray.length;
    }
}