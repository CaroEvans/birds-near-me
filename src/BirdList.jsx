import useBirdList from './useBirdList';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';

const BirdList = () => {
  const [birds] = useBirdList(import.meta.env.VITE_REGION);
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {birds.map(
        bird => (
          console.log(bird),
          (
            <li
              key={bird.speciesCode}
            >
              <Card variant="outlined">
                <CardOverflow>
                  <AspectRatio ratio="2">
                    <img
                      src="/images/masked_gnatcatcher.jpg"
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                </CardOverflow>
                <CardContent>
                  <Typography level="title-md">{`${bird.howMany} ${bird.comName}`}{bird.howMany > 1 && !bird.comName.endsWith('s') && `s`} </Typography>
                  <Typography level="body-sm" className="italic !mb-4">{bird.sciName}</Typography>
                  <Typography level="body-sm">{bird.locName}</Typography>
                </CardContent>
                <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                  <Divider inset="context" />
                  <CardContent orientation="horizontal">
                    <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                      {bird.obsDt}
                    </Typography>
                  </CardContent>
                </CardOverflow>
              </Card>
            </li>
          )
        )
      )}
    </ul>
  );
};

export default BirdList;
