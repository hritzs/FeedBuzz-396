import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Hero = ({spaces}) => {

    const navigate = useNavigate();

    function reviews(spaceId)
    {
        navigate(`/Reviews/${spaceId}`);
    }

  return (
    <div className ='space-carousel-container'>
      <Carousel>
        {
            spaces?.map((space) =>{
                return(
                    <Paper key={space.imdbId}>
                        <div className = 'space-card-container'>
                            <div className="space-card" style={{"--img": `url(${space.backdrops[0]})`}}>
                                <div className="space-detail">
                                    <div className="space-poster">
                                        <img src={space.poster} alt="" />
                                    </div>
                                    <div className="space-title">
                                        <h4>{space.title}</h4>
                                    </div>
                                    <div className="space-buttons-container">
                                        <Link to={`/Trailer/${space.trailerLink.substring(space.trailerLink.length - 11)}`}>
                                            <div className="play-button-icon-container">
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link>

                                        <div className="space-review-button-container">
                                            <Button variant ="info" onClick={() => reviews(space.imdbId)} >Reviews</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            })
        }
      </Carousel>
    </div>
  )
}

export default Hero
