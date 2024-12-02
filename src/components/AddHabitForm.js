import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");
  const handleHabitName = (e) => {
    setHabitName(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habitName) {
      alert("Please enter a habit name.");
      return;
    }
    const newHabit = {
      id: Date.now(),
      name: habitName,
      checked: false,
    };

    onAddHabit(newHabit);
    setHabitName("");

  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Habit Tracker</h1>
      <input type="text" id="habitName" name="habitName" placeholder="New Habit" value={habitName} onChange={handleHabitName}></input>
      <button type="submit">Add Habit</button>
    </form>
  );
}