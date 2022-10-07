const ArtworkListItems = ({artwork, selectArtwork}) => {

    const handleClick = () => {
        selectArtwork(artwork);
    }
return <p>{artwork.title}</p>
    // return (
    //     <li onClick={handleClick}>{artwork.primaryImage},{artwork.title}, {artwork.culture} {artwork.department}, </li>
    // );


}
export default ArtworkListItems;