import { createRoot } from 'react-dom/client';
import BirdList from './BirdList';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <div className="w-full px-20 py-12">
      <header>
        <h1 className="font-sans mx-auto text-center text-3xl mb-4">Birds near me</h1>
      </header>
      <QueryClientProvider client={queryClient}>
        <BirdList />
      </QueryClientProvider>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
