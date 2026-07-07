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

## NUnit Exercises

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



---

# Entity Framework Core

Implemented a Retail Inventory Management System using Entity Framework Core and SQL Server to demonstrate ORM concepts, database configuration, migrations, data insertion, and data retrieval.

### Exercise 1 – Understanding ORM

Introduced the fundamentals of Object Relational Mapping (ORM) and configured an EF Core Console Application.

#### Concepts Used

- Object Relational Mapping (ORM)
- Entity Framework Core
- Entity Classes
- SQL Server Provider

#### Features

- Created RetailInventory Console Application
- Configured EF Core packages
- Created Product and Category entity classes
- Established project structure

---

### Exercise 2 – Database Context

Configured the database context and connected the application to SQL Server.

#### Concepts Used

- DbContext
- DbSet
- OnConfiguring()
- SQL Server Connection

#### Features

- Created InventoryContext
- Configured SQL Server LocalDB
- Added DbSet for Products and Categories
- Connected EF Core with SQL Server

---

### Exercise 3 – Migrations

Created and applied database migrations using EF Core CLI.

#### Concepts Used

- EF Core CLI
- Migrations
- InitialCreate
- Database Update

#### Features

- Generated InitialCreate migration
- Applied migration to SQL Server
- Created RetailInventoryDB
- Generated Categories and Products tables

---

### Exercise 4 – Insert Initial Data

Inserted sample records into the database using asynchronous EF Core methods.

#### Concepts Used

- AddRangeAsync()
- SaveChangesAsync()
- Entity Relationships

#### Features

- Inserted Categories
- Inserted Products
- Stored records in SQL Server
- Verified inserted data in SSMS

---

### Exercise 5 – Retrieve Data

Retrieved records from SQL Server using asynchronous EF Core queries.

#### Concepts Used

- ToListAsync()
- FindAsync()
- FirstOrDefaultAsync()
- LINQ Queries

#### Features

- Retrieved all products
- Retrieved product by ID
- Retrieved product using conditions
- Displayed retrieved records in the console

---

# ASP.NET Core Web API

Implemented RESTful Web APIs using ASP.NET Core, covering CRUD operations, routing, model binding, validation, middleware, JWT authentication, role-based authorization, and Apache Kafka integration.

---

## Exercise 1 – Building RESTful Web Services

Created a RESTful Employee API using ASP.NET Core.

### Concepts Used

- ASP.NET Core Web API
- REST Architecture
- HTTP Methods (GET, POST, PUT, DELETE)
- API Controllers
- Routing

### Features

- Created Employee REST API
- Implemented CRUD operations
- Tested endpoints using Swagger
- Verified API responses

---

## Exercise 2 – Controllers and Actions

Implemented controller actions with routing and parameter binding.

### Concepts Used

- Controller
- Action Methods
- Route Attributes
- Route Parameters
- Query Parameters

### Features

- Implemented GET endpoints
- Implemented POST endpoint
- Implemented route-based actions
- Tested using Swagger and Postman

---

## Exercise 3 – Working with Models

Implemented model binding, validation, authorization, and exception handling.

### Concepts Used

- Model Binding
- Model Validation
- JWT Authentication
- Authorization
- Exception Filters

### Features

#### Part 1

- Created Employee model
- Implemented model binding
- Performed CRUD operations

#### Part 2

- Configured JWT Authentication
- Protected Employee endpoints
- Verified Unauthorized (401) responses

#### Part 3

- Implemented Global Exception Filter
- Returned standardized error responses

---

## Exercise 4 – Validation and Error Handling

Implemented server-side validation and improved API error handling.

### Concepts Used

- Data Annotations
- Model Validation
- BadRequest Responses
- Validation Attributes

### Features

- Added validation attributes
- Returned validation errors
- Updated Employee records
- Tested validation scenarios

---

## Exercise 5 – Custom Middleware

Implemented JWT authentication, custom authorization, and middleware pipeline.

### Concepts Used

- Custom Middleware
- JWT Authentication
- Role-Based Authorization
- Authentication Pipeline

### Features

- Generated JWT Tokens
- Implemented AuthController
- Protected APIs using JWT
- Implemented Role-Based Authorization
- Tested Admin and POC roles
- Verified Unauthorized (401) responses
- Verified Authorized (200) responses
- Tested APIs using Swagger and Postman

---

## Exercise 6 – Apache Kafka

Implemented Apache Kafka integration with ASP.NET Core and Windows Forms.

