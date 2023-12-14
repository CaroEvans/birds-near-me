# Birds Near Me

## Idea

- Birds in your area
- user searches their location - autofills from some maps api - lock down to Australia?
- hits request

- need big hash map of bird speciesCodes and images - with a placeholder for birds I don't have yet 850 species
- stretch feature - pick a placeholder you like
- google data store - free image hosting?

Request: curl --location 'https://api.ebird.org/v2/data/obs/AU-QLD-BRI/recent' \
--header 'X-eBirdApiToken:{{key}}' OR curl --location -g 'https://api.ebird.org/v2/data/obs/geo/recent?lat={{LAT}}&lng={{LONG}}' \
--header 'X-eBirdApiToken:{{key}}'

### Questions

No endpoint for bird counts by region?

## Other Ideas

- Hottest 100 birds recorded in Australia, by day
- Stretch feature: arrows to show movement

API Docs: https://documenter.getpostman.com/view/664302/S1ENwy59

curl --location 'https://api.ebird.org/v2/data/obs/AU-QLD-BRI/recent?key=f9ia0shsovr2'
