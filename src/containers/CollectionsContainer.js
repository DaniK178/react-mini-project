import { useState, useEffect } from "react";
import ArtworkDetail from "../components/ArtworkDetail";
import ArtworkList from "../components/ArtworkList";
import FavouriteArtworkList from "../components/FavouriteArtworkList";

const CollectionsContainer = () => {

    const [artworkIDs, setArtworkIDs] = useState([]);
    const [artworks, setArtworks] = useState([]);
    const [favouriteArtworkList, setFavouriteArtworkList] = useState([]);
    const [selectedArtwork, setSelectedArtwork] = useState(null);



    const fetchArtworkbyID = async () => {
        const splicedArtwork = artworkIDs.slice(56,65)
        const artworks = Promise.all(splicedArtwork.map( async (artworkID) => {
            const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + artworkID);
            const jsonArtwork = await response.json();
            return (jsonArtwork)
        }))


        // [Promise<pending>, Promise<pending>]

        setArtworks(await artworks)        
    }


    const fetchArtworkIDs = async () => {
        const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?q=Ghana");
        const jsonArtworkID = await response.json();

        setArtworkIDs(jsonArtworkID.objectIDs); // [123124,124124,112412,12421]
        fetchArtworkbyID() 
        //console.log(jsonArtworkID)
    }
    // const ArtworkIDs = artworks.objectIDs
    // console.log(ArtworkIDs);
    


    // const getArtworkObjects = 
    // console.log(getArtworkObjects)

    // 
    //we have get get an array of object IDs
    //we can get the objects by ID
    //we want to get all the objects for:  the objectIDs in the fetchArtwork arrays, get all the objects that have the ID in the request

    
    

    useEffect(() => {
        fetchArtworkIDs();
        
    }, [])

    const addFavouritedArtwork = (artwork) =>{
        if(favouriteArtworkList.includes(artwork)){
            alert("You can't add this artwork more than once!");
        } else {
            setFavouriteArtworkList([...favouriteArtworkList, artwork])
        }
    }

    const selectArtwork = (artwork) => {
        setSelectedArtwork(artwork);
    }

    return(
      <div id= "main-container">
        <ArtworkList artworks={artworks} selectArtwork={selectArtwork}/>

      {selectedArtwork?
        <ArtworkDetail
            selectedArtwork = {selectedArtwork}
            addFavouritedArtwork = {addFavouritedArtwork}
            />
            :  <div></div>
        }

        <FavouriteArtworkList
            favouriteArtworkList = {favouriteArtworkList}
            selectArtwork = {selectArtwork}
        />

      </div>

    );

    }

   

export default CollectionsContainer;


   // const filterArtwork = () => {
    //     artworks.filter((artwork) =>
    // artwork.country.includes("Ghana"))

    // }
