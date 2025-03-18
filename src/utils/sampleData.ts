// data/workouts.ts
import { IWorkoutPlan, Workout } from "./interfaces";

/**
 * A mock array of workouts corresponding to your image files.
 */
export const workouts: Workout[] = [
  {
    id: "w1",
    name: "Plank (30 seconds)",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/BURPEE.jpg?alt=media&token=ada9aa37-c84e-4486-a8df-3a4325f61f81",
    description:
      "Hold a plank position for 30 seconds to strengthen your core.",
    duration: 2,
  },
  {
    id: "w2",
    name: "Bicycle Crunches",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/BURPEE1.jpg?alt=media&token=071be747-ff0b-4516-ac48-a14673dc8ba9",
    description: "Engage your core by alternating elbow-to-knee crunches.",
    duration: 5,
  },
  {
    id: "w3",
    name: "Russian Twists",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/BURPEE2.jpg?alt=media&token=f2cf036b-1b8c-48dc-b319-edfd09fd8725",
    description: "Target your obliques with seated twisting motions.",
    duration: 5,
  },
  {
    id: "w4",
    name: "High Knees",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/EXPLOSIVE.jpg?alt=media&token=69719f2b-e9aa-4c4b-b2bc-97e700d48e58",
    description: "Run in place by lifting your knees as high as possible.",
    duration: 3,
  },
  {
    id: "w5",
    name: "Butt Kicks",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/EXPLOSIVE1.jpg?alt=media&token=af912a89-9119-4736-a214-3c8ffeaa90df",
    description: "Run in place, bringing your heels up toward your glutes.",
    duration: 3,
  },
  {
    id: "w6",
    name: "Side Lunges",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/EXPLOSIVE2.jpg?alt=media&token=e8a1e9a8-f917-4929-bb14-7e361d8ab96c",
    description:
      "Strengthen your legs and improve balance by lunging side-to-side.",
    duration: 4,
  },
  {
    id: "w7",
    name: "Chin Tuck",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/FORWARD.jpg?alt=media&token=fce8ebaa-24cd-4add-ae62-f57d31f87adb",
    description:
      "Gently stretch and strengthen neck muscles by tucking the chin.",
    duration: 2,
  },
  {
    id: "w8",
    name: "Chin Up",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/FORWARD1.jpg?alt=media&token=03daad3b-b2aa-4457-9b84-21928fde62d2",
    description: "Build upper body strength by pulling yourself up to the bar.",
    duration: 8,
  },
  {
    id: "w9",
    name: "Crunches",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/FORWARD2.jpg?alt=media&token=ec4fe5f2-b2a4-465a-a62b-10f9d2e04ecf",
    description: "A classic abdominal exercise to strengthen the core.",
    duration: 5,
  },
  {
    id: "w10",
    name: "Explosive Overhead Press",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/MOUNTAIN.jpg?alt=media&token=81b14e4b-6276-44c0-8253-2e425bb3d770",
    description:
      "Push weights overhead quickly for power and shoulder strength.",
    duration: 10,
  },
  {
    id: "w11",
    name: "Explosive Lower Body",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/MOUNTAIN1.jpg?alt=media&token=8e54cc31-748e-405c-b526-abdba39e6407",
    description:
      "Perform powerful squats or jumps to develop explosive leg strength.",
    duration: 10,
  },
  {
    id: "w12",
    name: "Forward Lunge",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/MOUNTAIN2.jpg?alt=media&token=8619a806-f756-4d0f-bc4f-c155e883a1d3",
    description: "Step forward into a lunge to target quads and glutes.",
    duration: 4,
  },
  {
    id: "w13",
    name: "Jump Squats",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/PLANK.jpg?alt=media&token=b99b381f-842b-440d-bfb3-85a6848d96d8",
    description: "Add a jump to squats for explosive power in your lower body.",
    duration: 6,
  },
  {
    id: "w14",
    name: "Mountain Climbers",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/PLANK1.jpg?alt=media&token=4a6416ca-4052-416c-8ce4-f239428d91b1",
    description:
      "A full-body exercise that engages core and cardio simultaneously.",
    duration: 5,
  },
  {
    id: "w15",
    name: "Mountain Climbers (Variation)",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/BURPEE1.jpg?alt=media&token=071be747-ff0b-4516-ac48-a14673dc8ba9",
    description: "A modified or more advanced version of mountain climbers.",
    duration: 5,
  },
  {
    id: "w16",
    name: "Pull Up",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/BURPEE1.jpg?alt=media&token=071be747-ff0b-4516-ac48-a14673dc8ba9",
    description: "Strengthen back and biceps by pulling your body up to a bar.",
    duration: 8,
  },
  {
    id: "w17",
    name: "Push Up",
    imageUrl: "/images/PUSHUP.jpg",
    description: "A foundational exercise for chest, shoulders, and triceps.",
    duration: 5,
  },
  {
    id: "w18",
    name: "Squat",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/BURPEE1.jpg?alt=media&token=071be747-ff0b-4516-ac48-a14673dc8ba9",
    description:
      "A fundamental lower body exercise that targets glutes and quads.",
    duration: 5,
  },
  {
    id: "w19",
    name: "Triceps Dips",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/BURPEE1.jpg?alt=media&token=071be747-ff0b-4516-ac48-a14673dc8ba9",
    description: "Work your triceps by dipping your body with arms behind you.",
    duration: 4,
  },
  {
    id: "w20",
    name: "Triceps Extensions",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/BURPEE1.jpg?alt=media&token=071be747-ff0b-4516-ac48-a14673dc8ba9",
    description: "Isolate the triceps with overhead or cable extensions.",
    duration: 4,
  },
  {
    id: "w21",
    name: "T-Scapular Push Up",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/BURPEE1.jpg?alt=media&token=071be747-ff0b-4516-ac48-a14673dc8ba9",
    description:
      "Combine a push-up with a side rotation for extra shoulder stability.",
    duration: 6,
  },
  {
    id: "w22",
    name: "T-Scapular Push Up (Variation)",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/BURPEE1.jpg?alt=media&token=071be747-ff0b-4516-ac48-a14673dc8ba9",
    description:
      "A modified version of the T-scapular push-up for more intensity.",
    duration: 6,
  },
  {
    id: "w23",
    name: "Walk-In Plank",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/BURPEE1.jpg?alt=media&token=071be747-ff0b-4516-ac48-a14673dc8ba9",
    description:
      "Start standing, walk hands out to a plank, then walk them back up.",
    duration: 5,
  },
  {
    id: "w24",
    name: "Walk-In Plank (Variation)",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/BURPEE1.jpg?alt=media&token=071be747-ff0b-4516-ac48-a14673dc8ba9",
    description:
      "A more advanced walk-in plank, adding push-ups or extra steps.",
    duration: 5,
  },
];

