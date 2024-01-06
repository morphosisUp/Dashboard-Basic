import { useState, useEffect, useRef } from "react";
import axios from "axios";
import MoreInfoContainer from "./MoreInfoContainer";
import { useData } from "./DataContext";
export default function ContainerSearch() {
  const { filterDataById } = useData();
  const [data, setData] = useState([]);
  const [idUserSelected, setidUserSelected] = useState([]);
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gist.githubusercontent.com/mariosalembe23/eb6a0467f305c7a8b50feb022c719af7/raw/users.json".trim()
        );

        const usersFound = await response.data.users.filter(
          (user) =>
            user.first_name
              .toLowerCase()
              .startsWith(valueInput.toLowerCase()) ||
            user.last_name.toLowerCase().startsWith(valueInput.toLowerCase()) ||
            user.first_name.toLowerCase() === valueInput.toLowerCase() ||
            user.last_name.toLowerCase() === valueInput.toLowerCase() ||
            user.email.toLowerCase() === valueInput.toLowerCase() ||
            user.email.toLowerCase().includes(valueInput.toLowerCase()) ||
            user.sector.toLowerCase() === valueInput.toLowerCase() ||
            user.sector.toLowerCase().includes(valueInput.toLowerCase()) ||
            `${user.first_name.toLowerCase()} ${user.last_name.toLowerCase()}` ===
              valueInput.toLowerCase()
        );
        setData((prevData) => [...usersFound]);
      } catch (error) {
        console.error(`Ocorreu um erro ao Trazer os Dados: ${error.message}`);
      }
    };

    if (valueInput.trim() !== "") {
      fetchData();
    } else {
      setData([]);
    }
  }, [valueInput]);

  function closeSearchCard() {
    const mask_search = document.querySelector(".mask_search");
    const card_search = document.querySelector(".card_search");
    setData([]);
    card_search.classList.remove("card_search_on");
    card_search.classList.add("card_search_off");
    setTimeout(() => {
      mask_search.classList.add("hidden");
      document.body.style.overflow = "auto";
    }, 600);
  }

  const maskShowUserInfoRef = useRef(null);
  const containerMoreInfoRef = useRef(null);

  function OpenInfoCard(id) {
    const filteredData = filterDataById(id);
    setidUserSelected(filteredData);
    if (maskShowUserInfoRef.current && containerMoreInfoRef.current) {
      maskShowUserInfoRef.current.classList.remove("hidden");
      containerMoreInfoRef.current.classList.remove("container_more_info_off");
      containerMoreInfoRef.current.classList.add("container_more_info_on");
      document.body.style.overflow = "hidden";
    }
  }

  return (
    <aside className="z-50 fixed hidden mask_search top-0 left-0 right-0 w-full h-screen bg-[#f5f5f598] dark:bg-[rgba(0,0,0,0.9)]">
      <div className="card_search retrato-tablet:h-[80vh] h-[90%] w-full rounded-t-3xl bg-white shadow-lg dark:bg-zinc-950 fixed bottom-0">
        <div className="flex flex-col justify-between">
          <header className="retrato-tablet:px-7 px-4 pt-3">
            <div className="input_group flex items-center gap-3">
              <input
                onInput={(e) => setValueInput(e.target.value)}
                type="text"
                className="w-full dark:text-zinc-100 text-zinc-800 outline-none placeholder:text-zinc-500 dark:placeholder:text-zinc-100 px-3 py-3 bg-transparent"
                placeholder="Pesquise por nome, email ou sector..."
                name="search"
                id="search"
              />
              <button
                onClick={closeSearchCard}
                className="dark:text-white text-zinc-900 close_search_card transition-all hover:text-indigo-500 p-1"
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
            </div>
          </header>
          <div className="retrato-tablet:px-9 px-6 relative overflow-y-auto  w-full h-screen pb-14  mt-7">
            <h6 className="dark:text-zinc-700 text-zinc-500  font-['Inter'] text-[15px]  pb-4">
              {data.length || "Sem"} Resultado(s)
            </h6>
            <div className="grid grid-cols-1 gap-4 relative">
              {data.map((user) => (
                <button key={user.id} onClick={() => OpenInfoCard(user.id)}>
                  <div className="py-5 h-28  bg-gradient-to-b flex justify-between items-center dark:from-zinc-900 from-gray-200 to-transparent  dark:to-zinc-950 px-5 rounded-t-3xl">
                    <header className="flex w-full text-start space-x-4">
                      <img
                        src={user.image_profile}
                        className="w-14 h-14 ring-2 dark:ring-indigo-400  ring-zinc-400 rounded-full"
                        alt="avatar funcionario"
                      />
                      <div>
                        <h6 className="dark:text-zinc-100 text-zinc-800 font-medium">
                          {user.first_name} {user.last_name}
                        </h6>
                        <p className="dark:text-white text-black text-[14px]">
                          {user.sector}
                        </p>
                        <small className="dark:text-zinc-400 text-zinc-600">
                          {user.email}
                        </small>
                      </div>
                    </header>
                    <div className="retrato-tablet:inline hidden">
                      <button
                        onClick={() => OpenInfoCard(user.id)}
                        className="text-white  text-[14px] px-6 py-2 rounded-full transition-all hover:bg-indigo-700 bg-indigo-800 font-medium"
                      >
                        Detalhes
                      </button>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <MoreInfoContainer
        user={idUserSelected}
        maskShowUserInfoRef={maskShowUserInfoRef}
        containerMoreInfoRef={containerMoreInfoRef}
      />
    </aside>
  );
}
