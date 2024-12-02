import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (habitName) => {
    setHabits((prevHabits) => {
      return [...prevHabits, habitName];
    });
  };

  const handleToggleHabit = (id) => {
    setHabits((prevHabits) => {
      return prevHabits.map((habits) => habits.id === id ? {...habits, checked: !habits.checked} : habits);
    });
  };

  const handleDeleteHabit = (id) => {
    setHabits((prevHabits) => {
      return prevHabits.filter((habits) => habits.id !== id);
    });
  };

  return (
    <div>
      <AddHabitForm onAddHabit={handleAddHabit}/>
      <HabitList 
      habits={habits}
      onDeleteHabit={handleDeleteHabit}
      onToggleHabit={handleToggleHabit}/>
    </div>
  );
}

export default App;
