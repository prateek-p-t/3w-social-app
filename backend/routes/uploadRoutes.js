const express = require("express");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {

    console.log("CONTENT TYPE:", req.headers["content-type"]);
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    if (!req.file) {
        return res.status(400).json({
            message: "No image uploaded"
        });
    }

    res.json({
        imageUrl: `/uploads/${req.file.filename}`
    });

});

module.exports = router;