const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

/* ***************************
 *  Build inventory detail view
 * ************************** */
invCont.buildByInvId = async function (req, res, next) {
  const inv_id = req.params.invId
  const itemData = await invModel.getVehicleByInvId(inv_id)
  let nav = await utilities.getNav()

  if (!itemData) {
    return res.status(404).render("errors/404", {
      title: "Vehicle Not Found",
      nav
    })
  }

  const details = await utilities.buildVehicleDetail(itemData)

  res.render("./inventory/detail", {
    title: `${itemData.inv_make} ${itemData.inv_model}`,
    nav,
    details
  })
}



  module.exports = invCont