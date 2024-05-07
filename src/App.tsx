
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { PromiseAll } from './components/PromiseAll';


function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>

      {/* <Fetch/> */}
      {/* <SWR/> */}
      {/* <Query/>  */}
      <PromiseAll/> 

    </QueryClientProvider>
    // <Fetch/>
    // <SWR/>
    // <Query/>
  );
}

export default App;