/**
 * A mock array of workout plans, each referencing workouts by their ID.
 */
export const workoutPlans: IWorkoutPlan[] = [
  {
    id: "p1",
    name: "Beginner Basics",
    description:
      "A gentle introduction to fitness, focusing on fundamental moves.",
    workoutIds: ["w1", "w2", "w3", "w17", "w18"],
    duration: 5,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/BURPEE1.jpg?alt=media&token=071be747-ff0b-4516-ac48-a14673dc8ba9",
  },
  {
    id: "p2",
    name: "Upper Body Strength",
    description: "Target your arms, shoulders, and chest with these moves.",
    workoutIds: ["w8", "w16", "w17", "w19", "w20", "w21", "w22"],
    duration: 5,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/BURPEE2.jpg?alt=media&token=f2cf036b-1b8c-48dc-b319-edfd09fd8725",
  },
  {
    id: "p3",
    name: "Lower Body Blast",
    description: "Strengthen and tone your legs, glutes, and lower core.",
    workoutIds: ["w4", "w5", "w6", "w12", "w13", "w18"],
    duration: 5,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/BURPEE2.jpg?alt=media&token=f2cf036b-1b8c-48dc-b319-edfd09fd8725",
  },
  {
    id: "p4",
    name: "Core & Cardio",
    description: "Burn calories while strengthening your core.",
    workoutIds: ["w1", "w2", "w3", "w9", "w14", "w15", "w23", "w24"],
    duration: 5,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/BURPEE2.jpg?alt=media&token=f2cf036b-1b8c-48dc-b319-edfd09fd8725",
  },
  {
    id: "p5",
    name: "Full Body Challenge",
    description: "A challenging plan that covers all major muscle groups.",
    workoutIds: ["w10", "w11", "w14", "w16", "w17", "w18", "w21", "w22"],
    duration: 5,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/BURPEE1.jpg?alt=media&token=071be747-ff0b-4516-ac48-a14673dc8ba9",
  },
];
