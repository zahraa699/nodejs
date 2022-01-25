const express = require("express");
const { Plan } = require("../models/plan");

const router = express.Router()

router.get("/", async(req, res) => {
    const plans = await Plan.find()
    res.json(plans)
})

router.get("/:id", async(req, res) => {
    const plan = await Plan.findById(req.params.id);
    res.json(plan)
})

router.post("/", async(req, res) => {
    console.log(req.user);
    if (req.user.isAdmin) {
        const newPlan = new Plan(req.body)
        const result = await newPlan.save()
        return res.json(result)

    }
    res.status(401).json({ message: "must be admin" })
});



router.put("/:id", async(req, res) => {
    console.log(req.user);
    if (req.user.isAdmin) {
        const plan = await Plan.findById(req.params.id);
        plan.name = req.body.name
        plan.price = req.body.price
        await plan.save();
        res.json(plan)

    }
    res.status(401).json({ message: "must be admin" })

    await plan.save();
    res.json(plan)
})

router.delete("/:id", async(req, res) => {
    if (req.user.isAdmin) {

        const result = await Plan.findByIdAndDelete(req.params.id);
        res.json(result)

    }
    res.status(401).json({ message: "must be admin" })
})

module.exports = router