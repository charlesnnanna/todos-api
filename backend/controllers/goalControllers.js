const asyncHandler = require ('express-async-handler')


//  @desc   Get goals
//  @route  GET /api/goal/
// access   private
const getGoals = asyncHandler (async (req, res) => {
    res.status(200).json({
        message : "GET goals"
    })
})



//  @desc   Create goals
//  @route  POST /api/goal/
// access   private
const createGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }
    res.status(200).json ({
        message : "CREATE goals"
    })
})


//  @desc   Update goal
//  @route  PUT /api/goal/:id
// access   private
const updateGoal = asyncHandler(async(req, res) => {
    res.status(200).json ({
        message : `Update goal ${req.params.id}`
    })
})


//  @desc   Delete goal
//  @route  DELETE /api/goal/:id
// access   private
const deleteGoal = asyncHandler ( async (req, res, next) => {
    res.status(200).json ({
        message : `Delete goal ${req.params.id}`
    })
})





module.exports = {
    getGoals,
    createGoals,
    updateGoal,
    deleteGoal,

}