import { useColorScheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      size="sm"
      variant="solid"
      color="neutral"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      className="!mb-6"
    >
      {mode === 'dark' ? 'Use light mode' : 'Use dark mode'}
    </Button>
  );
}

export default ModeToggle;