import { useState, useEffect } from "react";
import axios from "axios";
import OffCanvas from "./OffCanvas";

const Navbar = () => {
  const [data, setData] = useState([]);
  const [averageSalary, setAverageSalary] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gist.githubusercontent.com/mariosalembe23/eb6a0467f305c7a8b50feb022c719af7/raw/users.json".trim()
        );
        setData(response.data.users);
      } catch (error) {
        console.error(`Ocorreu um erro ao Trazer os Dados: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const salaries = data.map((user) => user.salario);
    const totalSalaries = salaries.reduce((sum, salary) => sum + salary, 0);
    const average = totalSalaries / salaries.length;

    setAverageSalary(average);
  }, [data]);

  function changeThemeSystem() {
    if (!document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }

  function showSettings() {
    const offCanvas = document.querySelector(".offcanvas");
    const mask_show_offcanvas = document.querySelector(".mask_show_offcanvas");
    
    mask_show_offcanvas.classList.remove("hidden");
    offCanvas.classList.remove("hide_offCanvas_card");
    offCanvas.classList.add("show_offCanvas_card");
    
    document.body.style.overflow = "hidden";
  }

  return (
    <header className="navbar dark:border-b dark:border-zinc-800 dark:bg-zinc-950 shadow-sm bg-[#fff] fixed top-0 left-0 right-0 z-10 w-full grid grid-cols-3  items-center py-5 justify-between px-5">
      <div className="icons_main flex items-center space-x-5">
        <button
          onClick={showSettings}
          className="text-zinc-500 dark:text-indigo-500 transition-all hover:text-indigo-500"
          title="Definições"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 stroke-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
        <button
          title="Pesquisar"
          className="text-zinc-500 dark:text-white retrato-tablet:inline hidden dark:hover:text-zinc-500 transition-all hover:text-indigo-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 stroke-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>

      <div className="logo_container flex justify-center items-center space-x-4">
        <a href="#" title="morphosis Logo">
          <img
            src="/img/logo.png"
            className="paisagem-tablet:w-9 paisagem-tablet:h-9 w-7 h-7 ring-2 rounded-full ring-indigo-600 ring-offset-2"
            alt="Logomarca de Morphosis"
          />
        </a>
      </div>

      <div>
        <div className="flex items-center justify-end space-x-3">
          <button
            onClick={changeThemeSystem}
            className="text-zinc-500 dark:hover:text-zinc-500 dark:text-white transition-all  hover:text-indigo-700"
            title="Tema do Sistema"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
              <path
                fill-rule="evenodd"
                d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <OffCanvas
        mediaSalarial={averageSalary.toFixed(2)}
        usersNumber={data.length}
        changeTheme={changeThemeSystem}
      />
    </header>
  );
};

export default Navbar;
