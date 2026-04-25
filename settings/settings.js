import {runAI} from '../dashboard/dashboard.js';

let submitBTN = document.querySelector('#submit');

let isLoading = false;

submitBTN.addEventListener('click', async () => {
    if (isLoading) return; // block spam clicks

    isLoading = true;
    submitBTN.disabled = true;

    try {
        let weight = "101";
        let height = "101";

        let mealPlan = await runAI("Weight: " + weight + " Height: " + height + " Create a meal plan");
        let workoutPlan = await runAI("Weight: " + weight + " Height: " + height + " Create a workout plan");

        console.log(mealPlan);
        console.log(workoutPlan);

    } catch (err) {
        console.error(err);
    }

    isLoading = false;
    submitBTN.disabled = false;
});
