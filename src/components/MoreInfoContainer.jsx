import { useData } from "./DataContext";
import ContainerLoad from "./ContainerLoad";
export default function MoreInfoContainer({
  user,
  maskShowUserInfoRef,
  containerMoreInfoRef,
}) {
  const { loading } = useData();

  function getYear(date) {
    const dataObj = new Date(date);
    const atualDate = new Date();
    const ano = atualDate.getFullYear() - dataObj.getFullYear();

    return ano;
  }

  function closeBoxInfo() {
    if (maskShowUserInfoRef?.current && containerMoreInfoRef?.current) {
      containerMoreInfoRef.current.classList.remove("container_more_info_on");
      containerMoreInfoRef.current.classList.add("container_more_info_off");
      document.body.style.overflow = "hidden";
    }
    setTimeout(() => {
      maskShowUserInfoRef?.current.classList.add("hidden");
      document.body.style.overflow = "auto";
    }, 500);
  }

  return (
    <aside
      ref={maskShowUserInfoRef}
      className="w-full hidden mask_show_user_info  h-screen z-50 fixed top-0 left-0 right-0 bg-[#f5f5f598] dark:bg-[rgba(0,0,0,0.7)]"
    >
      <div
        ref={containerMoreInfoRef}
        className="container_more_info overflow-y-auto w-full shadow-lg rounded-t-3xl bg-white fixed bottom-0 retrato-tablet:h-[26rem] h-[90vh] dark:bg-gradient-to-b from-zinc-950 to-zinc-900 p-5"
      >
        <div className="w-full h-full relative">
          {loading && <ContainerLoad />}
          <header className="flex items-center justify-between px-2">
            <div>
              <h4 className="dark:text-white text-zinc-800">Detalhes</h4>
            </div>
            <button
              onClick={closeBoxInfo}
              className="close_box dark:text-white hover:bg-indigo-700 hover:text-white text-black w-10 h-10 transition-all  dark:bg-zinc-900 bg-zinc-100  flex items-center justify-center rounded-full"
            >
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
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </button>
          </header>

          <div className="mt-6 px-5">
            {user != null &&
              user.map((user) => (
                <div key={user.id} className="max-w-4xl w-full m-auto">
                  <header className="flex retrato-tablet:flex-row flex-col items-center justify-between">
                    <div className="flex retrato-tablet:flex-row flex-col space-x-4">
                      <img
                        src={user.image_profile}
                        className="w-12 h-12 ring-2 retrato-tablet:m-0 m-auto ring-indigo-600 ring-offset-2 dark:ring-white rounded-full"
                        alt="imagem_de_funcionario"
                      />
                      <div className="retrato-tablet:text-start text-center retrato-tablet:mt-0 mt-4">
                        <h5 className="font-medium dark:text-white text-zinc-700">
                          {user.first_name} {user.last_name}
                        </h5>
                        <small className="dark:text-white text-zinc-600">
                          {user.email}
                        </small>
                        <br />
                        <small className="dark:text-zinc-400 text-zinc-500">
                          {getYear(user.data_nascimento)} Anos
                        </small>
                      </div>
                    </div>
                    <div className="retrato-tablet:mt-0 mt-4">
                      <button className="dark:text-white dark:hover:bg-indigo-800 text-black transition-all hover:text-white hover:bg-indigo-700 bg-zinc-100 dark:bg-indigo-700 px-6 py-2.5 font-medium rounded-full text-[15px]">
                        Contactar
                      </button>
                    </div>
                  </header>

                  <div className="mt-8 grid grid-cols-1 gap-6" title="Sector">
                    <div className="flex flex-wrap items-center justify-between">
                      <button className="dark:text-zinc-200 text-indigo-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 "
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                          />
                        </svg>
                      </button>

                      <span className="dark:text-zinc-300 text-[15px] text-zinc-600 font-medium">
                        {user.sector}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="dark:text-zinc-200 text-indigo-700"
                        title="Telefone"
                      >
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
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                          />
                        </svg>
                      </button>

                      <span className="dark:text-zinc-300 text-[15px] text-zinc-600 font-medium">
                        +244 {user.phone}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="dark:text-zinc-200 text-indigo-700"
                        title="Sector"
                      >
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
                      </button>

                      <span className="dark:text-zinc-300 text-[15px] text-zinc-600 font-medium">
                        {user.salario}{" "}
                        <small className="text-zinc-400">Euros</small>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
