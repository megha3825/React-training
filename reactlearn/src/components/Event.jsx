export default function Event() {
  function handleClick() {
    console.log("button clicked");
  }
  return (
    <button onClick={handleClick}>Click me to see message in console</button>
  );
}
