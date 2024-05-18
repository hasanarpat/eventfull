/* eslint-disable react/prop-types */
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import styles from './pin.module.css';

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className={styles.popupContainer}>
          <img src={item.img} alt='' />
          <div className={styles.textContainer}>
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.seat}</span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
