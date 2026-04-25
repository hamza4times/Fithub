import { runAI } from '../ai.js';

let mealPlan;
let workoutPlan;

let submitBTN = document.querySelector('#submit');

let isLoading = false;

submitBTN.addEventListener('click', async () => {
    if (isLoading) return; // block spam clicks

    isLoading = true;
    submitBTN.disabled = true;

    try {
        let weight = "101";
        let height = "101";

        mealPlan = await runAI("Weight: " + weight + " Height: " + height + " Create a meal plan");
        workoutPlan = await runAI("Weight: " + weight + " Height: " + height + " Create a workout plan");
        
    sessionStorage.setItem("mealPlan", mealPlan);
    sessionStorage.setItem("workoutPlan", workoutPlan);

        window.location.href = '../dashboard/dashboard.html';
        createDashboard(workoutPlan, mealPlan);
        
    } catch (err) {
        console.error(err);
    }

    isLoading = false;
    submitBTN.disabled = false;
});


