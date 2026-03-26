import { Router } from 'express'
import { generateImage, getGenerationStatus } from '@/controllers/aiController'
import { aiStatusCache } from '@/middleware/cacheMiddleware'
import { authenticate } from '@/middleware/authMiddleware'

import { aiGenerationLimiter } from '@/middleware/rateLimitMiddleware'

const router = Router()

router.post('/generate', authenticate, aiGenerationLimiter, generateImage)
router.get('/status/:id', authenticate, aiStatusCache, getGenerationStatus)

export default router
