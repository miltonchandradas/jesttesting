namespace com.sap;

using {northwind} from '../srv/external/northwind.cds';
using {cuid} from '@sap/cds/common';

entity Products : cuid {
    name        : String;
    description : String;
    cost        : Decimal;

};


entity NorthwindCustomers as
    projection on northwind.Customers {
        CustomerID  as customerId,
        CompanyName as customerName,
        ContactName as contactName,
        Address     as address,
        City        as city,
        Country     as country,
        Phone       as phone
    };
