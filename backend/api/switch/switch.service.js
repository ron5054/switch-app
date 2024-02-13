import { dbService } from '../../services/db.service.js'
import { logger } from '../../services/logger.service.js'
import mongodb from 'mongodb'

const { ObjectId } = mongodb
const PAGE_SIZE = 20

export const switchService = {
    query,
    getById,
}

async function query(filterBy = { txt: '' }) {
    try {
        const criteria = {
            vendor: { $regex: filterBy.txt, $options: 'i' }
        }
        const collection = await dbService.getCollection('switch')
        var switchCursor = await collection.find(criteria)

        if (filterBy.pageIdx !== undefined) {
            switchCursor.skip(filterBy.pageIdx * PAGE_SIZE).limit(PAGE_SIZE)
        }

        const switches = switchCursor.toArray()
        return switches
    } catch (err) {
        logger.error('cannot find switches', err)
        throw err
    }
}

async function getById(switchId) {
    try {
        const collection = await dbService.getCollection('switch')
        const switchToGet = collection.findOne({ _id: ObjectId(switchId) })
        return switchToGet
    } catch (err) {
        logger.error(`while finding switch ${switchId}`, err)
        throw err
    }
}