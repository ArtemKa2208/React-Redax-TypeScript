import {fetchFilm} from '../action/movieAction';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../hooks/useTypedSelector';
import React from 'react';
export const Pages: React.FC = () => {
  const pages = useTypedSelector((state) => state.pages);
  const search = useTypedSelector((state) => state.search);
  const dispatch = useDispatch();
  let content = [];
  const newPages = Math.ceil(+pages / 5);
  let y = 1;
  for (let i = 0; i < newPages; i++) {
    content.push(<button className='button-page' onClick={() => dispatch(fetchFilm([search, i * 5, false]))} >{y}</button>);
    y++;
  }
  return (
    <div className='pages-navigations'>
      <div>
        {content}
      </div>
    </div>
  );
};
