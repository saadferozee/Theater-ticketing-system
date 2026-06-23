# Instructions

## TECHNICAL ASSESSMENT: INTERN FRONTEND DEVELOPER Technology: HTML, CSS, JavaScript
Estimated Time: 2 Days


## PROJECT OVERVIEW
Build a single-page "Theater Seat Booking System" using raw HTML, CSS, and vanilla JavaScript.
Do not use external frontend frameworks (like React, Vue, or Angular) or style libraries (like Tailwind or Bootstrap). The goal is to demonstrate your core understanding of DOM manipulation, UI layouts, and browser data persistence.

### THEATER LAYOUT & DATA SPECIFICATIONS
● Total Capacity: 100 seats organized into 4 rows/columns labeled A, B, C, and D. Seat Naming Convention: Each row contains 25 seats, structured exactly as:
- Row A: A1, A2, A3 ... A25
- Row B: B1, B2, B3 ... B25
- Row C: C1, C2, C3 ... C25
- Row D: D1, D2, D3 ... D25
1. HTML REQUIREMENTS (Structure)
- Layout Grid: Build a visual grid display representing all 100 theater seats.
- Input Controls: Below the seat grid (at the bottom of the viewport), create a dedicated control section consisting of:
    - A text input field where users can type a specific seat number (e.g., "B12").
    - A submission button labeled "Book Seat".
- Accessibility: Ensure the input field has an explicitly linked <label> and the layout utilizes semantic HTML elements.

2. CSS REQUIREMENTS (Freeform Layout & Styling)
- Grid Structure: Use CSS Grid or Flexbox to lay out the 100 seats cleanly. It should look like an intuitive theater arrangement.
- Visual States: Define distinct CSS classes for seat states:
    - Available State: Default background styling showing the seat is free.
    - Booked State: A distinct highlight background color indicating the seat is occupied.
- Responsiveness: Ensure the grid scales naturally on different screen sizes and does not overflow or clip text values.
3. JAVASCRIPT REQUIREMENTS (Logic & Persistence)
- Dynamic Grid Generation: Use JavaScript to programmatically generate the 100 seats inside the DOM on page load. Avoid writing 100 hardcoded HTML blocks.
- Booking Workflow: When the "Book Seat" button is triggered:
    - Read the string from the input field (ensure it handles case insensitivity like "a1" or "A1").
    - If the seat is available: Update its visual state dynamically to the "Booked" background highlight.
    - If the seat is already taken: Trigger a browser alert() notification informing the user: "The seat is already booked."
    - Clear the input field automatically after submission.

- Hydration on Refresh: When the webpage is refreshed, properly re-render the seat map with all previously booked seats automatically highlighted.