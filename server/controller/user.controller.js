const router = require('express').Router();
const userModel = require('../model/user.model')
const buildQuery = require('../database/build.query')
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, "../login/public/uploads")
    },
    filename: (req, file, callback)=>{
        callback(null, crypto.randomBytes(16).toString('hex') + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage
});

router.post('/', upload.single('file'), (req, res) => {
    // const values = Object.values(req.body);
    // if (values.includes("")) return res.json({success: false, message:"some fields are empty"})
    // const picturePath = "http://localhost:3000/uploads/" + req.file.filename;
    // req.body.passport = picturePath;
    const data = buildQuery.insert(req.body);
    userModel.create("main_table",data.fields, data.values, new Array(data.values.length).fill('?'), (err, result) => {
        if(err) return res.send(err);
        return res.json({success: true, message:"signup successful"});
    })
})

router.get('/', (req, res) => {
    return res.send("test");
})

module.exports = router;