# Giphy Api Project

### About

App generate buttons and when you click the button, 20 images appear about this button content. Images are also clickable. When you click the image, it becomes gif. 

### How it works

There is an arr with titles, which is used when app starts to ganarate buttons. When you add a button, it displays and also added to arr. Everytime when array is changed, app set this array to clients local storage. 
When user click the button, app send request to Giphy Api and get 20 gif json files from there and display still versions on the screen. 
When user click the image, app changes image source to gif version.

### Tools that used

1. Bootstrap 4.3.1
2. jQuery 2.2.4
3. Google Firebase 4.4.0
