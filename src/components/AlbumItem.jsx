import { TbPhoto } from 'react-icons/tb';
import PropTypes from 'prop-types';

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

AlbumItem.propTypes = {
  title: PropTypes.string.isRequired,

};

export default AlbumItem;
