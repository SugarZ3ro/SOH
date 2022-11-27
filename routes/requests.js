const router = require("express").Router();
const Req = require("../models/Request");

router.post("/add",async (req,res)=>{
    try{
        const newReq = new Req(req.body);
        const requests = await newReq.save();
        res.status(200).json(requests);
    }catch(err){
        res.status(500).json(err);
    }
});

router.get("/all",async(req,res)=>{
    try{
        let requests ;
        requests = await Req.find();
        res.status(200).json(requests);
} catch (err) {
        res.status(500).json(err);
}
})
module.exports = router ;