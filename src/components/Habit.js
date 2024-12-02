import React from "react";

export default function Habit({habits, onToggleHabit, onDeleteHabit}) {
    return (
        <div style= {habits.checked ? { textDecoration: "line-through" } : {}}>
          <li>
          <input 
          type="checkbox"
          value={habits.checked}
          onChange={()=> onToggleHabit(habits.id)}
          />
          {habits.habitName}
          </li>
          <button onClick={() => onDeleteHabit(habits.id)}>Delete</button>
        </div>
      );
}
