import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

// Under tasks' object each number represents one the tasks columns (cards)
// 0 = Todo
// 1 = Doing
// 2 = Done
export const useTasks = create(
  immer((set) => ({
    tasks: {
      0: [
        {
          label:
            "Start with meditation, exercise & breakfast for a productive day",
          isDone: false,
        },
        {
          label: "Read to learn something new every day",
          isDone: false,
        },
        { label: "Learn something fresh & relevant", isDone: false, order: 2 },
      ],
      1: [
        {
          label: "Engage & question in meetings",
          isDone: false,
        },
        {
          label: "Use time-blocking for effective days",
          isDone: false,
        },
      ],
      2: [
        {
          label: "Finished online course - check!",
          isDone: true,
        },
        {
          label:
            "Congratulate yourself for incorporating healthier habits into your lifestyle, like regular exercise or mindful eating",
          isDone: true,
        },
      ],
    },
    addTask: (status, task, isDone) =>
      set((state) => {
        state.tasks[status].unshift({ label: task, isDone });
      }),
    removeTask: (status, index) =>
      set((state) => {
        state.tasks[status].splice(index, 1);
      }),
    tickTask: (status, index, checked) =>
      set((state) => {
        state.tasks[status][index].isDone = checked;
      }),
  }))
);
