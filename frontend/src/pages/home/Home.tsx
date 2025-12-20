import { useState } from "react";
import DayPlanner from "../../components/dayplanner/DayPlanner";
import './home.css'

export default function Home() {
  const [items] = useState<string[]>([
    "Gym – 1 hour",
    "Grocery shopping",
    "Walk the dog",
    "Gym – 1 hour",
    "Grocery shopping",
    "Walk the dog",
    "Gym – 1 hour",
    "Grocery shopping",
    "Walk the dog",
    "Gym – 1 hour",
    "Grocery shopping",
    "Walk the dog",
    "Gym – 1 hour",
    "Grocery shopping",
    "Walk the dog",
    
  ]);

  return (
    
      <section>
        <div className="dayplanner-section">
            <div className="piechart"><img src="OneFifty.png" className="placeholder" alt="" /></div>
        
            <DayPlanner day="Monday" items={items} />
        </div>
      </section>
    
  );
}
