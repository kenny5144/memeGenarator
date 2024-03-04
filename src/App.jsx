import { useState } from "react";
import "./App.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Meme from "./component/Main/Meme";
import Header from "./component/header/Header";
// Create a client
const queryClient = new QueryClient()
function App() {
  return (
    <>
    
    <QueryClientProvider client={queryClient}>
      <div className="mainDiv">
        <span>
          <Header />
          <Meme />
        </span>
      </div>
    </QueryClientProvider>

    </>
  );
}

export default App;
