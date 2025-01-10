import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Event from "./components/Event";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  const abc = [1, 4, 5];
  const person = {
    firstName: "Raja",
    age: 30,
    numbers: [2, 3, 5],
  };
  return (
    <div className="app">
      Hello world! and <Hello name="Rani" />
      Hello world! and <Hello name="Rani" abc={abc} />
      Hello world! and <Hello name="Rani" abc={abc} person={person} />
      <Fruits />
      <ConditionalComponent />
      <Event />
      <Counter />
      <Form />
    </div>
  );
}

export default App;
