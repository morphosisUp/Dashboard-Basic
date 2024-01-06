import { useEffect } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { DataProvider } from "./components/DataContext";
function App() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <DataProvider>
      <Navbar />
      <Main />
    </DataProvider>
  );
}

export default App;
