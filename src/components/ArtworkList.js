import ArtworkListItems from "./ArtworkListItem";

const  ArtworkList= ({artworks, selectArtwork }) => {
    // console.log(artworks);
    // console.log(artworks.objectIDs);


    const artworkListItems = artworks.map((artwork)=>{
        return <ArtworkListItems 
                    artwork={artwork} 
                    selectArtwork={selectArtwork}
                />

                //artworks i a list of object IDs
    })

    return(
        <ul>
            {artworkListItems}
        </ul>
    );


}
export default ArtworkList;