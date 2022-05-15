# Shopify Intern Tech Challenge - README

This project was created by Allison Tredwell for the Shopify Front End Developer Fall 2022 Internship application.

## Table of Contents:
[1. Goal](#1-goal)

[2. Shopify's Requirements](#2-shopifys-requirements)

[3. Installation](#3-installation)

[4. Hosted Demo](#4-hosted-demo)

[5. Inspiration](#5-inspiration)

[6. Style](#6-style)

[7. Features](#7-features)

[7.1 Randomization](#71-randomization)

[7.2 Shuffle Button](#72-shuffle-button)

[7.3 Favorites List](#73-favorites-list)

[7.4 Sanitized User Input](#74-sanitized-user-input)

[8. Accessibility](#8-accessibility)

[8.1 Semantic HTML](#81-semantic-html)

[8.2 Color Contrast](#82-color-contrast)

[8.3 Skip To Content](#83-skip-to-content)

[8.4 Sizing in rem](#84-sizing-in-rem)



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

## 4. Hosted Demo: 
https://atredwell.com/dogify/

## 5. Inspiration: 
The day I first started experimenting with the types of prompts that could be used, it would’ve been my dog’s 11th birthday. With her on my mind, my prompt turned to “write a story about a Goldendoodle and {user input}”. Every story made me smile, and I decided to keep the prompt, but expand on it. 

## 6. Style: 
The color scheme was inspired by my dog’s collar, which we had picked because the colors seemed so happy-go-lucky, like her. I felt like they reflected the happy, silly nature of the app. For fonts, my main priority is readability, but I also wanted something playful and fun for the title. 

## 7. Features:

### 7.1 Randomization: 
A random dog breed is added to each prompt, for variety.

### 7.2 Shuffle Button: 
If the user isn’t sure what to add, or would like to see some examples, they can shuffle to view the randomized items. If the user doesn’t enter any text, a random prompt will be provided for each new submit.

### 7.3 Favorites List: 
Users can add stories to their Favorites list by clicking on a grey heart. The list is saved in local storage which allows users to keep their Favorites on their device, without the need to log in or create an account. The Favorites are live updated on the Favorites page. 

### 7.4 Sanitized User Input: 
The user input is sanitized before being sent to the API, for increased security. 

## 8. Accessibility

### 8.1 Semantic HTML:  
Semantic HTML is used to provide more context to screen readers.

### 8.2 Color Contrast: 
All color combinations were tested with https://webaim.org/resources/contrastchecker/ to ensure that accessibility guidelines were met.

### 8.3 Skip To Content: 
Skip to Content links on each page are hidden until they are in focus, then they appear and allow the user to move directly to the content without listening to the navigation.

### 8.4 Sizing in rem: 
Sizing is done in rem (instead of px) to respect the font-size preferences set by the user.
