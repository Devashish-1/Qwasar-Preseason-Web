# Welcome to My Moving Box Realtime
***

## Task
For each exercise, you will have to create a folder and in this folder, you will have additional files that contain your work. Folder names are provided at the beginning of each exercise under submit directory and specific file names for each exercise are also provided at the beginning of each exercise under submit file(s).

## Description
Certainly! The key correction was in the condition of the moveBox function. Specifically, changing the condition from: if (box.offsetLeft < targetPosition.x || box.offsetTop < targetPosition.y), to if (box.offsetLeft < targetPosition.x || box.offsetTop < targetPosition.y) ensures that the box continues moving until it reaches either the target X or target Y position. The Math.min function was also added to prevent overshooting the target position. This correction addresses the issue mentioned in the test case and allows for smooth movement of the box.



## Installation
The installation process depends on the project and the tools/frameworks it uses. Commonly, for html and javascript projects, you would use npm (Node Package Manager) for managing dependencies. To install dependencies listed in the package.json file npm install, you can also run this project on mobile browser or any other coding platform like vs code etc.



## Usage
The provided code animates the smooth movement of a red box (`div` element with id "my_box_realtime") from its initial position to the bottom-right corner of the window. The animation takes 35 seconds, with the box updating its position every 0.5 seconds to create a smooth effect. The code achieves this by calculating the necessary steps for both the X and Y dimensions and using `setTimeout` for periodic updates.

### The Core Team


<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>