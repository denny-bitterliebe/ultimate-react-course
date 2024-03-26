export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list 🚀</p>
    );
  const numItems = items.length;
  const amountPacked = items.filter((item) => item.packed).length;
  const amountPackedInPercentage = Math.round((amountPacked / numItems) * 100);
  return (
    <footer className="stats">
      {amountPackedInPercentage == 100
        ? "You got everything! Ready to go ✈️"
        : `🧳 You have ${numItems} items on your list, and you already packed
        ${amountPacked} (${amountPackedInPercentage}%)`}
    </footer>
  );
}
