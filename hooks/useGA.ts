import { useContext } from 'react';
import GAContext from '../contexts/GAContext';

const useGA = () => {
  const GA = useContext(GAContext);

  return GA;
};

export default useGA;
