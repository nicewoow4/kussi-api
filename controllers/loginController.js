const User = require("../models/login")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



exports.register = async (req, res) => {
  try {
    //check
    const { tidcard, username, password, t_fname, t_lname, schoolid, schoolname, role, nametitle } = req.body
    var user = await User.findOne({ username: username })
    //console.log(user , username)
    if (user) {
      return res.status(400).send("User Already exists")
    }
    const salt = await bcrypt.genSalt(10)
    user = new User({
      tidcard,
      username,
      password,
      nametitle,
      t_fname,
      t_lname,
      schoolid,
      schoolname,
      role
    })
    //Encrypt
    user.password = await bcrypt.hash(password, salt)
    await user.save()
    res.send('Register Success')

  } catch (err) {
    console.log(err)
    res.status(500).send('ServerEroor')
  }
}




//login
exports.login = async (req, res) => {
  try {
    //check
    const { username, password } = req.body
    var user = await User.findOneAndUpdate({ username: username }, { new: true })
    console.log(user, username)
    if (user) {

      //check password
      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).send('User or Password invalid !!')
      }
      //Payload
      const payload = {
        user: {
          username: user.username,
          role: user.role,
          fname: user.t_fname,
          lname: user.t_lname,
          schoolid: user.schoolid
        }
      }
      //Generate Token 
      jwt.sign(payload,
        'jwtSecret',
        { expiresIn: 25200 }, (err, token) => {
          if (err) throw err;
          res.json({ token, payload })
        })

    } else {
      return res.status(400).send('User Not found')

    }

  } catch (err) {
    res.status(500).send('ServerEroor')
    console.log(err)
  }
}


exports.currentUser = async (req, res) => {
  try {
    //model User
    console.log(req.user)
    const user = await User.findOne({ username: req.user.username }).select('-password').exec();
    console.log("user", user)
    res.send(user)

  } catch (err) {
    res.status(500).send('ServerEroor')
    console.log(err)
  }
}

exports.userdata = (req, res) => {
  const { username } = req.params
  User.findOne({ username: username }).exec((err, user) => {
    res.json(user)
  })
}


exports.changepassword = async (req, res) => {

  try {
    //code
    var { tidcard, password } = req.body.values
    //console.log(newPassword)
    //gen salt
    const salt = await bcrypt.genSalt(10)
    //encrypt
    var enPassword = await bcrypt.hash(password, salt)
    console.log(enPassword)


    var user = await User.findOneAndUpdate({ tidcard: tidcard }, { password: enPassword })


    //console.log(req.body.values.password)
    res.send("hello update user")
  }
  catch (err) {
    res.status(500).send('ServerEroor')
    console.log(err)
  }
}




