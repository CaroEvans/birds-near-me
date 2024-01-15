import useBirdList from './useBirdList';
import { Card, CardContent, CardOverflow, Typography, Divider, AspectRatio } from '@mui/joy';

const BirdList = () => {
  const [birds] = useBirdList(import.meta.env.VITE_REGION);
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {birds.map(
        bird => (
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
