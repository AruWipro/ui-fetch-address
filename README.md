# Requirments
- Get al the parter. offices within the given range
- The input location is `Starbucks Cafe Central London `
- Develop an API which would return the offices within the range
- Provide a sort feature where places can be sorted by `Distance` and `Name`


**Table of Contents**

[TOCM]

[TOC]

# What is covered in the project ?
- This project is similar to a search application where user can type in his source location and also enter the range. 
- After entering the details he would receive a list of offices within the range specified.
- In case, where no offices within the range specified the applicaiton would throw an error popup screen which says `Sorry no offices are found`.
	-User can then click on view all offices and get all his partner offices
## Features
- User can specify any source country [![Add Country](Input.png "Add Country")](https://github.com/AruWipro/task-tracker-react/blob/2a272fc634ff0b410e79d9e274aa2b19b3869c3d/Input.png "Add Country")
- User should enter only numbers in the range field **[Only 4 Digits]**
- If there are valid results found, you would see distance and a google map with the destination location
-[![Results](Results "Results")](https://github.com/AruWipro/task-tracker-react/blob/1f434bbcee5fafc82392e99c2c498c8a6fd142c7/Results.png "Results")
- You can click on the map which takes you to a popup
	- 	Popup contains the services offiered by the company 
	- 	It also contains a google map which would open in. a seperate page
	[![Popup](Popup "Popup")](https://github.com/AruWipro/task-tracker-react/blob/1f434bbcee5fafc82392e99c2c498c8a6fd142c7/popup.png "Popup")
- User can also click on the image of the company, which would route him to the website URL
##Approach taken
- Backend was developed using `Express js` and the radial distance was calculated based on the input co-ordinates
- There were two API's exposed, one to display all the partener companies provided and another to fetch all the companies with in the range provided.
- I have created componentes, which are specific to each functionality.
- I have intentionally created some of the components in `Functional` Style and others in `Class` style just to exhibit it.
- I have not used `store` or `redux` as there are few components and there is no dependency of state variables across the components
- When there are no results with respect to the criteria provided, I have populated an error screen 
##Liberties taken
- Have used a dropdown with **all countries** and their corresponding lat,long. This would help in case the partner offices are expanded to further regions
- Max length of range is `4 digits`
- **By default results are populated in the sorting order of distance** **[asceding]**
- Used a library to calculate distance between coordinates

# Where should I test it?
- The applications is hosted on a cloud platform, so that it can be tested easily.
- Use locations like this
    - Singapore
    - United Kingdom
    - Australia
    - Oxfordshire
    - Mexico
    - Nairobi

##Hosted URL
- The application can be tested [here](https://fetch-address-ui.onrender.com "here")
##Screenshots
[![Results](Results "Results")](https://github.com/AruWipro/task-tracker-react/blob/1f434bbcee5fafc82392e99c2c498c8a6fd142c7/Results.png "Results")

#Where is the code ?
- Code is pushed to the git repo and can be accessed here
##Repo Details
```
	- UI Code [Checkout here](https://github.com/AruWipro/ui-fetch-address.git "Checkout here")
	- Backend Code [Checkout here](https://github.com/AruWipro/address-server.git "Checkout here")
```
#Areas that can be further improved
- Add store to maintain the state variables
- Consume `Google Directions API` and plot a polyline between source and destination
- I haven't defined a proper docker file as I don't have a good experience over there
- Cover more teset cases

# How to start? 
For Both react and nodeJs applications, checkout the code and run the below commands
```
npm i
npm start 
```
# Postman Collection

You can check the collection [here](https://documenter.getpostman.com/view/3688471/2s83ziMi1e#8822902c-e066-4401-93af-9919a0b38b04 "here")
                

###End
