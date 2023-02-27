import {useQuery} from "react-query"
import {QueryKeys} from "../services/constants"
import {MatchesService} from "../api/matches"
import {ICarouselParametrs, ICardData} from "../services/types"
import {getImgScr} from "../services/utils"
import textData from "../languages/en.json"

export const useTabData = (tabParametrs: ICarouselParametrs[]) => {
    const {isLoading, data: tabData} = useQuery(
        [QueryKeys.GetCardsData, tabParametrs],
        () => MatchesService.getMatches(),
        {
            select: ({data}) => {
                let result: any[] = []

                tabParametrs.forEach((carouselParamets, carouselIndex) => {
                    const {sportId, max = 10} = carouselParamets
                    const carouselData: ICardData[] | [] = []
                    const sortedBySportId = data.doc[0].data.filter((sportData: any) => {
                        return sportId ? (sportData._sid === sportId) : true
                    })
                    sortedBySportId.forEach((sortedBySportIdItem: any) => {
                        if (sortedBySportIdItem.realcategories.length) {
                            sortedBySportIdItem.realcategories.forEach((realCategory: any, realCategoryIndex: number) => {
                                if (realCategory.tournaments.length) {
                                    realCategory.tournaments.forEach((tournament: any, tournamentIndex: number) => {
                                        if (tournament.matches.length) {
                                            tournament.matches.forEach((match: any, matchIndex: number) => {
                                                if (carouselData.length < max) {
                                                    carouselData.push({
                                                        realcategory: {
                                                            name: realCategory.name
                                                        },
                                                        tournament: {
                                                            name: tournament.name || textData.card.noTournament,
                                                            seasontypename: tournament.seasontypename || textData.card.noSeasonType
                                                        },
                                                        status: {
                                                            id: match.status._id,
                                                            name: match.status.name || textData.card.noStatus
                                                        },
                                                        teams: {
                                                            home: {
                                                                id: match.teams.home.uid,
                                                                shortName: match.teams.home.abbr || textData.card.noShortTeamName,
                                                                displayName: match.teams.home.name || textData.card.noTeamName,
                                                                imgSrc: getImgScr(match.teams.home.uid)
                                                            },
                                                            away: {
                                                                id: match.teams.away.uid,
                                                                shortName: match.teams.away.abbr || textData.card.noShortTeamName,
                                                                displayName: match.teams.away.name || textData.card.noTeamName,
                                                                imgSrc: getImgScr(match.teams.away.uid)
                                                            }
                                                        },
                                                        result: {
                                                            home: match.result.home,
                                                            away: match.result.away,
                                                            winner: match.result.winner
                                                        },
                                                        dt: {
                                                            time: match._dt.time,
                                                            date: match._dt.date
                                                        }
                                                    } as never)
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                    result.push(carouselData)
                })
                return result
            },
            onError: (error) => {
                alert(error)
            }
        }
    )
    return {isLoading, tabData}
}