function Hello({ name, abc, person }) {
  const firstName = person?.firstName;
  return (
    <h1 className="hello">
      Hello from {name} {abc} {firstName}!
    </h1>
  );
}

export default Hello;
