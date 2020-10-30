# Background

![splashLogo2](https://user-images.githubusercontent.com/60491357/97758682-a89d7f80-1abc-11eb-992c-179e86f6a65a.png)

Basil aims to provide a clean, interactive, and streamlined environment for users who need quick meal suggestions for the week with personalization in mind. Not only can users select their food preferences but also track their dietary progress through interaction in the app. Basil's design keeps two core principles in mind:

Personalization: Users are receiving personal meal recommendations, can view their own calendar of meals, and track their progress.
Intuitive: Users can expect a responsive application that is simple, practical, and intuitive to use.

Basil is primarily built with the MERN stack, a combination of the following four technologies: MongoDB, Express, React/Redux, and Node.js.

# MVP
### 1. New account creation, login, and guest/demo login (1 Day)
  + Users can sign up, login, log out
  + Users can use a demo login to try the site
  + Users can't use certain features without logging in (creating and viewing meal plans)
### 2. Home Page (2 Days)
  + Displays Calendar with User's current meal plan
  + Users can see a progress bar as well as create meal plans if the old one has expired
  + Users can create custom meals plans, see past meal plans, and analyze statistics
  + Users can check off meals that they completed via the calendar
### 3. Meal Plan (2 Days)
  + Users can generate a meal plan based on a pre-filled form
  + Users can decide whether or not to save the meal plan for the week and regenerate meal plans until they find one they like
  + Users can see individual meals
### 4. Individual Meal Show Page (2 Days)
  + Meal Show Page will provide users with additional information about current meal
  + Users can see ingredients, nutritional facts, and instructions for the meal
  + Users can create custom meals plans, see past meal plans, and analyze statistics
### BONUS User Profile Page (1.5 Days)
  + Users will have a profile page that provides their history of subscribed meal plans, current meal plan, and additional statistics
  + It will display username, password, session_token, health metrics (age, weight, dietary restrictions, dietary goals, calorie intake), meals

# Technologies and Technical Challenges
  ### Technologies:
 - Node.js
 - React 
 - Redux
 - Javascript
 - Mongo DB database
 - Axios 
 - Mongoose Models
 - Passport-jwt
 - AWS
 - Spoonacular API
 - Calendar API

### Technical Challenges:
- Different API calls
- Display the progress tracker to showcase completion of the week's meal plan
- Display an interactive calendar displaying every meal and having a link to the meal's show page
- Interactive form

# Group Members and Work Breakdown
### Team Members 
**Nate Oh**, **Derek Xu**, **Zhang Zhang**, **Lisa Lam**
### October 26 - 27
* Built skeleton - **Derek**
* Build backend user auth - **Zhang / Derek**
* Build frontend user auth - **Lisa / Nate**
* Build splash page - **Lisa**
* Build signup / login pages - **Zhang**
* Begin setting up API with Spoonacular - **Derek**
* Research calendar API - **Nate**
### October 27 - 28
* CRUDS for generating meal plans - **Derek**
* Design meal plan form - **Zhang**
* Design home page - **Lisa / Nate**
* Implement calendar feature - **Nate**
### October 28 - 29
* Create show page for individual meals - **Zhang**
* Finish calendar and meal plan feature - **Derek / Nate / Lisa**
### October 30
* Finish testing and debugging - **All**
