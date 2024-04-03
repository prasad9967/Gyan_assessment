# EventHub App

## Overview
This is a React application developed with Tailwind CSS, serving as an eventhub which shows events along with their brief details. It provides features such as responsiveness for both desktop and mobile browsers, API integration for fetching and displaying data from a REST API, horizontal scrolling for recommended events, lazy loading for upcoming events fetched page by page, usage of specified colors and fonts, performance optimization techniques for fast loading times, and clean, organized code with documentation.

## Setup and Local Run Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm run dev`.
5. Open your browser and access the application at `http://localhost:3000`.


## Design and Technical Decisions
- React was chosen for its component-based architecture and ease of managing state.
- Tailwind CSS was selected for its utility-first approach, enabling responsive and customizable designs.
- API integration was implemented using `fetch` to efficiently fetch and display data from the REST API.
- Horizontal scrolling for recommended events was achieved using CSS properties like `overflow-x` and `scroll-snap`.
- Lazy loading for upcoming events was implemented to fetch new pages of events from the API only when the user scrolls to the end of the website, improving performance.
- Specific colors and fonts were used as per the provided instructions to maintain consistency and branding.
- Performance optimization techniques such as code splitting, lazy loading, and image optimization were applied to ensure fast loading times.
- Code quality was maintained through cleanliness, organization, and documentation for better understanding and maintainability.
