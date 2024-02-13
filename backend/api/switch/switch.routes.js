import express from 'express'
import { requireAuth } from '../../middlewares/requireAuth.middleware.js'
import { getSwitches, getSwitchById } from './switch.controller.js'

const router = express.Router()

router.use(requireAuth)

router.get('/', getSwitches)
router.get('/:id', getSwitchById)

export const switchRoutes = router
