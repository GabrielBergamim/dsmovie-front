import { useParams } from 'react-router-dom';
import { FormCard } from 'components/FormCard';

export function Form() {

  const {movieId} = useParams();

  return (
    <FormCard movieId={`${movieId}`}/>
  );
}