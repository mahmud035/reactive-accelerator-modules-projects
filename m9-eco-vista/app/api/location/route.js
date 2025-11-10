import { getLocations } from './location-utils';

export const GET = async () => {
  const locations = getLocations();

  return Response.json(locations);
};
