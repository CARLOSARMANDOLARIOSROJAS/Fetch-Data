
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Fetch } from './components/Fetch';
import { Query } from './components/Query';
import { SWR } from './components/SWR';
import { Axios } from 'axios';
import { AxiosMine } from './components/AxiosMine';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>

      {/* <Fetch/> */}
      {/* <SWR/> */}
      {/* <Query/> */}
      <AxiosMine/>

    </QueryClientProvider>
    // <Fetch/>
    // <SWR/>
    // <Query/>
  );
}

export default App;
