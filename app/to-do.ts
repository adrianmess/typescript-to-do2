class Task {
  done: boolean = false;

  constructor ( public Description: string, public Priority: string) {}
}

let tasks: Task[] = [];
tasks.push(new Task ('Laundry', 'Warning'));
tasks.push(new Task ('Groceries', 'Low'));
tasks.push(new Task ('Drive-Fast', 'High'));

for (var index of tasks){
  console.log(index);
}
