# Cognizant DotNet FSE Exercises

This repository contains the exercises completed as part of the **Cognizant Digital Nurture 5.0 DotNet FSE Program**.

---

# Engineering Concepts

## Design Principles & Patterns (Java)

### Exercise 1 – Singleton Pattern

Implemented a Logger class using the Singleton Design Pattern.

#### Features

* Ensures only one instance of Logger exists.
* Provides a global access point to the Logger object.

### Exercise 2 – Factory Method Pattern

Implemented the Factory Method Design Pattern to create different document types.

#### Document Types

* Word Document
* PDF Document
* Excel Document

---

## Data Structures and Algorithms (Java)

### Exercise 2 – E-Commerce Platform Search Function

Implemented search operations on a product catalog.

#### Algorithms Used

* Linear Search
* Binary Search

#### Complexity Analysis

**Linear Search**

* Best Case: O(1)
* Average Case: O(n)
* Worst Case: O(n)

**Binary Search**

* Best Case: O(1)
* Average Case: O(log n)
* Worst Case: O(log n)

---

### Exercise 7 – Financial Forecasting

Implemented a recursive algorithm to predict future financial values.

#### Complexity Analysis

* Time Complexity: O(n)
* Space Complexity: O(n)

#### Optimization Suggestions

* Iterative approach
* Direct mathematical formula

---

## Data Structures and Algorithms (C#)

### Exercise 2 – E-Commerce Search

Implemented:

* Product class
* Linear Search
* Binary Search
* Complexity analysis

### Exercise 7 – Financial Forecasting

Implemented:

* Recursive forecasting method
* Complexity analysis
* Optimization suggestions

---

# Advanced SQL Server

## Advanced concepts

### Exercise 1 – Ranking and Window Functions

Implemented ranking and window functions to retrieve the top 3 most expensive products in each category.

### Concepts Used

* `ROW_NUMBER()`
* `RANK()`
* `DENSE_RANK()`
* `OVER()`
* `PARTITION BY`

### Features

* Created Products table
* Inserted sample product data
* Compared ranking functions
* Retrieved Top 3 expensive products from each category

## Stored Procedures

### Exercise 1 – Create a Stored Procedure

Created a stored procedure to insert employee details into the `Employees` table.

### Concepts Used

* `CREATE PROCEDURE`
* Parameters
* `INSERT INTO`
* `EXEC`

### Features

* Created `sp_InsertEmployee`
* Inserted a new employee record using the procedure
* Verified insertion by querying the `Employees` table

---

### Exercise 5 – Return Data from a Stored Procedure

Created a stored procedure to return the total number of employees in a specified department.

### Concepts Used

* `CREATE PROCEDURE`
* Parameters
* `COUNT()`
* `SELECT`
* `EXEC`

### Features

* Created `sp_GetEmployeeCount`
* Returned employee count based on `DepartmentID`
* Verified output using `EXEC sp_GetEmployeeCount 1`


---
## NUnit and Moq

### NUnit Exercises

### Exercise 1 – TestFixture & Test

Implemented NUnit test cases to validate the addition functionality of the `SimpleCalculator` class.

#### Concepts Used

- TestFixture
- Test
- TestCase
- SetUp
- TearDown
- Assert.That

#### Features

- Created NUnit Test Project
- Added CalcLibrary reference
- Implemented CalculatorTests
- Executed all test cases successfully

---

### Exercise 2 – Leap Year Calculator

Implemented NUnit test cases to verify leap year calculations.

#### Features

- Tested leap year scenarios
- Verified expected outputs using assertions

---

### Exercise 3 – String Conversion

Implemented NUnit test cases for string conversion methods.

#### Features

- Verified string conversion logic
- Tested multiple input conditions

---

### Exercise 4 – Four Seasons

Implemented NUnit test cases for season identification.

#### Features

- Tested valid month inputs
- Verified correct season output

---

### Exercise 5 – User Management

Implemented NUnit test cases for user validation methods.

#### Features

- Tested user validation scenarios
- Verified expected behaviour

---

### Exercise 6 – Accounts Manager

Implemented NUnit test cases for account-related operations.

#### Features

- Tested account creation and validation
- Verified expected outputs

---

### Exercise 7 – Collections Library

Implemented NUnit test cases for collection operations.

#### Features

- Tested collection manipulation methods
- Verified outputs using assertions

---

### Exercise 8 – Utility Library

Implemented NUnit test cases for utility helper methods.

#### Features

- Tested utility functions
- Covered multiple scenarios

---

### Exercise 9 – Converter Library

Implemented NUnit test cases for unit conversion methods.

