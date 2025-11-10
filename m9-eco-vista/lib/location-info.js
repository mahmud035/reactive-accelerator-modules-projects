export const getLocationData = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const getLocationLatLongList = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/location');
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const getLocationLatLong = async (locationName) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/location/${locationName}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const getResolvedLatLong = async (location, lat, lon) => {
  if (lat && lon) {
    return { lat, lon };
  }

  const locationLatLong = await getLocationLatLong(location);

  if (locationLatLong.latitude && locationLatLong.longitude) {
    const lat = locationLatLong.latitude;
    const lon = locationLatLong.longitude;

    return { lat, lon };
  }
};
