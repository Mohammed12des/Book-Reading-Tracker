import "./App.css";

function App() {
  const books = [
    { name: "The place", read: true },
    { name: "The cook", read: false },
    { name: "The thife", read: true },
  ];

  return (
    <>
      <h1>Books List</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index} className={book.read ? "read" : "not-read"}>
            {book.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
