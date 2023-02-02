/* eslint-disable react/prop-types */

import { TbPhoto } from 'react-icons/tb';

function AlbumItem({ title }) {
  return (
    <>
      <div className=" p-4 m-3 text-dark album-item">
        {' '}
        <TbPhoto style={{ fontSize: '1.7rem', color: 'grey', margin: '0.4rem' }} />
        {title}
      </div>
    </>
  );
}

export default AlbumItem;
