import { useDispatch } from 'react-redux';
import { removeAllUsers } from '../store/actions';

const DeleteAllUsers = () => {
  const dispatch = useDispatch();

  const deleteAllUsers = () => {
    dispatch(removeAllUsers());
  };
  return (
    <button
      style={{ marginTop: '2rem' }}
      className="btn"
      onClick={() => deleteAllUsers()}
    >
      DeleteAllUsers
    </button>
  );
};
export default DeleteAllUsers;
