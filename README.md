# Shopify Intern Tech Challenge - README

This project was created by Allison Tredwell for the Shopify Front End Developer Fall 2022 Internship application.

## Table of Contents:
[1. Goal](#1-goal)
[2. Shopify's Requirements](#2-shopifys-requirements)

## 1. Goal: 
Create an app that sends a text prompt collected from the user to the OpenAI API, and displays the results in a list. 

## 2. Shopify’s Requirements:
A form for entering text prompts, which submits to OpenAI API
Results displayed and stored in a list (newest to oldest), with the prompt and response.
Accessible, semantic HTML

## 3. Installation: 
Download the zip file from GitHub. Unzip, then open the folder with your code editor.

In the terminal, run:
###  `npm install`

Then, run:
### `npm start` 
to open the project in your browser.

## Hosted: 
https://atredwell.com/dogify/

## Inspiration: 
The day I first started experimenting with the types of prompts that could be used, it would’ve been my dog’s 11th birthday. With her on my mind, my prompt turned to “write a story about a Goldendoodle and {user input}”. Every story made me smile, and I decided to keep the prompt, but expand on it. 

## Style: 
The color scheme was inspired by my dog’s collar, which we had picked because the colors seemed so happy-go-lucky, like her. I felt like they reflected the happy, silly nature of the app. For fonts, my main priority is readability, but I also wanted something playful and fun for the title. 

## Features:

### Randomization: 
A random dog breed is added to each prompt, for variety.

### Shuffle Button: 
If the user isn’t sure what to add, or would like to see some examples, they can shuffle to view the randomized items. If the user doesn’t enter any text, a random prompt will be provided for each new submit.
### Favorites List: 
Users can add stories to their Favorites list by clicking on a grey heart. The list is saved in local storage which allows users to keep their Favorites on their device, without the need to log in or create an account. The Favorites are live updated on the Favorites page. 

### Sanitized User Input: 
The user input is sanitized before being sent to the API, for increased security. 

## Accessibility

### Semantic HTML:  
Semantic HTML is used to provide more context to screen readers.

### Color Contrast: 
All color combinations were tested with https://webaim.org/resources/contrastchecker/ to ensure that accessibility guidelines were met.

### Skip To Content: 
Skip to Content links on each page are hidden until they are in focus, then they appear and allow the user to move directly to the content without listening to the navigation.

### Sizing in rem: 
Sizing is done in rem (instead of px) to respect the font-size preferences set by the user.
