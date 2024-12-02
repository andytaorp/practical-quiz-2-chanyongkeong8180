import React from "react";

export default function Habit({habit, onToggleHabit, onDeleteHabit}) {
    return (
        <div>
          <li>
          <input 
          type="checkbox"
          value={habit.checked}
          onChange={()=> onToggleHabit(habit.id)}
          />
          <span style= {habit.checked ? { textDecoration: "line-through" } : {}}>{habit.name}</span>
          </li>
          <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
        </div>
    );
}