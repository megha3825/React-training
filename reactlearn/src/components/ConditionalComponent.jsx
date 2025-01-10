import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  const display = true;

  // CONDITIONALLY RENDERING JSX
  // if (display) {
  //   return <h3>This statement is true;</h3>;
  // } else {
  //   return <h3>This statement is false</h3>;
  // }

  // CONDITIONALLY RENDERING COMPONENT
  // if (display) {
  //   return <Code />;
  // } else {
  //   return <Welcome />;
  // }

  // CONDITIONALLY RENDERING ELEMENT VARIABLE to reduce the multiple return statement.
  let message;
  // if (display) {
  //   message = <h3>This statement is true;</h3>;
  // } else {
  //   message = <h3>This statement is false</h3>
  // }
  // return message;

  //TERNARY OPERATORS to render  JSX
  // return display ? (
  //   <h3>This statement is true</h3>
  // ) : (
  //   <h3>This statement is false</h3>
  // );

  //TERNARY OPERATOR TO RENDER COMPONENT ON CONDITIONAL STATEMENT.
  return display ? <Code /> : <Welcome />;
}
