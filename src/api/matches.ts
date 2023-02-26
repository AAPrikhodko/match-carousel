import axios from "axios";

const API_URL = "https://lmt.fn.sportradar.com/demolmt/en/Etc:UTC/gismo/event_fullfeed/0/1/12074"
axios.defaults.baseURL = API_URL

export const MatchesService = {
    async getMatches() {
        return axios.get('')
    }
}