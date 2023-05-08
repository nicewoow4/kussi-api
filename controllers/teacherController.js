const login = require("../models/login")

exports.loginUser = (req, res) => {
  const { username } = req.params
  console.log(username)
  login.findOne({ username: username }).exec((err, teacher) => {
    res.json(teacher)
  })
}
