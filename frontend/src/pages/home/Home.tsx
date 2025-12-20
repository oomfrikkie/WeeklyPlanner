import { useState } from "react";
import DayPlanner from "../../components/dayplanner/DayPlanner";
import './home.css'

export default function Home() {
  const [items] = useState<string[]>([
    "Gym – 1 hour",
    "Grocery shopping",
    "Walk the dog",
    "Gym – 1 hour",
    "Grocery shopping",  "Gym – 1 hour",
    "Grocery shopping",
    "Walk the dog",
    "Gym – 1 hour",
    "Grocery shopping",  "Gym – 1 hour",
    "Grocery shopping",
    "Walk the dog",
    "Gym – 1 hour",
    "Grocery shopping",  "Gym – 1 hour",
    "Grocery shopping",
    "Walk the dog",
    "Gym – 1 hour",
    "Grocery shopping",
    
    
  ]);

  return (
    
      <section>
        <div className="dayplanner-section">
            <DayPlanner day="Monday" items={items} />
        </div>
      </section>
    
  );
}
