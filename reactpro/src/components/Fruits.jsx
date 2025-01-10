import Fruit from "./Fruit";

export default function Fruits() {
  // const fruits = ["Apple", "Mango", "Orange"]; // Array
  const fruits = [
    { name: "apple", price: 20, soldout: true },
    { name: "orange", price: 10, soldout: false },
    { name: "mango", price: 40, soldout: true },
    { name: "banana", price: 50, soldout: true },
  ]; //object

  return (
    <div>
      <ul>
        {
          /* {fruits.map((fruit) => (
          // <li key={fruit}>{fruit}</li> //array
          <li key={fruit}>
            {fruit.name} ${fruit.price}
          </li> //object
        ))} */
          fruits.map((fruit) => (
            <Fruit
              key={fruit.name}
              name={fruit.name}
              price={fruit.price}
              soldout={fruit.soldout}
            /> //props
          ))
        }
      </ul>
    </div>
  );
}
