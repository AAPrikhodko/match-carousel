import React, {useState} from "react";
import {ICardData} from "../../services/types";
import {getClasses} from "../../services/utils";
import styles from "./Card.module.scss";
import nologo from "../../assets/img/noLogo.png"
import textInfo from "../../languages/en.json"

interface ICardProps {
    cardData: ICardData
}

const Card = (props: ICardProps) => {

    const {cardData} = props
    const {realcategory, status, teams, tournament, dt, result} = cardData
    const [isHomeLogo, setIsHomeLogo] = useState(true)
    const [isAwayLogo, setIsAwayLogo] = useState(true)

    const handleImageLoad = (event: any, type: "home" | "away") => {
        const imageHeight = event.target.naturalHeight;
        const imageWidth = event.target.naturalWidth;
        if (imageHeight === 1 && imageWidth === 1) {
         if (type === "home") setIsHomeLogo(false)
         if (type === "away") setIsAwayLogo(false)
        }
    }

    return (
        <div className={
            getClasses(
                styles.cardWrapper,
                (status.id === 0 || status.id === 60)
                    ? styles.notStartedBg
                    : (status.id === 100)
                        ? styles.endedBg
                        : styles.liveBg
            )}
        >
            <div className={styles.container}>
                <header className={styles.headerWrapper}>
                    <div className={styles.headerCaption}>
                        <span>{tournament.name}</span>
                        <span> - </span>
                        <span>{tournament.seasontypename}</span>
                    </div>
                    <h5 className={styles.headerSubCaption}>{realcategory.name}</h5>
                </header>
                <main className={styles.match}>
                    <div className={styles.matchDescription}>
                        <div className={styles.country}>
                            <div className={styles.flag}>
                                <img
                                    onLoad={(e) => handleImageLoad(e, "home")}
                                    src={isHomeLogo ? teams.home.imgSrc : nologo} alt={textInfo.main.noLogoTeam}
                                />
                            </div>
                            <div className={getClasses(styles.countryCaption, styles.forLargeScreens)}>
                                {teams.home.displayName}
                            </div>
                            <div className={getClasses(styles.countryCaption, styles.forSmallScreens)}>
                                {teams.home.shortName}
                            </div>
                        </div>
                        <div
                            className={
                                getClasses(
                                    styles.matchInfo,
                                    (status.id === 0 || status.id === 60)
                                        ? styles.dateTime
                                        : styles.result
                                )
                            }
                        >
                            {(status.id === 0 || status.id === 60)
                                ? <>
                                    <div>vs</div>
                                    <div>{dt.time}</div>
                                    <div>{dt.date}</div>
                                </>
                                : <>
                                    <div>{result.home}</div>
                                    <div>:</div>
                                    <div>{result.away}</div>
                                </>
                            }
                        </div>
                        <div className={styles.country}>
                            <div className={styles.flag}>
                                <img
                                    onLoad={(e) => handleImageLoad(e, "away")}
                                    src={isAwayLogo ? teams.away.imgSrc : nologo} alt={textInfo.main.noLogoTeam}
                                />
                            </div>
                            <div className={getClasses(styles.countryCaption, styles.forLargeScreens)}>
                                {teams.away.displayName}
                            </div>
                            <div className={getClasses(styles.countryCaption, styles.forSmallScreens)}>
                                {teams.away.shortName}
                            </div>
                        </div>
                    </div>
                    <div className={
                        getClasses(
                            styles.matchStatus,
                            (status.id === 0 || status.id === 60)
                                ? styles.notStartedSt
                                : (status.id === 100)
                                    ? styles.endedSt
                                    : styles.liveSt
                        )}
                    >
                        {status.name}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Card