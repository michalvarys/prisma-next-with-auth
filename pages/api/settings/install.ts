import prisma from '../../../lib/prisma'
import installDatabase from '../../../lib/prisma/install/install'
import { ApiHandler } from '../../../src/types'

const handler: ApiHandler<any, any, any> = async (req, res) => {
  if (req.method === 'POST') {
    // TODO options
    await installDatabase(prisma)
    res.status(200).json({ data: true })
    return
  }

  res.status(404).json({ error: 'Unhandled endpoint' })
}

export default handler
