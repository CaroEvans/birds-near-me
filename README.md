# Birds Near Me

A project that pulls data from popular birding site eBird (API Docs: https://documenter.getpostman.com/view/664302/S1ENwy59)

### To do list

- Get region from user
- Image lookup for popular bird breeds in Australia
- Styling
- Auto refresh?

### Tools

- Vite, React, Tanstack

### Setup

- Add .env file to /src with eBird API key - sign up for ebird and go to https://ebird.org/api/keygen to request an api key
VITE_EBIRD_API_KEY={{ your api key here }}
VITE_REGION={{ region string here }}


#### Alternative Approach
- use long and lat
```
  `https://api.ebird.org/v2/data/obs/geo/recent?lat=${import.meta.env.VITE_LAT}&lng=${
    import.meta.env.VITE_LONG
  }&key=${import.meta.env.VITE_EBIRD_API_KEY}&detail=full&maxResults=20`
  ```