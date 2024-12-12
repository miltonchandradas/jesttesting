const cds = require("@sap/cds");

describe("Jest Tests - Group 1", () => {
  const { GET } = cds.test("serve", __dirname + "/../srv");

  it("Get Customers from Northwind OData Service", async () => {
    const { status, data } = await GET(
      "/service/JestService/NorthwindCustomers"
    );
    expect(status).toBe(200);
    expect(data.value[0].customerId).toBe("ALFKI");
  });
});

