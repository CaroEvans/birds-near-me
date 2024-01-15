import { createRoot } from 'react-dom/client';
import BirdList from './BirdList';
import { CssVarsProvider } from '@mui/joy/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ModeToggle from './ModeToggle';
import { Sheet, Typography } from '@mui/joy';

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
    <CssVarsProvider defaultMode="system">
      <Sheet color="neutral" sx={{ p: 4 }}>
        <header>
          <Typography level="h1" fontFamily="Climate Crisis" fontWeight="400" textAlign="center">Birds near me</Typography>
        </header>
        <ModeToggle/>
        <QueryClientProvider client={queryClient}>
          <BirdList />
        </QueryClientProvider>
      </Sheet>
    </CssVarsProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
