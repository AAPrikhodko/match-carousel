import React from "react";
import styles from "./MatchCarousel.module.scss";
import {Carousel} from "antd";
import Card from "../Card/Card";
import {ICardData, ICarouselParametrs} from "../../services/types";
import textData from "../../languages/en.json"
import {displayCarouselParams} from "../../services/utils";

interface IMatchCarouselProps {
    carouselData: ICardData[]
    carouselParameters: ICarouselParametrs
}

const MatchCarousel = (props: IMatchCarouselProps) => {

    const {carouselData, carouselParameters} = props

    return (
        <>
            <div className={styles.matchCarouselWrapper}>
                <div className={styles.carouselInfo}>
                    {textData.carousel.description}
                    {displayCarouselParams(carouselParameters)}
                </div>
                <Carousel
                    adaptiveHeight
                    autoplay
                    autoplaySpeed={3000}
                    pauseOnFocus={false}
                    pauseOnHover={false}
                    className={styles.customCarousel}
                >
                    {
                        carouselData.map((cardData: ICardData) => {
                            return (
                                <Card cardData={cardData}/>
                            )
                        })
                    }
                </Carousel>
            </div>
        </>
    )
}

export default MatchCarousel