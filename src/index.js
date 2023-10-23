import ReactDOM from "react-dom/client";

// 보통의 JS로는 CSS를 import해오는 것이 불가능하지만, react에서는 가능.
// 코드가 react문법으로 compile된 것을 브라우저가 읽음
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
