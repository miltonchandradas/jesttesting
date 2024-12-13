const cds = require("@sap/cds");
const northwindUtils = require("../srv/utils/northwindUtils");
const customers = require("../northwindCustomers.json");

jest.spyOn(northwindUtils, "getCustomers").mockImplementation(() => customers);

describe("Jest Tests - MOCKING", () => {
  const { GET } = cds.test("serve", __dirname + "/../srv");

  it("Get Customers from Northwind OData Service - MOCKING", async () => {
    
    const { status, data } = await GET(
      "/service/JestService/NorthwindCustomers"
    );
    expect(status).toBe(200);
    expect(data.value[0].customerId).toBe("1");
    expect(data.value[0].city).toBe("Atlanta");
  });
});
