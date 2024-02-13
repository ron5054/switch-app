import { switchService } from './switch.service.js'
import { logger } from '../../services/logger.service.js'

export async function getSwitches(req, res) {
  try {
    logger.debug('Getting Switches:', req.query)
    const filterBy = {
      txt: req.query.txt || '',
      pageIdx: req.query.pageIdx
    }
    const switches = await switchService.query(filterBy)
    res.json(switches)
  } catch (err) {
    logger.error('Failed to get Switches', err)
    res.status(400).send({ err: 'Failed to get Switches' })
  }
}

export async function getSwitchById(req, res) {
  try {
    const switchId = req.params.id
    const switchToGet = await switchService.getById(switchId)
    res.json(switchToGet)
  } catch (err) {
    logger.error('Failed to get switch', err)
    res.status(400).send({ err: 'Failed to get switch' })
  }
}