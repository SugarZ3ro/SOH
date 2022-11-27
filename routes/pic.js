const router = require("express").Router();
const Representative = require("../models/Representative");

router.post("/",async (req,res)=>{
    try{
        const newRep = new Representative( req.body);
        const rep = await newRep.save();
        res.status(200).json(rep);
    }catch(err){
        res.status(500).json(err);

    }
});
router.get("/all",async(req,res)=>{
    try{

        let reps ;
        reps = await Representative.find();
    
    res.status(200).json(reps);
} catch (err) {
    res.status(500).json(err);
}
})

module.exports = router ;