import { Outlet } from 'react-router-dom';
import Header from '../Header';

export default function PageLayout() {
  return (
    <div className='container'>
      <Header />
      <Outlet />
    </div>
  );
}
