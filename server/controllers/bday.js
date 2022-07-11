import express from 'express';
import mongoose from 'mongoose';

import Birthday from '../models/bday.js'

export const getBday = async (req, res) => {
    const creator = req.user.id;

    try {
        const posts = await Birthday.find({ creator });
        res.json(posts)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


export const createBday = async (req, res) => {
    const post = req.body
    const userID = req.user.id

    
    const newBday = new Birthday({
        ...post, creator: userID, createdAt: new Date().toISOString()
    })

    try {
        await newBday.save();
        res.status(201).json(newBday)
    } catch (error) {
        res.status(409).json({message: error.message})
    }

}