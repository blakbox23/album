import { useSelector } from "react-redux";


function UserItem({id, name}){
    
    const { albums } = useSelector((state) => state.albums);
    const userAlbums = albums.filter((album)=> album.userId === id)

    return(
        <>
        <p> count = {userAlbums.length}</p>
        <p> name = {name}</p>
        <p> id = {id}</p>
        </>
    )
}

export default UserItem