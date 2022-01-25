// subscribe => POST /plans/subscribe/:plan_id body => userId

const express = require("express");
const { Plan } = require("../models/plan");


const router = express.Router()


router.post("/:id", async(req, res) => {
    let plan = await Plan.findById(req.params.id);

    plan.users.push(req.body.userid);
    await plan.save()
    res.json(plan)

})

module.exports = router
