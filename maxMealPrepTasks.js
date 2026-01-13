function maxMealPrepTasks(tasks) {

    // Object that will hold the count of tasks possible
    // and which of the tasks that can be completed
    const possibleTasks = {
        count: 0,
        chosen: []
    }

    // Create a tracker that will compare end times of the previous task to the start time
    // of the current task
    let previousEndTime = 0;

    // Loop through the arrays in the tasks array to compare the times for each task
    // against another tasks times to check for overlap
    // If times overlap, choose the corresponding task that would come first

    for (let i = 0; i < tasks.length; ++i) {
        if (tasks[i][1] >= previousEndTime) {
            possibleTasks.count += 1;
            possibleTasks.chosen.push(tasks[i][0]);
            previousEndTime = tasks[i][2];
        }
    }

    return possibleTasks;
}


const tasks = [
    ["Make Gravy", 10, 11],
    ["Make Mashed Potatoes", 11, 12],
    ["Bake Rolls", 11, 13],
    ["Prep Salad", 12, 13]
];

console.log(maxMealPrepTasks(tasks));

