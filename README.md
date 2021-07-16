# Daily Planner App

## Description

This will be a simple web app for personal purposes.

The App will let me set my goals for the day before the day starts (in the morning) or the night before that day.

The essence is to plan out in advance how to efficiently spend the day and prevent from wasting it.

## Requirements (User Requirements)

Authentication

- [x] I cannot proceed to any pages if I'm not logged in
- [x] I can create an account using my Google Account
- [x] Upon siging in, I will be redirected to the main page
- [x] I can see a SignOut button on the navbar and I can log out if I click that button

The Planner

- [ ] I can see a Link at the top that says 'Plan of the Day'
- [ ] If I click the 'Plan of the Day', I will be redirected to plan of the day page and see today's aims
- [ ] Back on the Set Goal Page, I can see an input labeled 'On this day...' where I can write how I will plan the day, describe it, the goals, and whatever thoughts I have for this day
- [ ] I can see an input labeled 'Todo List' where I can write chunks of tasks that are doable within the day
- [ ] I can see a button that says 'add todo' where it will add the current todo I have on the input and wont accept if it has 3 or less characters.
- [ ] Clicking the 'add todo' will add the todo below the input. This will allow me to add another todo in the 'todo list' input where it must be cleared.
- [ ] I can see a button labeled "Let's start working!". If I click this button, all the records I encoded will be saved and I will be redirected to the ''

The Plan of the Day

- [ ] I can see the description or text that I wrote on the 'Plan the day' page reflecting the 'On this day' input.
- [ ] I can see the lists of todos under the 'Todo List' where all the tasks I plan on doing will be listed here.
- [ ] I have an ability to cross out or uncross the tasks on this list and the cross out will reflect the tasks I already finished
- [ ] At the bottom of this page, I can see a button labeled 'Aimed Today's Goals!' which is disabled if all the lists haven't been completed yet, and activated when all checkboxes are ticked. This will make the page show 'Yey! Aimed today's goal already!'
