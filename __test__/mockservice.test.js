const cds = require("@sap/cds");
const { getCustomers } = require("../srv/utils/northwindUtils");
const customers = require("../northwindCustomers.json");

jest.mock("../srv/utils/northwindUtils");

describe("Jest Tests - Group 2", () => {
  const { GET } = cds.test("serve", __dirname + "/../srv");

  it("Get Customers from Northwind OData Service - MOCKING", async () => {
    jest.mocked(getCustomers).mockReturnValue(customers);
    const { status, data } = await GET(
      "/service/JestService/NorthwindCustomers"
    );
    expect(status).toBe(200);
    expect(data.value[0].customerId).toBe("1");
  });
});
