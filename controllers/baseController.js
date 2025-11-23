const utilities = require("../utilities/")
const baseController = {}

baseController.buildHome = async function(req, res){
  const nav = await utilities.getNav()
  res.render("index", {title: "Home", nav})
}

// 🔥 Intentional 500 error controller
baseController.causeError = async function (req, res) {
  // This immediately throws an error for testing
  throw new Error("Intentional test error thrown on purpose.");
};

module.exports = baseController