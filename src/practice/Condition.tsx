
type ItemProps = {
  name: string;
  isPacked: boolean;
};

function Item({ name, isPacked }: ItemProps) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✅";
  }
  return <li className="item">{itemContent}</li>;
}

export default function PackingList() {
  return (
   <>
   <br /><br /><br /><br /><br />
   
   <section>
      <h1 className="font-bold text-2xl">Sally Ride's Packing List (Conditional Rendering)</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={true} name="Photo of Tam" />
      </ul>
    </section>
   
   <br /><br /><br /><br /><br />
   </>
  );
}
