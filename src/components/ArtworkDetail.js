const ArtworkDetail = ({selectedArtwork, addFavouritedArtwork}) => {

    const handleClick = () => {
        addFavouritedArtwork(selectedArtwork)
    }
    return(
        <div id="artwork-detail">
            <h2>{selectedArtwork.title}</h2>
            <ul>
                <li>{selectedArtwork.primaryImage}</li>
                <li>Culture:{selectedArtwork.culture}</li>
                <li>Data: {selectedArtwork.objectDate}</li>
                <li>Medium: {selectedArtwork.medium}</li>
                <li>Department: {selectedArtwork.department}</li>
            </ul>
            <button onClick={handleClick}>Add to favourites!</button>
        </div>
    )


}
export default ArtworkDetail;