export default function Message() {
  function show() {
    console.log("Clicked");
  }
  return <button onClick={show}>Click here to show message in console</button>; //Event handling..
}
