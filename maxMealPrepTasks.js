function maxMealPrepTasks(tasks) {

    // Object that will hold the count of tasks possible
    // and which of the tasks that can be completed
    const possibleTasks = {
        count: 0,
        chosen: []
    }

    // Loop through the arrays in the tasks array to compare the times for each task
    // against another tasks times to check for overlap
    // If times overlap, choose the corresponding task that would come first
    for (let i = 0; i < tasks.length; ++i) {
        for (let j = 1; j < tasks.length; ++j) {
        }
    }
}


const tasks = [
    ["Make Gravy", 10, 11],
    ["Make Mashed Potatoes", 11, 12],
    ["Bake Rolls", 11, 13],
    ["Prep Salad", 12, 13]
];