# Nautical knowledge quiz game
**WEB-115 Final Project Proposal**
Student: Daniel Smith | Repo: 'WEB-115_FinalProject_Smith'
---
## Overview
A web app that quizzes users on how well their sailing knowledge is.

The target user is anyone that wants to test their sailing knowledge and track how much they have learned over-time.
---
## Features
- The user has an option of 2 different 10 question quizzes.
- The 2 quizzes will be called "Novice", and "Advanced".
- Both quiz difficulties will have their own pool of 20 questions.
- Both quizzes will select 10 random questions from a pool of 20.
- Time taken to complete the quiz will be tracked
- At the end of the quiz, the user's score & time will be displayed along with their best score & time - best score will survive page refreshes.
- A list of the user's 5 best scores will be displayed on the start screen, along with the date those scores were achieved.
- Users will have the ability to delete their saved scores.

Example Top-Scores:
1. Score: 7/10 Time: 4:00
2. Score: 7/10 Time: 4:32
3. Score 6/10 Time: 3:22
---
## Core Requirements Coverage
| Requirement | Implementation |
|---|---|
| If Statements & Loops | When generating a quiz, each question is made by going through a loop that gets a random number, & selects the corresponding question from that pool if that question hasn't been used in that quiz yet. If statement to check if a user got a question right or not. |
| Event Listeners | Click listeners for the quiz selection, question answers, question advance button, submit listener, back to home button, & delete scores button. |
| DOM Element Creation | Quiz questions & answers, as well as score will be dynamically displayed with 'createElement()' & 'appendChild()'. |
| Classes & Subclasses | A base 'question' class that holds the question and any image aids. 'mc' & 'sa' extends 'question' to specify which type of question it will be (multiple choice or select all). |
---
## Additional Requirements
JSON & Local Storage to hold the user's scores and the dates of those scores.
---
## Tech Stack
- HTML, CSS, Vanilla JavaScript
- 'localStorage' for holding scores
- VS Code + GitHub
