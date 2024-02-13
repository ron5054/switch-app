import { httpService } from './http.service.js'
import switchesJson from '../data/data.json' assert {type: 'json'}

const BASE_URL = 'switch/'

export const switchService = {
    getById,
    getSearchRes,
    getSwitchesForHome,
}

async function getById(switchId) {
    return await httpService.get(`${BASE_URL}${switchId}`)
}

async function getSwitchesForHome() {
    return await httpService.get(`${BASE_URL}`)
}

async function getSearchRes(query) {
    if (!query) return []
    return await httpService.get(`${BASE_URL}/search/${query}`)
}