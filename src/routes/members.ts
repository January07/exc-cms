import express, { Request, Response } from "express"
import Member from "../models/member"
import { Types } from "mongoose"

const router = express.Router()

// Get all members
router.get('/', async (_req: Request, res: Response) => {
    const members = await Member.find()
    res.json(members)
})

// Get a single member by ID
router.get('/:id', async (req: Request, res: Response) => {
    const memberId = req.params.id

    // Check if the provided member ID is a valid ObjectId
    if (!Types.ObjectId.isValid(memberId)) return res.status(400).json({ message: 'Invalid member ID' })

    const member = await Member.findById(memberId)
    if (!member) return res.status(404).json({ message: 'Member not found' })
    res.json(member)
})

// Create a new member
router.post('/', async (req: Request, res: Response) => {
    const { name, email } = req.body
    const newMember = new Member({ name, email })
    const savedMember = await newMember.save()
    res.status(201).json(savedMember)
})

// Update a member by ID
router.put('/:id', async (req: Request, res: Response) => {
    const memberId = req.params.id
    const { name, email } = req.body
    const updatedMember = await Member.findByIdAndUpdate(memberId, { name, email }, { new: true })
    if (!updatedMember) return res.status(404).json({ message: 'Member not found' })
    res.json(updatedMember)
})

// Delete a member by ID
router.delete('/:id', async (req: Request, res: Response) => {
    const memberId = req.params.id
    const deletedMember = await Member.findByIdAndRemove(memberId)
    if (!deletedMember) return res.status(404).json({ message: 'Member not found' })
    res.json(deletedMember)
})

export default router