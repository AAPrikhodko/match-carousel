import React, {useState} from 'react';
import styles from './App.module.scss';
import {Tabs} from "antd";
import MatchCarousel from "./components/MatchCarousel/MatchCarousel";
import {ICarouselParametrs} from './services/types';
import {useTabData} from './hooks/useTabData';
import textData from "./languages/en.json"

function App() {

    const tabsParametrs: ICarouselParametrs[][] = [
        [
            {max: 10}
        ],
        [
            {sportId: 1},
            {sportId: 2},
        ],
    ]
    const [currentTab, setCurrentTab] = useState(0)
    const {isLoading, tabData: currentTabData} = useTabData(tabsParametrs[currentTab])

    const onChangeHandler = (key: string) => setCurrentTab(Number(key))

    return (
        <div className={styles.wrapper}>
            <div className={styles.description}>{textData.main.caption}</div>
            <Tabs
                className={styles.customTabs}
                onChange={onChangeHandler}
                type="card"
                size={"large"}
                centered
                items={tabsParametrs.map((tabParametrs, tabIndex) => {
                    return {
                        label: `${textData.tab.tabCaption} ${tabIndex + 1}`,
                        key: String(tabIndex),
                        children: isLoading
                            ? <div className={styles.loading}>{textData.main.loading}</div>
                            : <>
                                {
                                    currentTabData && (currentTab === tabIndex) && tabParametrs
                                        .map((_, carouselIndex) => {
                                            return (
                                                <>
                                                    <MatchCarousel
                                                        carouselData={currentTabData[carouselIndex]}
                                                        carouselParameters={tabsParametrs[tabIndex][carouselIndex]}
                                                    />
                                                    {(tabsParametrs[tabIndex].length - 1 !== carouselIndex) && < hr/>}
                                                </>
                                            )
                                        })
                                }
                            </>
                    };
                })}
            />
        </div>
    );
}

export default App;
