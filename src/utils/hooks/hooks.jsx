import { useContext } from 'react';
import { OfficeContext } from '../contexts/contexts';

export function useOffice() {
     const { selectedOffice, handleOfficeChange } = useContext(OfficeContext);
     return { selectedOffice, handleOfficeChange };
}
