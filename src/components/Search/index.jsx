import { useParams } from 'react-router-dom';
import Container from '../Container';

export default function Search() {
  const params = useParams();

  return (
    <div>
      <h2>{params.id} Images</h2>
      <Container searchTerm={params.id} />
    </div>
  );
}
