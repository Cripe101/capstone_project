import jwt from 'jsonwebtoken'

// Admin authentication middleware
const authAdmin = (req, res, next) => {
  try {

    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.json({ success: false, message: "Unauthorized access" })
    }
    const adminToken = authHeader.split(' ')[1]
    const tokenDecode = jwt.verify(adminToken, process.env.JWT_SECRET)
    if(tokenDecode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Unauthorized access" })
    }

    next()

  } catch (error) {

    return res.json({ success: false, message: error.message })

  }
}

export default authAdmin