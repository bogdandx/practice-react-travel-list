export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );

  const countPacked = items.filter((i) => i.packed).length;
  const percentage = Math.round((countPacked / items.length) * 100);

  return (
    <p className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${items.length} items on your list, and you already packed ${countPacked} (${percentage}%)`}
      </em>
    </p>
  );
}
