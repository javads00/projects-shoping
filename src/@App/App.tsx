import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

import { AppLayout } from "@/components/Layouts/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DrawerContext } from "../context";

import "react-toastify/dist/ReactToastify.css";

export function App() {
  const queryClient = new QueryClient();
  const [mode, setMode] = useState<"dark" | "white">("white");

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DrawerContext.Provider
          value={{ show: mode, setMode: (param) => setMode(param) }}
        >
          {" "}
          <AppLayout>
            <Outlet />
          </AppLayout>
        </DrawerContext.Provider>
      </QueryClientProvider>
      <ToastContainer rtl={true} draggable={true} theme="dark" />
    </>
  );
}
