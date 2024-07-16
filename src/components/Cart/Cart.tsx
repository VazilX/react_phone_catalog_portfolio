import React, { useContext, useEffect, useState } from 'react';
import './Cart.scss';
import { NavLink } from 'react-router-dom';
import { classNameFunc } from '../../helpers/utils/classNameFunc';
import { getLocalStorage } from '../../helpers/utils/getLocalStorage';
import { CartObjType } from '../../helpers/types/CartObjType';
import { MenuContext } from '../../helpers/utils/menuContext';

type Props = {};

const BASE_CLASS = 'cart__link';

export const Cart: React.FC<Props> = () => {
  const { setHasMenu } = useContext(MenuContext);
  const [count, setCount] = useState(0);

  const handlerStorage = () => {
    const storage = getLocalStorage<CartObjType>('cart');

    if (storage) {
      const newCount = Object.keys(storage).length;

      setCount(newCount);
    } else {
      setCount(0);
    }
  };

  useEffect(() => {
    window.addEventListener('storage', handlerStorage);

    handlerStorage();

    return () => window.removeEventListener('storage', handlerStorage);
  }, []);

  return (
    <div className="cart">
      <NavLink
        to="/cart"
        className={ob => classNameFunc(ob, BASE_CLASS, false)}
        onClick={() => setHasMenu(false)}
      />
      {count > 0 && <span className="cart__count">{count}</span>}
    </div>
  );
};
