const { getCustomers } = require("./utils/northwindUtils");

module.exports = async (srv) => {
  const { NorthwindCustomers } = srv.entities;

  srv.on("READ", NorthwindCustomers, () => {
    return getCustomers(srv);
  });
};
