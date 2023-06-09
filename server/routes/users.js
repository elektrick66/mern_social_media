import express from 'express';
import {
    getUser,
    getUserFriends,
    addRemoveFriends,
} from "../controllers/user.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//read
router.get("/:id", verifyToken, getUser);