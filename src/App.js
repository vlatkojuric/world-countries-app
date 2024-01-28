import "./App.css";
import Country from "./components/Country";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div className="App">
      <div className="countryDisplay">
        <QueryClientProvider client={client}>
          <Country />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
