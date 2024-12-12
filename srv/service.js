const { getCustomers } = require("./utils/northwindUtils");

module.exports = async (srv) => {
  const { NorthwindCustomers } = srv.entities;

  srv.on("READ", NorthwindCustomers, async () => {
    return await getCustomers(srv);
  });
};
