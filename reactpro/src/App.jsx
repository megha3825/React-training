import ConditionalComponent from "./components/ConditionalComponent";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  const number = [1, 3, 6];
  const person = {
    name: "Ram",
    age: "17",
  };
  return (
    <h1 className="Heading">
      Hello world!
      <div>
        <Hello />
        <Hello name="Tom" message="Hi there!" number={number} person={person} />
        <Fruits />
        <ConditionalComponent />
        <Message />
        <Counter />
        <Form />
      </div>
    </h1>
  );
}

export default App;
