const express = require("express");
const Post = require("../models/Post");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// Create Post
router.post("/", authMiddleware, async (req, res) => {

    try {

        const { text, image } = req.body;

        if (!text && !image) {
            return res.status(400).json({
                message: "Text or image is required"
            });
        }

        const post = await Post.create({
            userId: req.user.id,
            username: req.user.username,
            text,
            image
        });

        res.status(201).json(post);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// Get Feed
router.get("/", async (req, res) => {

    try {

        const posts = await Post.find()
            .sort({ createdAt: -1 });

        res.json(posts);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// Test Route
router.get("/test", (req, res) => {
    res.send("Post routes working");
});


// Get Posts By User
router.get("/user/:userId", async (req, res) => {

    try {

        const posts = await Post.find({
            userId: req.params.userId
        }).sort({ createdAt: -1 });

        res.json(posts);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// Toggle Like / Unlike
console.log("Like route loaded");

router.put("/:id/like", authMiddleware, async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        const alreadyLiked = post.likes.find(
            like => like.userId === req.user.id
        );

        if (alreadyLiked) {

            post.likes = post.likes.filter(
                like => like.userId !== req.user.id
            );

        } else {

            post.likes.push({
                userId: req.user.id,
                username: req.user.username
            });

        }

        await post.save();

        res.json(post);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// Comment Route
console.log("Comment route loaded");

router.post("/:id/comment", authMiddleware, async (req, res) => {

    try {

        const { comment } = req.body;

        if (!comment) {
            return res.status(400).json({
                message: "Comment is required"
            });
        }

        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        post.comments.push({
            userId: req.user.id,
            username: req.user.username,
            comment
        });

        await post.save();

        res.json(post);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// Delete Comment
router.delete("/:postId/comment/:commentId", authMiddleware, async (req, res) => {

    try {

        const post = await Post.findById(req.params.postId);

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        const comment = post.comments.id(req.params.commentId);

        if (!comment) {
            return res.status(404).json({
                message: "Comment not found"
            });
        }

        if (comment.userId !== req.user.id) {
            return res.status(403).json({
                message: "Unauthorized"
            });
        }

        comment.deleteOne();

        await post.save();

        res.json({
            message: "Comment deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// Delete Post
router.delete("/:id", authMiddleware, async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        if (post.userId !== req.user.id) {
            return res.status(403).json({
                message: "Unauthorized"
            });
        }

        await post.deleteOne();

        res.json({
            message: "Post deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;