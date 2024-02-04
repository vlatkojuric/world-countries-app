import "./App.css";
import Country from "./components/Country";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";

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
      <div>
        <QueryClientProvider client={client}>
          <Router>
            <Routes>
              <Route path="/" element={<Country />} />
              <Route path="/details/:id" element={<CountryDetails />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
