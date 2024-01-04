import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export default function ContainerLoad() {
  return (
    <aside className="w-full h-screen fixed z-20 top-0 flex dark:bg-zinc-950 items-center justify-center left-0 container_loading bg-indigo-700">
      {/* <i
        class="m-spinner--swirl"
       
      ></i> */}
      <Box sx={{ display: "flex" }}>
        <CircularProgress color="secondary" fourColor />
      </Box>
    </aside>
  );
}
