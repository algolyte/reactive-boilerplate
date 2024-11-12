import "./App.scss";

function App() {
  console.log("env VITE_ENV_FILE:", import.meta.env.VITE_ENV_FILE);

  return (
    <h1 className="test text-center text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}

export default App;
