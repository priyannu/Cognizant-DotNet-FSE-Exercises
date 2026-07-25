# Cognizant DotNet FSE Exercises

This repository contains the exercises completed as part of the **Cognizant Digital Nurture 5.0 DotNet FSE Program**.


## Table of Contents

- Repository Structure
- Engineering Concepts
- Advanced SQL Server
- NUnit and Moq
- Entity Framework Core
- ASP.NET Core Web API
- Microservices
- Week 5 – Angular
- Week 5 – React
- Week 6 & 7 – Git
- Tools and Technologies

---
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
├── Week_5
│   ├── Angular_HandsOn
│   │   ├── student-course-portal
│   │   ├── HandsOn_1
│   │   ├── HandsOn_2
│   │   ├── HandsOn_3
│   │   ├── HandsOn_4
│   │   ├── HandsOn_5
│   │   ├── HandsOn_6
│   │   ├── HandsOn_7
│   │   ├── HandsOn_8
│   │   ├── HandsOn_9
│   │   └── HandsOn_10
│   │
│   └── React_HandsOn
│       ├── 01_myfirstreact
│       ├── 02_StudentApp
│       ├── 03_scorecalculatorapp
│       ├── 04_blogapp
│       ├── 05_cohorttracker
│       ├── 09_cricketapp
│       ├── 10_officespacerentalapp
│       ├── 11_eventexamplesapp
│       ├── 12_ticketbookingapp
│       └── 13_bloggerapp
│
├── Week_6_and_7
│   └── GIT
│       ├── 1_Git Basics
│       ├── 2_Git Ignore
│       ├── 3_Branching and Merging
│       ├── 4_Merge Conflict Resolution
│       └── 5_Remote Repository Operations
│
├── README.md
└── .gitignore
```

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



# Week 5 – Angular

Implemented a Student Course Portal using Angular 21, demonstrating component-based architecture, routing, directives, pipes, services, reactive programming with RxJS, HTTP communication, NgRx state management, and unit testing.

---

## Hands-On 1 – Angular Environment Setup

### Concepts Used

- Angular CLI
- Standalone Components
- Angular Project Structure
- Build & Serve

### Features

- Created Angular project
- Configured Angular CLI
- Built and served the application
- Verified project setup

---

## Hands-On 2 – Components and Data Binding

### Concepts Used

- Standalone Components
- @Input()
- @Output()
- EventEmitter
- ngOnChanges

### Features

- Created reusable CourseCard component
- Implemented parent-child communication
- Rendered dynamic course data
- Triggered enrollment events

---

## Hands-On 3 – Directives and Pipes

### Concepts Used

- Structural Directives
- Attribute Directives
- Custom Pipes

### Features

- Implemented custom Highlight Directive
- Created Credit Label Pipe
- Applied conditional rendering
- Improved UI readability

---

## Hands-On 4 – Routing

### Concepts Used

- Angular Router
- Route Configuration
- Navigation

### Features

- Configured application routing
- Navigated between pages
- Protected routes

---

## Hands-On 5 – Forms

### Concepts Used

- Template Driven Forms
- Reactive Forms
- Form Validation

### Features

- Created course forms
- Applied validations
- Displayed validation messages

---

## Hands-On 6 – Services and Dependency Injection

### Concepts Used

- Angular Services
- Dependency Injection
- Singleton Services

### Features

- Implemented CourseService
- Shared data across components
- Consumed services

---

## Hands-On 7 – RxJS

### Concepts Used

- Observable
- Subject
- switchMap()
- catchError()
- tap()

### Features

- Loaded enrolled students
- Handled asynchronous streams
- Implemented reactive data flow
- Error handling using RxJS operators

---

## Hands-On 8 – HTTP Client

### Concepts Used

- HttpClient
- REST API
- JSON Server
- CRUD Operations

### Features

- Retrieved courses
- Added CRUD support
- Consumed REST endpoints
- Error handling with retry()

---

## Hands-On 9 – NgRx State Management

### Concepts Used

- NgRx Store
- Actions
- Reducers
- Selectors
- Effects
- Redux DevTools

### Features

- Configured NgRx Store
- Loaded courses through Effects
- Managed enrollment state
- Integrated Redux DevTools
- Implemented state selectors

---

## Hands-On 10 – Angular Testing

### Concepts Used

- Unit Testing
- HttpTestingController
- MockStore
- Component Testing
- Vitest

### Features

- Tested CourseCard component
- Generated code coverage report
- Tested CourseService using HttpTestingController
- Tested NgRx components using MockStore
- Verified loading state


# Week 5 – React

Implemented multiple React applications to understand React fundamentals, JSX, components, props, state, conditional rendering, event handling, styling, list rendering, and component composition.

---
## Hands-On 1 – My First React

### Concepts Used

- React
- JSX
- Functional Components
- Create React App

### Features

- Created first React application
- Understood React project structure
- Rendered JSX elements
- Successfully built and executed the application

---

## Hands-On 2 – Student App

### Concepts Used

- Functional Components
- Component Composition
- JSX

### Features

- Created Home, About, and Contact components
- Rendered multiple components
- Organized application structure

---

## Hands-On 3 – Score Calculator App

### Concepts Used

- Components
- CSS Styling
- Props

### Features

- Calculated student grades
- Applied external CSS
- Displayed formatted score details

---

## Hands-On 4 – Blog App

### Concepts Used

- React Components
- Props
- JSX

### Features

- Displayed blog information
- Passed data using props
- Reused components

---

## Hands-On 5 – Cohort Tracker

### Concepts Used

- CSS Modules
- Inline Styling
- Conditional Styling

### Features

- Styled React components
- Applied CSS Modules
- Displayed ongoing and completed cohorts with different colors

---

## Hands-On 9 – Cricket App

### Concepts Used

- Lists
- Array Destructuring
- Conditional Rendering

### Features

- Displayed player details
- Filtered players based on score
- Rendered odd and even team members

---

## Hands-On 10 – Office Space Rental App

### Concepts Used

- JSX
- Conditional Rendering
- Inline CSS

### Features

- Displayed office space details
- Applied conditional color formatting
- Rendered office images dynamically

---

## Hands-On 11 – Event Examples App

### Concepts Used

- Event Handling
- Synthetic Events
- State Management

### Features

- Implemented button click events
- Currency converter
- Displayed alert messages
- Handled user interactions

---

## Hands-On 12 – Ticket Booking App

### Concepts Used

- Conditional Rendering
- State
- Login & Logout

### Features

- Implemented Guest and User pages
- Added Login and Logout functionality
- Rendered components conditionally

---

## Hands-On 13 – Blogger App

### Concepts Used

- List Rendering
- map()
- Keys
- Multiple Components
- Conditional Rendering

### Features

- Rendered Book Details
- Rendered Blog Details
- Rendered Course Details
- Displayed multiple lists using map()

---
# Week 6 and 7 – Git

Implemented Git and GitHub workflows as part of the Cognizant Digital Nurture 5.0 program, covering repository creation, version control, branching strategies, merge conflict resolution, remote repository operations, and Git best practices.

---

## Hands-On 1 – Git Basics

### Concepts Used

- Git Installation
- Git Configuration
- Repository Initialization
- git init
- git status
- git add
- git commit
- git log
- git remote
- git push

### Features

- Configured Git username and email
- Initialized a local Git repository
- Created and tracked project files
- Performed the initial commit
- Connected the local repository with GitHub
- Successfully pushed the repository to GitHub

---

## Hands-On 2 – Git Ignore

### Concepts Used

- .gitignore
- Ignoring Files
- Ignoring Directories

### Features

- Created a `.gitignore` file
- Ignored log files using wildcard patterns
- Ignored log directories
- Verified ignored files were not tracked by Git

---

## Hands-On 3 – Branching and Merging

### Concepts Used

- Branching
- git branch
- git switch
- git diff
- git merge
- Branch Management

### Features

- Created a new branch
- Switched between branches
- Added branch-specific changes
- Compared branches using `git diff`
- Merged changes into the master branch
- Deleted merged branches

---

## Hands-On 4 – Merge Conflict Resolution

### Concepts Used

- Merge Conflicts
- Conflict Resolution
- Three-Way Merge
- Git History
- .gitignore

### Features

- Created conflicting changes in multiple branches
- Triggered a merge conflict
- Resolved merge conflicts manually
- Committed the resolved version
- Updated `.gitignore` to ignore backup files
- Deleted merged branches
- Verified clean repository status

---

## Hands-On 5 – Remote Repository Operations

### Concepts Used

- git pull
- git push
- Remote Repository
- Repository Synchronization

### Features

- Pulled the latest changes from GitHub
- Verified local and remote repository synchronization
- Pushed all local commits successfully
- Confirmed a clean working tree
- Verified repository status on GitHub

---

## Tools and Technologies

### Languages
- C#
- Java
- SQL
- TypeScript
- JavaScript
- HTML
- CSS

### Frameworks & Libraries

- ASP.NET Core Web API
- Entity Framework Core
- Angular
- React
- React DOM
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
- Node.js
- npm
- SQL Server Management Studio (SSMS)
- Swagger UI
- Postman

### Version Control
- Git
- GitHub
- Git Bash

