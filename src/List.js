import "./List.css";

export default function List({ initialItems }) {
  return (
    <ul className="shopping-list">
      {initialItems.map((item) => {
        return (
          <li>
            <button>{item.name.en}</button>
          </li>
        );
      })}
    </ul>
  );
}
