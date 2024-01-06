import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import ContainerLoad from "./ContainerLoad";
import MoreInfoContainer from "./MoreInfoContainer";
import { useData } from "./DataContext";

const CardUser = React.memo(
  ({ id, first_name, last_name, image_profile, salario, email, showId }) => {
    return (
      <div className="retrato-tablet:py-5 py-7  px-5 cursor-pointer rounded-lg dark:rounded-t-lg bg-white hover:shadow-lg dark:hover:from-zinc-900 dark:hover:to-zinc-950 bg-gradient-to-b dark:from-zinc-900 from-white to-[#f5f5f5] dark:to-zinc-950 transition-all dark:shadow-none">
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
          </div>
        </header>

        <footer className="mt-10 flex justify-between w-full items-center ">
          <div>
            <p className="text-[15px] dark:text-zinc-300 text-zinc-600 flex items-center font-medium">
              {salario}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 ms-2 fill-indigo-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.902 7.098a3.75 3.75 0 0 1 3.903-.884.75.75 0 1 0 .498-1.415A5.25 5.25 0 0 0 8.005 9.75H7.5a.75.75 0 0 0 0 1.5h.054a5.281 5.281 0 0 0 0 1.5H7.5a.75.75 0 0 0 0 1.5h.505a5.25 5.25 0 0 0 6.494 2.701.75.75 0 1 0-.498-1.415 3.75 3.75 0 0 1-4.252-1.286h3.001a.75.75 0 0 0 0-1.5H9.075a3.77 3.77 0 0 1 0-1.5h3.675a.75.75 0 0 0 0-1.5h-3c.105-.14.221-.274.348-.402Z"
                  clip-rule="evenodd"
                />
              </svg>
            </p>
          </div>
          <button
            type="button"
            onClick={() => showId(id)}
            className="bg-indigo-700 dark:bg-zinc-950 transition-all hover:ring-4 ring-0 ring-indigo-400 dark:ring-zinc-500 dark:ring-opacity-20 ring-opacity-35 text-white font-medium text-[14px] px-5 py-2 rounded-full"
          >
            Detalhes
          </button>
        </footer>
      </div>
    );
  }
);

const Main = () => {
  const { data, fetchData, filterDataById, loading } = useData();
  const [idSelected, setIdSelected] = useState([]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function showMoreCards() {
    const container_grid = document.querySelector(".container_grid");
    const frame_show_more = document.querySelector(".frame_show_more");
    container_grid.classList.add("max_height_none");
    frame_show_more.classList.add("hidden");
  }

  const maskShowUserInfoRef = useRef(null);
  const containerMoreInfoRef = useRef(null);

  const handleFilterClick = async (id) => {
    if (maskShowUserInfoRef.current && containerMoreInfoRef.current) {
      maskShowUserInfoRef.current.classList.remove("hidden");
      containerMoreInfoRef.current.classList.remove("container_more_info_off");
      containerMoreInfoRef.current.classList.add("container_more_info_on");
      document.body.style.overflow = "hidden";
    }
    const filteredData = await filterDataById(id);
    setIdSelected(filteredData);
  };
  useEffect(() => {
    // console.log(idSelected);
  }, [idSelected]);

  return (
    <main className="mt-[60px] p-5 relative">
      {loading && <ContainerLoad />}
      <div className="w-full container_grid relative justify-center grid gap-4 mt-8  overflow-hidden max-w-7xl m-auto retrato-tablet:grid-cols-2 grid-cols-1 paisagem-tablet:grid-cols-3">
        {data.map((item) => (
          <CardUser
            key={item.id}
            id={item.id}
            first_name={item.first_name}
            last_name={item.last_name}
            image_profile={item.image_profile}
            salario={item.salario}
            email={item.email}
            showId={handleFilterClick}
          />
        ))}
        <div className="p-6 cursor-pointer rounded-lg dark:rounded-t-lg bg-indigo-700 hover:shadow-lg  dark:hover:to-zinc-950 dark:bg-gradient-to-b from-indigo-800 to-zinc-950 transition-all shadow-sm dark:shadow-none">
          <h1 className="text-white  font-medium">Junte-se á Morphosis</h1>
          <p className="text-white text-[14px] pt-2 pb-6">
            Somos uma Comunidade com Ideias e Projectos que vão alavancar a
            Tecnologia em Nosso País, Junte-se agora.
          </p>
          <a
            href="#"
            className="bg-indigo-800  transition-all hover:bg-indigo-900 px-5 text-white rounded-full text-[14px] font-medium py-2"
          >
            Começar
          </a>
        </div>
      </div>
      <div className="absolute left-0 flex items-center frame_show_more justify-center bottom-0 h-40 bg-gradient-to-b from-transparent dark:to-[rgba(17,16,16,0.86)] to-[rgba(226,220,220,0.99)] w-full">
        <button
          onClick={showMoreCards}
          title="Mostrar mais"
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

      <MoreInfoContainer
        user={idSelected}
        maskShowUserInfoRef={maskShowUserInfoRef}
        containerMoreInfoRef={containerMoreInfoRef}
      />
    </main>
  );
};
export default Main;
