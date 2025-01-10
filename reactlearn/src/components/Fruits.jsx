import Vegetable from "./vegetable";
export default function Fruits() {
  const fruits = ["apple", "mango", "orange"];
  const students = [
    { name: "priti", age: 25, college: true },
    { name: "kreeet", age: 30, college: false },
    { name: "ravit", age: 10, college: true },
    { name: "siya", age: 15, college: true },
  ];
  const vegetables = ["potato", "tomato", "onion"];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
      <ul>
        {
          /* {students.map((student) => (
          <li key={student.name}>
            {student.name}
            {student.age}
          </li>
        ))} */

          students.map((student) =>
            student.age > 10 ? <li>{student.name}</li> : null
          )
        }
      </ul>
      <ul>
        student who is in college
        {students.map((student) =>
          student.college ? <li>{student.name}</li> : ""
        )}
      </ul>
      <ul>
        {vegetables.map((veg) => (
          <Vegetable name={veg} />
        ))}
      </ul>
    </div>
  );
}