#### Concepts Used

- TestFixture
- TestCase
- Assert.That

#### Features

- Tested Celsius to Kelvin conversion
- Tested Kilogram to Pound conversion
- Tested Kilometer to Mile conversion
- Tested Liter to Gallon conversion
- Tested USD to Euro conversion
- Verified valid, invalid and boundary test cases
- Successfully executed all test cases

---

## Moq Exercises

### Exercise 1 – Write Testable Code with Moq

Implemented unit testing for a customer mail communication module using Moq by mocking the external mail server dependency.

#### Concepts Used

- Mocking
- Dependency Injection
- Constructor Injection
- Moq Framework
- TestFixture
- OneTimeSetUp
- TestCase
- Assert.That

#### Features

- Created `CustomerCommLib`
- Implemented `IMailSender`
- Implemented `MailSender`
- Implemented `CustomerComm`
- Injected dependency using Constructor Injection
- Created mock object using `Mock<IMailSender>`
- Configured mocked `SendMail()` using `It.IsAny<string>()`
- Returned mocked value using `Returns(true)`
- Verified `SendMailToCustomer()` returns `true`
- Successfully executed the unit test (1 Passed)

## Tools and Technologies

* Java
* C#
* SQL Server LocalDB
* SQL Server Management Studio (SSMS)
* IntelliJ IDEA
* Visual Studio 2026
* VS Code
* Git
* GitHub

## Repository Structure

```text
Cognizant-DotNet-FSE-Exercises
│
├── Engineering Concepts
│   ├── Design Principles & Patterns
│   │   ├── Exercise1_SingletonPattern
│   │   └── Exercise2_FactoryMethodPattern
│   │
│   ├── DSA-Java
│   │   ├── Exercise2_ECommerceSearch
│   │   └── Exercise7_FinancialForecasting
│   │
│   └── DSA-CSharp
│       ├── Exercise2_ECommerceSearch
│       └── Exercise7_FinancialForecasting
│
├── Advanced SQL Server
│   ├── Advanced Concepts
│   │   └── Exercise1_Ranking_Window_Functions
│   │       ├── Exercise1_Ranking_Window_Functions.sql
│   │       └── Exercise1_Output.png
│   │
│   └── Stored Procedures
│       ├── Exercise1_Create_Stored_Procedure
│       │   ├── Exercise1_Create_Stored_Procedure.sql
│       │   └── Exercise1_Output.png
│       │
│       └── Exercise5_Return_Data_From_Stored_Procedure
│           ├── Exercise5_Return_Data_From_Stored_Procedure.sql
│           └── Exercise5_Output.png
│
├── NUnit and Moq
│   ├── Exercise1_TestFixture_Test
│   │   ├── CalcLibrary
│   │   ├── CalculatorTests.cs
│   │   ├── Output.png
│   │   └── README.md
│   │
│   ├── Exercise2_LeapYearCalculator
│   │   ├── LeapYearCalculatorLib
│   │   ├── LeapYearCalculatorTests.cs
│   │   ├── Output.png
│   │   └── README.md
│   │
│   ├── Exercise3_StringConverter
│   │   ├── ConverterLib
│   │   ├── ConverterTests.cs
│   │   ├── Output.png
│   │   └── README.md
│   │
│   ├── Exercise4_FourSeasons
│   │   ├── FourSeasonsLib
│   │   ├── FourSeasonsTests.cs
│   │   ├── Output.png
│   │   └── README.md
│   │
│   ├── Exercise5_UserManager
│   │   ├── UserManagerLib
│   │   ├── UserManagerTests.cs
│   │   ├── Output.png
│   │   └── README.md
│   │
│   ├── Exercise6_AccountsManager
│   │   ├── AccountsManagerLib
│   │   ├── AccountsManagerTests.cs
│   │   ├── Output.png
│   │   └── README.md
│   │
│   ├── Exercise7_Collections
│   │   ├── CollectionsLib
│   │   ├── CollectionsTests.cs
│   │   ├── Output.png
│   │   └── README.md
│   │
│   ├── Exercise8_UtilityLibrary
│   │   ├── UtilLib
│   │   ├── UtilTests.cs
│   │   ├── Output.png
│   │   └── README.md
│   │
│   ├── Exercise9_Converter
│   │   ├── ConverterLib
│   │   ├── ConverterTests.cs
│   │   ├── Output.png
│   │   └── README.md
│   │
│   └── Exercise1_CustomerComm_Moq
│       ├── CustomerCommLib
│       ├── CustomerComm.Tests
│       ├── Output.png
│       └── README.md
│
├── README.md
└── .gitignore
```