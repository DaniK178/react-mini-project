const ArtworkListItems = ({artwork, selectArtwork}) => {

    const handleClick = () => {
        selectArtwork(artwork);
    }
//return <p>{artwork.title}</p>
    return (
        <p onClick={handleClick}><img src = {artwork.primaryImage} id = "artworkpicture" alt="an artwork "/>,{artwork.title}, {artwork.culture} {artwork.department}, </p>
    );


}
export default ArtworkListItems;