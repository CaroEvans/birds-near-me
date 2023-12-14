import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div class="w-full">
      <h1 class="font-sans mx-auto text-center text-3xl">Birds near me</h1>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
