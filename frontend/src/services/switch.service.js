import { httpService } from './http.service.js'
// import switchesJson from '../data/data.json' assert {type: 'json'}

const BASE_URL = 'switch/'

export const switchService = {
    getSwitches,
    getById,
}

async function getSwitches(filterBy = {}) {
    return await httpService.get(`${BASE_URL}`, filterBy)
}

async function getById(switchId) {
    return await httpService.get(`${BASE_URL}${switchId}`)
}