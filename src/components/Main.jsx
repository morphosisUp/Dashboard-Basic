import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ContainerLoad from "./ContainerLoad";

const CardUser = ({
  id,
  first_name,
  last_name,
  image_profile,
  salario,
  email,
}) => {
  function showInfoUsers(id) {
    console.log(id);
  }

  return (
    <div className="p-5 cursor-pointer rounded-lg dark:rounded-t-lg bg-white hover:shadow-lg dark:hover:from-zinc-900 dark:hover:to-zinc-950 dark:bg-gradient-to-b from-zinc-800 to-zinc-950 transition-all shadow-sm dark:shadow-none">
      <header className="w-full flex space-x-5 paisagem-tablet:flex-row flex-col paisagem-tablet:justify-start justify-center  ">
        <img
          src={image_profile}
          className="w-12 h-12 rounded-full paisagem-tablet:m-0  m-auto ring-2 ring-offset-2 ring-indigo-400  dark:ring-zinc-700"
          alt="imagem_de_funcionario"
        />
        <div className="paisagem-tablet:text-start text-center paisagem-tablet:mt-0 mt-4">
          <h3 className="text-zinc-900 dark:text-white">
            {first_name} {last_name}
          </h3>
          <p className="text-[14px] text-indigo-700 dark:text-zinc-400">
            {email}
          </p>

          <div className="mt-4 inline-flex items-center dark:bg-indigo-700 dark:text-white space-x-1 px-3 py-1 bg-[#f5f5f5] text-indigo-600 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="text-[15px] font-medium">{salario}</p>
          </div>
        </div>
      </header>

      <footer className="mt-5 flex justify-center paisagem-tablet:justify-end">
        <button
          onClick={showInfoUsers(id)}
          className="bg-indigo-700 dark:bg-zinc-950 transition-all hover:ring-4 ring-0 ring-indigo-400 dark:ring-zinc-500 dark:ring-opacity-20 ring-opacity-35 text-white font-medium text-[14px] px-5 py-2 rounded-full"
        >
          Detalhes
        </button>
      </footer>
    </div>
  );
};

const Main = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gist.githubusercontent.com/mariosalembe23/eb6a0467f305c7a8b50feb022c719af7/raw/users.json".trim()
        );
        setData(response.data.users);
      } catch (error) {
        console.error(`Ocorreu um erro ao Trazer os Dados: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  function showMoreInfo() {
    const container_grid = document.querySelector(".container_grid");
    const frame_show_more = document.querySelector(".frame_show_more");
    container_grid.classList.add("max_height_none");
    frame_show_more.classList.add("hidden");
  }

  return (
    <main className="mt-[60px] p-5 relative">
      {loading && <ContainerLoad />}
      <div className="w-full container_grid relative justify-center grid gap-4 mt-8  overflow-hidden max-w-7xl m-auto retrato-tablet:grid-cols-2 grid-cols-1 paisagem-tablet:grid-cols-3">
        {data.map((item) => (
          <CardUser
            id={item.id}
            first_name={item.first_name}
            last_name={item.last_name}
            image_profile={item.image_profile}
            salario={item.salario}
            email={item.email}
          />
        ))}
      </div>
      <div className="absolute left-0 flex items-center frame_show_more justify-center bottom-0 h-40 bg-gradient-to-b from-transparent dark:to-[rgba(17,16,16,0.86)] to-[rgba(226,220,220,0.99)] w-full">
        <button
          onClick={showMoreInfo}
          className="show_more_data_users  cursor-pointer bg-indigo-700 text-white w-12 h-12 ring-4 ring-indigo-300 ring-opacity-30 rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 stroke-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </main>
  );
};
export default Main;
