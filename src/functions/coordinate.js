const getCoordinate = (setMyLocation) => {
  const location = window.navigator && window.navigator.geolocation;
  if (location) {
    location.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setMyLocation({ latitude, longitude });
      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
      }
    );
  }
};

export default getCoordinate;
