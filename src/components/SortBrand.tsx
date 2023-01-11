import React from 'react';
import { useGetBrandsQuery } from '../redux/api';
import { setSort } from '../redux/sort/slice';
import { useDispatch, useSelector } from 'react-redux';
import { sortSelector } from '../redux/sort/selector';

const SortBrand = () => {
  const dispatch = useDispatch();
  const { brandId } = useSelector(sortSelector);
  const { data } = useGetBrandsQuery('brand');

  const onClickBrand = (brand: any) => {
    dispatch(setSort(brand.id));
  };

  return (
    <div>
      <span className={brandId === 0 ? 'active' : ''} onClick={() => dispatch(setSort(0))}>
        All Brands
      </span>
      {data?.map((brand) => (
        <li
          className={brand.id == brandId ? 'active' : ''}
          key={brand.id}
          onClick={() => onClickBrand(brand)}
        >
          {brand.title}
        </li>
      ))}
    </div>
  );
};

export default SortBrand;
