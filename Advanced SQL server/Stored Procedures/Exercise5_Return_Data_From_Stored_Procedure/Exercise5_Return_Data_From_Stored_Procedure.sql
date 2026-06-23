-- Exercise 5: Return Data from a Stored Procedure

-- Create Stored Procedure
CREATE OR ALTER PROCEDURE sp_GetEmployeeCount
    @DepartmentID INT
AS
BEGIN
    SELECT COUNT(*) AS TotalEmployees
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;

-- Execute Stored Procedure
EXEC sp_GetEmployeeCount 1;