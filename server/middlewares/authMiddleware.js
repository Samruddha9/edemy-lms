import { clerkClient } from "@clerk/express"
import jwt from "jsonwebtoken"

export const protectEducator = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        if (!token) return res.json({ success: false, message: 'Not Authenticated' })
        const decoded = jwt.decode(token)
        const userId = decoded?.sub
        if (!userId) return res.json({ success: false, message: 'Not Authenticated' })
        req.userId = userId
        const response = await clerkClient.users.getUser(userId)
        if (response.publicMetadata.role !== 'educator') {
            return res.json({ success: false, message: 'Unauthorized Access' })
        }
        next()
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export const protectUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        if (!token) return res.json({ success: false, message: 'Not Authenticated' })
        const decoded = jwt.decode(token)
        const userId = decoded?.sub
        if (!userId) return res.json({ success: false, message: 'Not Authenticated' })
        req.userId = userId
        req.auth = { userId }
        next()
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}