let getstartedbtn = document.querySelector('#get-started-btn');
getstartedbtn.addEventListener('click' ,() => {
    window.location.href = './Login-and-Signup/login_and_signup.html';
});


/*
Weight: 

Height:

Preference: (Drop Down Menu Choose One)
1. Stamina
 - Stairmaster
 - Cycling
 - Swimming
 - Elliptical
 - Running
2. Flexibility
 - Calf Stretch
 - Lunge
 - Hip Circles
 - Cat-Cow Stretch
 - Back Bridges
3. General Fitness
 - Stairmaster
 - Cat-Cow Stretch
 - Bench Press
 - Bicep Curls
 - Squats
4. Strength
 - Bench Press
 - Squats
 - Deadlifts
 - Overhead Press
 - Weighted Pullups
5. Volume
 - Bicep Curls
 - Tricep Rope Pushdown
 - Leg Extension
 - Hamstring Curls
 - Lateral Raises

  Time - 15, 30, 45, 60 minutes


Enter Button

Weight:
Small: 0 <= x <= 110
Medium: 110 <= x <= 160
High: 160 <= x <= 500

Height:
Short: 0 <= x <= 5 ft
Medium: 5 <= x <= 5'8
Tall: 5'8 <= x <= 7

Feel free to combine both workouts as needed

Small weight, short height
Stamina
1. Stairmaster - 15 min
2. Cycling - 15 min

Strength
1. Bench Press - 15 min
2. Squat - 15 min

Volume
1. Bicep Curl - 15 min
2. Leg Extension - 15 min

Flexibilty
1. Lunge - 15 min
2. Cat Cow stretch - 15 min

General Fitness
1. Stairmaster - 15 min
2. Bench Press - 15 min

Small Weight, Medium Height
Stamina 
1. Elliptical - 15 min
2. Stairmaster - 15 min
3. Cycling - 15 min

Strength
1. Bench Press - 15 min
2. Squat - 15 min
3. Weighted Press - 15 min

Volume
1. Bicep Curl - 15 min
2. Leg Extension - 15 min
3. Lateral Raises - 15 min

Flexibilty
1. Lunge - 15 min
2. Cat Cow stretch - 15 min
3. Hip Circles - 15 min
4. Back Bridges

General Fitness
1. Stairmaster - 15 min
2. Bench Press - 15 min
3. Bicep Curls - 15 min

Small weight, tall height
Stamina 
1. Elliptical - 15 min
2. Stairmaster - 15 min
3. Cycling - 15 min
4. Running - 15 min

Strength
1. Bench Press - 15 min
2. Squat - 15 min
3. Weighted Press - 15 min
4. Deadlifts - 15 min

Volume
1. Bicep Curl - 15 min
2. Leg Extension - 15 min
3. Lateral Raises - 15 min
4. Tricep Rope Pushdown

Flexibilty
1. Lunge - 15 min
2. Cat Cow stretch - 15 min
3. Hip Circles - 15 min
4. Calf Stretch - 15 min

General Fitness
1. Stairmaster - 15 min
2. Bench Press - 15 min
3. Bicep Curls - 15 min
4. Cat Cow Stretch - 15 min

Medium weight, small height

Stamina
1. Swimming - 15 min
2. Running - 15 min

Flexibility
1. Lunge - 15 min
2. Back Bridges - 15 min

General Fitness
1. Bicep Curls - 15 min
2. Squats - 15 min

Strength
1. Deadlift - 15 min
2. Squats - 15 min

Volume
1. Leg Extension - 15 min
2. Bicep Curls - 15 min

Medium weight, medium height

Stamina
1. Swimming - 15 min
2. Running - 15 min
3. Cycling - 15 min

Flexibility
1. Lunge - 15 min
2. Back Bridges - 15 min
3. Cat Cow Stretch - 15 min

General Fitness
1. Bicep Curls - 15 min
2. Squats - 15 min
3. Running - 15 min

Strength
1. Deadlift - 15 min
2. Squats - 15 min
3. Bench Press - 15 min

Volume
1. Leg Extension - 15 min
2. Bicep Curls - 15 min
3. Lateral Raises - 15 min

Medium weight, large height

Stamina
1. Swimming - 15 min
2. Running - 15 min
3. Cycling - 15 min
4. Elliptical - 15 min

Flexibility
1. Lunge - 15 min
2. Back Bridges - 15 min
3. Cat Cow Stretch - 15 min
4. Hip Circles

General Fitness
1. Bicep Curls - 15 min
2. Squats - 15 min
3. Running - 15 min
4. Bench Press - 15 min

Strength
1. Deadlift - 15 min
2. Squats - 15 min
3. Bench Press - 15 min
4. Overhead Press - 15 min

Volume
1. Leg Extension - 15 min
2. Bicep Curls - 15 min
3. Lateral Raises - 15 min
4. Tricep Rope Pushdown - 15 min

Large weight, small height

Stamina
1. Elliptical - 15 min
2. Running - 15 min

Flexibility
1. Cat Cow Stretch - 15 min
2. Lunge - 15 min

General Fitness
1. Squats - 15 min
2. Running - 15 min

Strength
1. Squats - 15 min
2. Bench Press - 15 min

Volume
1. Lateral Raises - 15 min
2. Bicep Curls - 15 min

Large weight, medium height

Stamina
1. Elliptical - 15 min
2. Running - 15 min
3. Cycling - 15 min

Flexibility
1. Cat Cow Stretch - 15 min
2. Lunge - 15 min
3. Hip Circles - 15 min

General Fitness
1. Squats - 15 min
2. Running - 15 min
3. Hip Circles - 15 min

Strength
1. Squats - 15 min
2. Bench Press - 15 min
3. Deadlifts - 15 min

Volume
1. Lateral Raises - 15 min
2. Bicep Curls - 15 min
3. Tricep Rope Pushdown - 15 min

Large weight, large height

Stamina
1. Elliptical - 15 min
2. Running - 15 min
3. Cycling - 15 min
4. Swimming - 15 min

Flexibility
1. Cat Cow Stretch - 15 min
2. Lunge - 15 min
3. Hip Circles - 15 min
4. Back Bridges - 15 min

General Fitness
1. Squats - 15 min
2. Running - 15 min
3. Hip Circles - 15 min
4. Bench Press - 15 min

Strength
1. Squats - 15 min
2. Bench Press - 15 min
3. Deadlifts - 15 min
4. Overhead Press - 15 min

Volume
1. Lateral Raises - 15 min
2. Bicep Curls - 15 min
3. Tricep Rope Pushdown - 15 min
4. Hamstring Curls - 15 min

💪 Protein Intake Matrix (9 Categories)
🔹 Small Weight (120–140 lbs)
Small Weight + Short Height

👉 80–95g protein/day

Lower total mass → lower requirement
Small Weight + Medium Height

👉 90–105g protein/day

Small Weight + Tall Height

👉 100–115g protein/day

Taller frame → bump protein slightly
🔹 Medium Weight (150–180 lbs)
Medium Weight + Short Height

👉 110–130g protein/day

Medium Weight + Medium Height

👉 120–150g protein/day

This is the “standard” fitness range
Medium Weight + Tall Height

👉 130–165g protein/day

🔹 Heavy Weight (190–230+ lbs)
Heavy Weight + Short Height

👉 140–170g protein/day

Heavy Weight + Medium Height

👉 150–190g protein/day

Heavy Weight + Tall Height

👉 170–220g protein/day

Highest muscle potential → highest intake

""

*/