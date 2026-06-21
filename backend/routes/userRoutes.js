console.log("User routes loaded");

const express = require("express");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// Test Route
router.get("/test", (req, res) => {
    res.send("User routes working");
});


// Follow User
router.put("/:id/follow", authMiddleware, async (req, res) => {

    try {

        if (req.params.id === req.user.id) {
            return res.status(400).json({
                message: "Cannot follow yourself"
            });
        }

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (user.followers.includes(req.user.id)) {
            return res.status(400).json({
                message: "Already following"
            });
        }

        user.followers.push(req.user.id);
        await user.save();

        const currentUser = await User.findById(req.user.id);

        currentUser.following.push(req.params.id);
        await currentUser.save();

        res.json({
            message: "User followed"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// Unfollow User
router.put("/:id/unfollow", authMiddleware, async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        user.followers = user.followers.filter(
            id => id.toString() !== req.user.id
        );

        await user.save();

        const currentUser = await User.findById(req.user.id);

        currentUser.following = currentUser.following.filter(
            id => id.toString() !== req.params.id
        );

        await currentUser.save();

        res.json({
            message: "User unfollowed"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// Search User (KEEP ABOVE /:id)
router.get("/search/:username", async (req, res) => {

    try {

        const users = await User.find({
            username: {
                $regex: req.params.username,
                $options: "i"
            }
        }).select("-password");

        res.json(users);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// Get User Profile (KEEP LAST)
router.get("/:id", async (req, res) => {

    console.log("Profile route hit:", req.params.id);

    try {

        const user = await User.findById(req.params.id)
            .select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json(user);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;