# Cognizant DotNet FSE Exercises

This repository contains the mandatory exercises completed as part of the **Cognizant Digital Nurture 5.0 DotNet FSE Program**.

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

## Exercise 1 – Ranking and Window Functions

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

---

# Upcoming Modules

* Entity Framework Core
* NUnit and Moq
* Web API
* Microservices
* Angular
* React
* Git

---

# Tools and Technologies

* Java
* C#
* SQL Server LocalDB
* SQL Server Management Studio (SSMS)
* IntelliJ IDEA
* Visual Studio 2022
* VS Code
* Git
* GitHub

## Repository Structure

Cognizant-DotNet-FSE-Exercises
│
├── Engineering Concepts
│   ├── Design principles & Patterns
│   │   ├── factory_method_pattern
│   │   └── singleton_pattern
│   │
│   ├── DSA-Java
│   │   ├── ecommercesearch
│   │   └── financialforecasting
│   │
│   └── DSA-CSharp
│       ├── Exercise2_ECommerceSearch
│       └── Exercise7_FinancialForecasting
│
├── Advanced SQL server
│   └── Exercise1_Ranking_Window_Functions
│       └── Exercise1_Ranking_Window_Functions.sql
│
├── README.md
└── .gitignore