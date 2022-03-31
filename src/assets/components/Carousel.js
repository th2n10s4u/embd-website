import React from "react"
import { Paper, Fab, Button } from '@mui/material'
import Carousel from "react-material-ui-carousel"
import BeachPhoto from "../images/Carousel-Beach-Image.png"
import ForestPhoto from "../images/Carousel-Forest-Couple-Image.png"
import GroupDance from "../images/Carousel-Group-Dance.png"
import WeddingDance from "../images/Carousel-Weeding-Image.png"



export function MainCarousel(props) {
    var items = [
        {
            imgurl:BeachPhoto 
        },
        // {
        //     imgurl:ForestPhoto    
        // },
        // {
        //     imgurl:GroupDance
        // },
        // {
        //     imgurl:WeddingDance
        // }
    ]
  
    return (
        
        <Carousel sx= {{ height: "100%" }}>
        {
            items.map( (item, i) => <Item key={i} item={item} /> )
        
        }
    </Carousel>
    
    )
}

function Item({ item }) {
    return (
        <Paper>
            <img src={item.imgurl} ></img>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
