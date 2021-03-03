import { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import styled from 'styled-components';
import { mapConfig } from './config';

const MapContainer = styled.div`
  height: 100%;
  min-width: 320px;
  flex: 0 0 50%;
  @media (max-width: 900px) {
    width: 100%;
    margin: 8px;
    flex: 0 1 auto;
  }
`;

const createMap = () => {
  const location = { lat: 6.2041, lng: -75.5708 };
  const newMap = new google.maps.Map(document.getElementById('google-map'), {
    center: location,
    disableDefaultUI: true,
    zoom: 15,
    styles: mapConfig.white
  });
  new google.maps.Marker({
    position: location,
    map: newMap,
    animation: google.maps.Animation.DROP,
    // icon: image,
    title: 'Hello World!'
  });
};

const loadMap = () => {
  if (!window.google) {
    const loader = new Loader({
      apiKey: 'AIzaSyAYTxijlk0ceY0ybd5QUExDRoaZUiAFvPQ',
      version: 'weekly'
    });
    loader.load().then(createMap);
  } else {
    createMap();
  }
};

const GoogleMap = () => {
  useEffect(() => {
    loadMap();
  }, []);
  return <MapContainer id="google-map" />;
};

export default GoogleMap;
