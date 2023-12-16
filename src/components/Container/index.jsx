import { useContext, useEffect } from 'react';
import { PhotoContext } from '../../context/PhotoContext';
import Gallery from '../Gallery';
import Loader from '../Loader';

import styles from './Container.module.css';

export default function Container({ searchTerm }) {
  const { images, loading, runSearch } = useContext(PhotoContext);
  useEffect(() => {
    runSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div className={styles['photo-container']}>
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
}
