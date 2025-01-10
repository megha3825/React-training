import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [names, setNames] = useState({ firstName: "", lastName: "" }); //handling object values in state.
  return (
    <div>
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        ></input>
        {names.firstName} - {names.lastName}
        <input
          onChange={(e) => setNames({ ...names, firstName: e.target.value })} //spread operator that won't disturb other key value in names object.
          type="text"
          value={name.firstName}
        ></input>
        <input
          onChange={(e) => setNames({ ...names, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        ></input>
      </form>
    </div>
  );
}
