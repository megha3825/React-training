import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  const display = true;
  // if (display) { //conditionaly rendering jsx
  //   return (
  //     <div>
  //       <h3>This is conditional component</h3>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h3>Code everyday</h3>
  //     </div>
  //   );
  // }

  // if (display) {
  //   return <Welcome />;
  // } else {
  //   return <Code />;
  // } //conditionaly rendering components

  //element variables
  // let message;
  // if (display) {
  //   message = "message1";
  // } else {
  //   message = "message2";
  // }
  // return (
  //   <div>
  //     <h2>{message}</h2>
  //   </div>
  // );

  //ternary operator in jsx
  // return display ? <h1>message1</h1> : <h1>message2</h1>;

  //teranary operator in components
  return display ? <Welcome /> : <Code />;
}
