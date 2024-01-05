export default function OffCanvas({ mediaSalarial, usersNumber, changeTheme }) {

  function closeOffVanvas(){
    const offCanvas = document.querySelector(".offcanvas");
    const mask_show_offcanvas = document.querySelector(".mask_show_offcanvas");

    offCanvas.classList.remove("show_offCanvas_card");
    offCanvas.classList.add("hide_offCanvas_card");
    setTimeout(() => {
      mask_show_offcanvas.classList.add("hidden");
      document.body.style.overflow = "auto";
    }, 600);
  }
  
  return (
    <aside className="w-full hidden mask_show_offcanvas  h-screen z-30 fixed top-0 left-0 right-0 bg-[#f5f5f598] dark:bg-[rgba(0,0,0,0.7)]">
      <div className="offcanvas z-40  fixed top-0 left-0 h-screen dark:bg-zinc-950 shadow-lg bg-white retrato-tablet:w-[25rem] w-full p-6">
        <div className="w-full h-full relative">
          <header className="py-4 border-b dark:border-zinc-900 border-zinc-100 ">
            <h5 className="dark:text-zinc-500 text-zinc-800 flex items-center  font-medium ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 me-2"
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
              Definições
            </h5>
          </header>
          <div className="grid grid-cols-1 mt-8 gap-8">
            <div className="flex items-center justify-between">
              <p className="dark:text-zinc-400 text-zinc-800">Funcionários</p>
              <p className="dark:text-zinc-400 text-zinc-600 font-medium text-[15px]">
                {usersNumber}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="dark:text-zinc-400 text-zinc-800">Média Salarial</p>
              <p className="dark:text-zinc-400 text-zinc-800 font-medium text-[15px]">
                {mediaSalarial}{" "}
                <small className="dark:text-zinc-500">Euros</small>
              </p>
            </div>
            <div>
              <ul className="flex flex-col space-y-7">
                <li>
                  <a
                    href="#"
                    className="flex text-[15px] items-center text-zinc-800 transition-all dark:hover:text-zinc-500 hover:text-zinc-900  dark:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 me-2 stroke-indigo-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      />
                    </svg>
                    Premium
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#"
                    className="flex text-[15px] items-center text-zinc-800 transition-all dark:hover:text-zinc-500 hover:text-zinc-900  dark:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 me-2 stroke-indigo-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                      />
                    </svg>
                    Bate-papo
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-2 w-full absolute bottom-0">
              <button
                onClick={changeTheme}
                className="block text-[14px] w-full transition-all hover:ring-2 ring-indigo-700 dark:shadow-lg text-white bg-indigo-800 dark:bg-black py-2.5 rounded font-medium"
              >
                Alterar Tema
              </button>
              <button
                onClick={closeOffVanvas}
                className="block text-[14px] w-full transition-all dark:hover:ring-2 hover:bg-zinc-200 dark:hover:bg-indigo-900  ring-indigo-700 text-indigo-800 dark:text-white dark:shadow-lg dark:bg-indigo-800 bg-[#f5f5f5] py-2.5 rounded font-medium"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
