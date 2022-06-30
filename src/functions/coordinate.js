const getCoordinate = (setMyLocation) => {
  const location = window.navigator && window.navigator.geolocation;
  if (location) {
    location.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setMyLocation({ latitude, longitude });
      },
      (error) => {
        alert("Please allow location permission");
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
      }
    );
  }
};

export default getCoordinate;
