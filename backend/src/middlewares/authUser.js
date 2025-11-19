import jwt from 'jsonwebtoken'

// User authentication middleware
const authUser = (req, res, next) => {
  try {

    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.json({ success: false, message: "Unauthorized access" })
    }
    const token = authHeader.split(' ')[1]
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = tokenDecode.id

    next()

  } catch (error) {
    return res.json({ success: false, message: error.message })
  }
}

export default authUser