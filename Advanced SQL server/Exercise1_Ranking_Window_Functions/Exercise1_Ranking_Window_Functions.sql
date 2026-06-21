--Create table 
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10,2)
);


--Insert Data
INSERT INTO Products VALUES
(1,'Laptop','Electronics',75000),
(2,'Smartphone','Electronics',55000),
(3,'Tablet','Electronics',30000),
(4,'Headphones','Electronics',30000),

(5,'Jacket','Fashion',4500),
(6,'Shoes','Fashion',4500),
(7,'Jeans','Fashion',2500),
(8,'T-Shirt','Fashion',1200),

(9,'Refrigerator','Home Appliances',40000),
(10,'Washing Machine','Home Appliances',30000),
(11,'Microwave','Home Appliances',12000),
(12,'Mixer','Home Appliances',3500);


-- Verification Query
SELECT * FROM Products;

--Ranking Query
SELECT
    ProductID,
    ProductName,
    Category,
    Price,

    ROW_NUMBER() OVER (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS RowNum,

    RANK() OVER (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS RankNum,

    DENSE_RANK() OVER (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS DenseRankNum

FROM Products;

--Top three query

WITH RankedProducts AS
(
    SELECT
        ProductID,
        ProductName,
        Category,
        Price,

        ROW_NUMBER() OVER
        (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS RowNum

    FROM Products
)

SELECT *
FROM RankedProducts
WHERE RowNum <= 3;