import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <a href="">Home</a>
      <a href="">Page</a>
      <a href=""></a>
      <a href=""></a>
    </div>
  );
};

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>React</li>
        <li>html</li>
      </ul>
    </div>
  );
};

export default App;
