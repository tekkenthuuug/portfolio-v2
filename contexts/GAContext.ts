import { GA4ReactResolveInterface } from 'ga-4-react/dist/models/gtagModels';
import { createContext } from 'react';

const GAContext = createContext<null | GA4ReactResolveInterface>(null);

export default GAContext;
