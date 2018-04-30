var Task = (function () {
    function Task(Description, Priority) {
        this.Description = Description;
        this.Priority = Priority;
        this.done = false;
    }
    return Task;
}());
var tasks = [];
tasks.push(new Task('Laundry', 'Warning'));
tasks.push(new Task('Groceries', 'Low'));
tasks.push(new Task('Drive-Fast', 'High'));
for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
    var index = tasks_1[_i];
    console.log(index);
}
