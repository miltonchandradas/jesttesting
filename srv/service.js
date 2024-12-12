const { getCustomers, modifyCustomers } = require("./utils/northwindUtils");

module.exports = async (srv) => {
  const { NorthwindCustomers } = srv.entities;

  srv.on("READ", NorthwindCustomers, async () => {
    return await getCustomers(srv);
  });

  srv.after("READ", NorthwindCustomers, async (data) => {
    return await modifyCustomers(data);
  })
};
