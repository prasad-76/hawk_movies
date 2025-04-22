import { Toaster } from "react-hot-toast";
import { store } from "../state/store";
import { get } from "../state/user.slice";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Search from "../features/search/Search";

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         staleTime: 60 * 1000
      }
   }
})

export default function RootProvider({ children }) {
   useEffect(function () {
      store.dispatch(get());
   }, []);

   return <>
      <QueryClientProvider client={queryClient}>
         <ReactQueryDevtools initializeialIsOpen={true} />
         <Search />
         <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
         {children}
      </QueryClientProvider>
   </>
}