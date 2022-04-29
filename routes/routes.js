import express from "express";

const router = express.Router()

router.get("/getscrap", (req, res)=>{

res.send("working getScrap")

})

export default router;