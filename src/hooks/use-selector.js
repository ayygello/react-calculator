import { useEffect, useState } from 'react';
import shallowEqual from 'shallowequal';
import useStore from './use-store';

/**
 * Хук для доступа к объекту хранилища
 * @return {Store|{}}
 */
const useSelector = (selector) => {
  const store = useStore();

  const [state, setState] = useState(() => selector(store.getState()));

  useEffect(() => {
    // Подписка на последующие изменения в store
    return store.subscribe(() => {
      // Новая выборка
      const newState = selector(store.getState());
      // Установка выбранных данных, если они изменились
      setState((prevState) => {
        // Сравнение с предыдущей выборкой
        return shallowEqual(prevState, newState) ? prevState : newState;
      });
    });
  }, []);

  return state;
};

export default useSelector;
