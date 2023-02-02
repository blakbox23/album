/* eslint-disable react/prop-types */

import { useSelector } from 'react-redux';
import { CgProfile } from 'react-icons/cg';
import { FaMousePointer } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoAlbumsOutline } from 'react-icons/io5';

function UserItem({
  id, name, phone, website, email,
}) {
  const { albums } = useSelector((state) => state.albums);
  const userAlbums = albums.filter((album) => album.userId === id);

  const IconsStyle = { color: 'rgb(25, 116, 134)' };

  return (
    <>
      <div className="h-100 bg-white px-2 py-3 rounded">

        <div>

          <p className="border-bottom py-3 ps-3 fw-bold text-muted">
            <span style={{ fontSize: '1.5rem' }}><CgProfile /></span>
            {' '}
            <span>{name}</span>
          </p>
        </div>

        <div className="text-dark user-details p-2">
          <p className="w-100">
            {' '}
            <HiOutlineMailOpen style={IconsStyle} />
            {' '}
            {email}
          </p>
          <p>
            {' '}
            <FaMousePointer style={IconsStyle} />
            {' '}
            {website}
          </p>
          <p>
            {' '}
            <IoAlbumsOutline style={IconsStyle} />
            {' '}
            {userAlbums.length}
            {' '}
            albums
          </p>
          <p>
            {' '}
            <BsFillTelephoneFill style={IconsStyle} />
            {' '}
            {phone}
          </p>

        </div>
      </div>
    </>
  );
}

// VideoListItem.propTypes = {
//   video: PropTypes.object.isRequired,
//   onVideoSelect: PropTypes.func.isRequired,
// };

export default UserItem;
