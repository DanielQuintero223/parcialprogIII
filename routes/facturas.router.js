const express = require("express");
const routes = express.Router();
const facturaSchema = require("../models/factura");





routes.get('/:referenceValue', (req, res) => {
  const { referenceValue } = req.params;
  facturaSchema
          .findOne({ 'Line.ExpenseDetail.Customer.Ref.value': referenceValue })
          .then((data) => res.json(data))
          .catch((error) => res.json({ message: error }))
});



//POST
//Endpoint: http://localhost:3000/api/v1/facturas/factura
routes.post("/factura", (req, res) => {
  const factura = facturaSchema(req.body);
  factura
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => res.json({ message: error }));
});

//GET
//Endpoint: http://localhost:3000/api/v1/facturas
routes.get("/", (req, res) => {
  facturaSchema
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => res.json({ message: error }));
});

//GET
//Endpoint: http://localhost:3000/api/v1/facturas
routes.get("/:facturaId", (req, res) => {
  const { facturaId } = req.params;
  facturaSchema
    .findById(facturaId)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//modificar
// error con amount

routes.put("/:facturaId", (req, res) => {
  const { facturaId } = req.params
  const { DueDate, DocumentID, Status, Line, Vendor, TotalAmt} = req.body
  facturaSchema
      .updateOne(
          { _id: facturaId },
          { $set: { DueDate, DocumentID, Status, Line, Vendor, TotalAmt } }
      )
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }))
})

routes.delete("/:facturaId", (req, res) => {
  const { facturaId } = req.params;
  facturaSchema
    .deleteOne({ _id: facturaId })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});







module.exports = routes;
