export default function Fruit({ name, price, soldout }) {
  //conditinaly rendering list
  return (
    <>
      {price > 10 ? (
        <li>
          {name} {price} {soldout ? "soldout" : ""}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
