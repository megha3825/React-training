const name = "Rob";

function displayMessage() {
  return "Wow what a wheather!";
}
function Hello(props) {
  console.log(props);
  const age = props.person?.age;
  const myname = props.person?.name;
  //Destructuring props
  //const {name, message} = props //then we can directly use like {name} and {message}
  return (
    <div>
      {props.message}Hello from component {name} {20 + 30} {displayMessage()}{" "}
      {props.name}! {props.number} {age} {myname}
    </div>
  );
}

export default Hello;
