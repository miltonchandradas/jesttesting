using {com.sap as my} from '../db/schema';

@path: '/service/JestService'
service SalesService {
    entity Products   as projection on my.Products;

    @readonly
    entity NorthwindCustomers as projection on my.NorthwindCustomers;
}

