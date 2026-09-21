# Job Application Tracker

A simple web application for tracking job applications, internships, student positions, and trainee roles.

The project is built with HTML, CSS, and JavaScript, and uses localStorage to save applications directly in the browser.

## Demo

https://github.com/user-attachments/assets/5250675c-fc3d-4b17-b655-ceba809a4685

## Features

- Add new job applications
- Edit existing applications
- Delete applications
- Search by company or position
- Filter applications by status
- Dashboard with application statistics
- Status badges with different colors
- Light mode and dark mode
- Norwegian and English language support
- Data is saved in the browser with localStorage
- Responsive design for different screen sizes

## Technologies Used

- HTML
- CSS
- JavaScript
- localStorage
- Git
- GitHub

## Application Statuses

The application supports the following statuses:

- Not sent
- Sent
- Waiting for reply
- Interview
- Rejected
- Offer

Each status has its own color badge to make it easier to get an overview.

## What I Learned

Through this project, I practiced:

- Building a structured frontend project
- Working with forms and user input
- Saving and reading data from localStorage
- Updating the DOM with JavaScript
- Creating search and filter functionality
- Implementing edit and delete functionality
- Using light/dark mode
- Adding multilingual support
- Improving UI with CSS

## Project Structure

```text
job-application-tracker/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
└── js/
    ├── app.js
    ├── language.js
    ├── storage.js
    └── theme.js
