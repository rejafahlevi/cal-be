import express from "express";
import { Register, Login, getUsers, Logout } from "../controller/users.js";
import { verifyToken } from "../middleware/verify_token.js";
import { refreshToken } from "../controller/refreshToken.js";

const router = express.Router();

router.get('/users', verifyToken , getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

export default router;
