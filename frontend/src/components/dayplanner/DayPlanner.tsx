import './dayplanner.css'

type DayPlannerProps = {
  day: string;
  items: string[];
};

export default function DayPlanner({ day, items }: DayPlannerProps) {
  return (
    <section className='dayplanner-container'>
      <h1>{day}</h1>
        <div className="dayplanner">
        <ul className='dayplanner-list'>
        {items.map((item, index) => (
          <li key={index}>
            <label>
                 <input type="checkbox" />
                {item}
            </label>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}
