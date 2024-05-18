/* eslint-disable react/prop-types */
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './map.module.css';
import Pin from '../pin/Pin';

const Map = ({ items }) => {
  console.log(items);

  return (
    <div className={styles.map}>
      <MapContainer
        center={
          items.length === 1
            ? [items[0].latitude, items[0].longitude]
            : [51.505, -0.09]
        }
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '260px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {items.map((item) => (
          <Pin item={item} key={item.longitude} />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
