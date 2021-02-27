import Head from 'next/head';
import Layout from '../components/layout/layout';
import styled from 'styled-components';
import Form from '../components/form/Form';

import { useEffect } from 'react';

import { Loader } from '@googlemaps/js-api-loader';

// const sendEmail = async (e) => {
//   e.preventDefault();
//   try {
//     const email = await fetch('/.netlify/functions/contact', {
//       method: 'POST'
//     });
//     // console.log(email);
//   } catch (error) {
//     console.error(error);
//   }
// };

const FormWrapper = styled.div`
  max-width: 30rem;
`;

const Title = styled.h1`
  font-family: 'Lordida Solid', 'Open Sans';
  font-size: 3rem;
  color: var(--orange-yellow);
`;
const MapContainer = styled.div`
  width: 600px;
  height: 600px;
`;

const loader = new Loader({
  apiKey: 'AIzaSyAYTxijlk0ceY0ybd5QUExDRoaZUiAFvPQ',
  version: 'weekly'
});

const loadMap = () => {
  loader.load().then(() => {
    const location = { lat: 6.146495425771893, lng: -75.626902085216 };
    const map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      disableDefaultUI: true,
      zoom: 13,
      styles: [
        {
          featureType: 'administrative',
          elementType: 'all',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#444444'
            }
          ]
        },
        {
          featureType: 'landscape',
          elementType: 'all',
          stylers: [
            {
              color: '#fffdfd'
            },
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry.fill',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry.stroke',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'landscape',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'all',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'all',
          stylers: [
            {
              saturation: -100
            },
            {
              lightness: 45
            },
            {
              visibility: 'on'
            },
            {
              weight: '3.28'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry.fill',
          stylers: [
            {
              visibility: 'on'
            },
            {
              color: '#000000'
            },
            {
              weight: '4.00'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#fffefe'
            },
            {
              weight: '2.00'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [
            {
              weight: '1.03'
            },
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              weight: '1.07'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'all',
          stylers: [
            {
              visibility: 'simplified'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [
            {
              weight: '5'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            {
              weight: '2'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry.fill',
          stylers: [
            {
              weight: '3'
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'geometry',
          stylers: [
            {
              visibility: 'on'
            },
            {
              weight: '1.00'
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'geometry.fill',
          stylers: [
            {
              weight: '2'
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'all',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#000000'
            },
            {
              weight: '2.00'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'geometry.stroke',
          stylers: [
            {
              weight: '2.00'
            },
            {
              color: '#000000'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [
            {
              color: '#46bcec'
            },
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#020202'
            },
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry.stroke',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            },
            {
              color: '#ff0000'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'labels.text',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        }
      ]
    });

    new google.maps.Marker({
      position: location,
      map,
      title: 'Hello World!'
    });
  });
};

function About() {
  useEffect(() => {
    loadMap();
  }, []);
  return (
    <>
      <Head>
        <title>Contact | Sebastian</title>
      </Head>
      <Layout>
        <div>
          <Title>Contact me</Title>
        </div>
        <FormWrapper>
          <Form />
          {/* <form onSubmit={sendEmail}>
            <label htmlFor="name">
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}></input>
            </label>
            <button>submit</button>
          </form> */}
        </FormWrapper>
        <MapContainer id="map"></MapContainer>
      </Layout>
    </>
  );
}

export default About;
