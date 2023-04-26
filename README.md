# Rewards Program

This is a simple web application that displays a list of customers and their total reward points earned for each month. The application calculates reward points for each customer based on their transactions.

### Technical rules:
A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent between $50 and $100 in each transaction. (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).

## Installation

To install and run the application, follow these steps:

1. Clone the repository using `git clone`
2. Navigate to the project directory using `cd rewards-program`
3. Install the dependencies using `npm install`
4. Start the development server using `npm start`
5. Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

## Usage

The application allows you to view a list of customers and their reward points for each month based on their transactions. You can also switch between a bar chart view with monthly points per user and a total points view by clicking the "Show Monthly Points" / "Show Total Points" button.

## Technologies Used
The application was built using the following technologies:

React
Material-UI
Recharts