### Hands-On 1 – Kafka Producer and Consumer

### Concepts Used

- Apache Kafka
- Producer
- Consumer
- Topics
- Kafka Server
- ZooKeeper

### Features

- Configured Kafka Server
- Started ZooKeeper
- Created Kafka Topic
- Produced messages
- Consumed messages successfully

---

### Hands-On 2 – Kafka Chat Application

Built a Windows Forms chat application using Apache Kafka messaging.

### Concepts Used

- Windows Forms
- Apache Kafka
- Producer API
- Consumer API
- Asynchronous Messaging

### Features

- Designed WinForms Chat UI
- Configured Kafka Producer
- Configured Kafka Consumer
- Sent messages to Kafka Topic
- Received messages in real time
- Displayed chat messages inside the application

# Microservices

## Exercise 1 – JWT Authentication

Implemented JWT-based authentication and authorization for an ASP.NET Core Web API using JSON Web Tokens (JWT).

### Concepts Used

- JWT Authentication
- JWT Authorization
- Bearer Token
- Authentication Middleware
- Authorization Middleware
- Token Validation
- Swagger API Testing

### Features

- Configured JWT settings in `appsettings.json`
- Generated JWT tokens after successful login
- Implemented `AuthController`
- Created protected endpoints using `[Authorize]`
- Configured Authentication and Authorization middleware
- Verified Unauthorized (401) responses for protected APIs
- Tested APIs using Swagger UI

---


## Tools and Technologies

### Languages
- C#
- Java
- SQL

### Frameworks & Libraries
- ASP.NET Core Web API
- Entity Framework Core
- JWT Authentication
- NUnit
- Moq
- Apache Kafka (Confluent.Kafka)

### Databases
- SQL Server
- SQL Server LocalDB

### Development Tools

- Visual Studio 2026
- Visual Studio Code
- IntelliJ IDEA
- SQL Server Management Studio (SSMS)
- Swagger UI
- Postman

### Version Control
- Git
- GitHub

## Repository Structure

```text
Cognizant_DN5.0
│
├── Week_1
│   ├── Engineering Concepts
│   │   ├── Design Patterns
│   │   │   ├── Exercise1_SingletonPattern
│   │   │   └── Exercise2_FactoryMethodPattern
│   │   │
│   │   ├── DSA-Java
│   │   │   ├── Exercise2_ECommerceSearch
│   │   │   └── Exercise7_FinancialForecasting
│   │   │
│   │   └── DSA-CSharp
│   │       ├── Exercise2_ECommerceSearch
│   │       └── Exercise7_FinancialForecasting
│   │
│   ├── Advanced SQL Server
│   │   ├── Advanced Concepts
│   │   │   └── Exercise1_Ranking_Window_Functions
│   │   │
│   │   └── Stored Procedures
│   │       ├── Exercise1_Create_Stored_Procedure
│   │       └── Exercise5_Return_Data_From_Stored_Procedure
│   │
│   └── NUnit and Moq
│       ├── NUnit
│       │   ├── Exercise1_TestFixture_Test
│       │   ├── Exercise2_LeapYearCalculator
│       │   ├── Exercise3_StringConverter
│       │   ├── Exercise4_FourSeasons
│       │   ├── Exercise5_UserManager
│       │   ├── Exercise6_AccountsManager
│       │   ├── Exercise7_Collections
│       │   ├── Exercise8_UtilityLibrary
│       │   └── Exercise9_Converter
│       │
│       └── Moq
│           └── Exercise1_CustomerComm_Moq
│
├── Week_2
│   └── Entity Framework Core
│       ├── EF_Core_Labs
│       │   └── RetailInventory
│       ├── Lab1_Understanding_ORM
│       ├── Lab2_Database_Context
│       ├── Lab3_Migrations
│       ├── Lab4_Insert_Data
│       └── Lab5_Retrieve_Data
│
├── Week_3
│   └── ASP.NET_Core_Web_API
│       ├── WebApi_Project
│       ├── Exercise1_Building_RESTful_Web_Services
│       ├── Exercise2_Controllers_and_Actions
│       ├── Exercise3_Working_with_Models
│       ├── Exercise4_Validation_and_Error_Handling
│       ├── Exercise5_Custom_Middleware
│       └── Exercise6_Apache_Kafka
│           ├── Hands_On1
│           └── Hands_On2
│
├── Week_4
│   └── Microservices
│       └── Exercise1_JWT_Authentication
│
├── README.md
└── .gitignore
```