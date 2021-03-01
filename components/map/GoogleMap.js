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

const loader = new Loader({
  apiKey: 'AIzaSyAYTxijlk0ceY0ybd5QUExDRoaZUiAFvPQ',
  version: 'weekly'
});

const loadMap = () => {
  loader.load().then(() => {
    const location = { lat: 6.146495425771893, lng: -75.626902085216 };

    const newMap = new google.maps.Map(document.getElementById('google-map'), {
      center: location,
      disableDefaultUI: true,
      zoom: 13,
      styles: mapConfig.laser
    });

    new google.maps.Marker({
      position: location,
      map: newMap,
      title: 'Hello World!'
    });
  });
};

const GoogleMap = () => {
  useEffect(() => {
    loadMap();
  }, []);
  return <MapContainer id="google-map" />;
};

export default GoogleMap;
