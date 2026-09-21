# Job Application Tracker

Job Application Tracker is a web application for tracking job applications, internships, student positions and trainee roles.

The project is built with HTML, CSS and JavaScript. It uses `localStorage` to save applications directly in the browser.

## Demo

https://github.com/user-attachments/assets/5250675c-fc3d-4b17-b655-ceba809a4685

## Features

- Add new job applications
- Edit existing applications
- Delete applications
- Search for applications by company or position
- Filter applications by status
- Dashboard with application statistics
- Status badges with different colors
- Light mode and dark mode
- Norwegian and English language support
- Save data in the browser with `localStorage`
- Responsive design for different screen sizes

## Why I Built This

I wanted to build a practical project that could help me keep track of job applications, internships and student positions.

The idea came from my own need to organize applications in one place instead of saving information in different notes, emails or documents.

I also wanted to practice building a complete frontend project with forms, search, filtering, editing, language support and browser storage.

## What Was Interesting

The most interesting part was building something that felt useful in real life.

I liked creating the dashboard, status colors, language switch and dark/light mode because they made the project feel more like a real web application.

I also liked seeing how JavaScript could update the page automatically when applications were added, edited or deleted.

## What Was Challenging

The most challenging part was making edit functionality, language switching, `localStorage` and status display work together in a clean way.

I had to make sure that applications were saved correctly, updated correctly and still displayed properly after refreshing the page.

It was also challenging to keep the design clean while adding more features.

## Technologies Used

- HTML
- CSS
- JavaScript
- localStorage
- Git
- GitHub

## Application Statuses

The application supports these statuses:

- Not sent
- Sent
- Waiting for reply
- Interview
- Rejected
- Offer

Each status has its own color badge to make the overview easier to understand.

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
```

## How to Run the Project

1. Download or clone the project.
2. Open the folder in VS Code.
3. Open `index.html` with Live Server.
4. Add applications and test the dashboard.

## Future Improvements

Possible improvements for the project:

- Add deadline reminders
- Add sorting by deadline
- Add export to CSV
- Add more detailed statistics
- Add backend and database support later
- Add user login in a future version

## Author

Mannat Gabria  
Bachelor student in Computer Engineering at Western Norway University of Applied Sciences
    ├── app.js
    ├── language.js
    ├── storage.js
    └── theme.js
