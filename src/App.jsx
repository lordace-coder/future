import { useState } from "react";

import "./App.css";
import CryptoAirdrop from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return <CryptoAirdrop />;
}

export default App;
