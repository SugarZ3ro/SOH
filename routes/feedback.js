const router = require('express').Router();
const Feedback = require('../models/Feedback');

router.post("/",async (req,res)=>{
    try{
        const newFeedback = new Feedback( req.body);
        const feedback = await newFeedback.save();
        res.status(200).json(rep);
    }catch(err){
        res.status(500).json(err);

    }
});
router.get("/all",async(req,res)=>{
    try{

        let feedbacks ;
        feedbacks = await Feedback.find();
    
    res.status(200).json(feedbacks);
} catch (err) {
    res.status(500).json(err);
}
})

module.exports = router ;