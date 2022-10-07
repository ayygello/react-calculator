import { useContext } from 'react';
import { StoreContext } from '../store/context';

/**
 * Хук для доступа к объекту хранилища
 * @return {Store|{}}
 */

const useStore = () => useContext(StoreContext);

export default useStore;
