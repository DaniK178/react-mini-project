import ArtworkListItems from "./ArtworkListItem";

const FavouriteArtworkList = ({favouriteArtworkList, selectArtwork}) => {
    const favouriteArtworkListItems = favouriteArtworkList.map((artwork) => {
        return <ArtworkListItems artwork={artwork} selectArtwork={selectArtwork}/>
    })
    return(
        <ul>
            {favouriteArtworkListItems}
        </ul>
    );


}
export default FavouriteArtworkList;