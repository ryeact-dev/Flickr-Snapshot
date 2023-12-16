import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles['main-nav']}>
      <ul>
        <li>
          <NavLink to='/'>Mountain</NavLink>
        </li>
        <li>
          <NavLink to='/beach'>Beaches</NavLink>
        </li>
        <li>
          <NavLink to='/bird'>Birds</NavLink>
        </li>
        <li>
          <NavLink to='/food'>Food</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
