import "./App.css";
import data from "./db";
import List from "./List";

function App() {
  return (
    <div>
      <h1>Shopping List</h1>
      <List initialItems={data} />
    </div>
  );
}
export default App;
