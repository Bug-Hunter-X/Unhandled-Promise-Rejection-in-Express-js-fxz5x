# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Node.js applications using Express.js: unhandled promise rejections within asynchronous request handlers.  Unhandled rejections can lead to silent failures and make debugging difficult.

## The Problem

The `bug.js` file contains an Express.js server with a route that performs an asynchronous operation.  If the asynchronous operation fails (simulated by a random chance in the code), the promise rejects. However, the error isn't explicitly caught in the main handler, leading to an unhandled promise rejection.  This will not automatically crash the app (unlike synchronous errors), but can lead to unpredictable behavior and difficulty in tracking down the root cause. 

## The Solution

The `bugSolution.js` file demonstrates the correct way to handle this scenario. It uses `.catch()` to explicitly handle the promise rejection within the request handler, providing more robust error handling and logging.