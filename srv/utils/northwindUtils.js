const getCustomers = async (srv) => {
  const { NorthwindCustomers } = srv.entities;

  // connect to Northwind
  const Northwind_Service = await cds.connect.to("northwind");

  let customers = await Northwind_Service.send({
    query: SELECT.from(NorthwindCustomers),
  });

  customers.$count = customers.length;
  return customers;
};

module.exports = { getCustomers };