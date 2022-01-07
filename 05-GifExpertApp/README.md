# GifExpertApp

This is a simple application that allow the user to look for gifs matchin a topic.
Basically the user needs to write a category in the textfield and hit enter.
Automatically 10 images matching the topic will be added to the web.

## How it works

The main components is GifExpertApp, which adds a AddCategory component, and a undefined
number of GifGrid components.

When the user hit enter after writing a category, a new category is added, triggering 
a custom hook (useFetcGifs) that serve relevant data for the grid to create new GifGridItems. 
One for each image received on the hook update.

The hook retrieves info from API by calling a helper (getGifs), which is the one that uses http calls to receive the data.

In short, every time the user adds a new category, it is added to the list, creating a new grid and 10 images matching the topic of the category.

# Tests

Test has been done by using enzyme and react-hook-test libraries, along with jest.

The test done prove that the application works as intended.