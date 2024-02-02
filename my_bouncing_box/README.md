## My Bouncing Box
***

## Task
Complete an index.html file with the missing javascript code in order to replicate the famous Windows Screensaver - Bounce

Example - Video

You need to replace the content of the "div" my_bouncing_box with your Qwasar's login in downcase.

You need to move the "div" with the id my_bouncing_box diagonally.

We defined the (0, 0) coordinate (x, y) at the very top left of your screen.
The box must move diagonally and each time it reaches a border it will change direction of the border it touched.
If the box is moving bottom-right:
-- when it reaches the bottom border it will go top.
-- when it reaches the right border it will go left.

We let you choose the speed rate for the movement of the box. Between 0.3 and 1 second seems to be good values.

You cannot change the value of the html, moving the box needs to be done using javascript. (Yes, JQuery is not allowed yet.)
## Description

This HTML code creates an animated webpage with a bouncing blue box ("my_bouncing_box"). The box has specific styles like background color and border radius. The embedded JavaScript controls the box's movement, incrementing or decrementing its left and top positions. Two variables, leftEdge and topEdge, determine if the box is at the page edges, changing its direction accordingly. The setInterval function calls a position-changing function every millisecond, creating a continuous bouncing animation. The box stays within the visible window area using pageWidth and pageHeight variables. Overall, the code produces a simple, interactive, and visually engaging element on the webpage.

## Installation
TODO - by executing this command we can install the program npm install 


## Usage

This HTML code creates a dynamic webpage with a blue box ("my_bouncing_box") that bounces within the browser window. The box has specified styles, such as a background color, border radius, position, and text formatting. The embedded JavaScript script controls the box's movement by incrementing or decrementing its left (l) and top (t) positions. Two boolean variables, leftEdge and topEdge, determine whether the box is at the edges of the page. The script uses the setInterval function to repeatedly call the changePosition function every millisecond, resulting in a continuous bouncing animation. The box changes direction when reaching the edges of the page, creating a visually dynamic effect. The pageWidth and pageHeight variables ensure that the box stays within the visible area of the browser window. Overall, this code showcases a simple yet engaging interactive element on the webpage.
### The Core Team


<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>