# Hurricane-Handbook
This mobile application called "Hurricane Handbook" was created to act as a survival guide for the Great Hurricane of 1780. More information about the app could be found on devpost.

## STEP 1: Homescreen
The first step of this project was to create a functioning home screen. The purpose of this page is to attract the attention of the user and provide an insight of app. A picture of hurricane with title text indicating the app name and motto was incorporated to act as an eye opener. Moreover, square-like buttons with ribbons indicating the labels were added to the home page. These buttons are added from TouchableOpacity library of react native. They include: preparation materials, house-proofing, evacuation plan, map routes, relax, and last minute plan. 

## STEP 2: Materials Preparation
This button navigates to a page filled with materials to pack before hurricane. There are images of the supplies taken from amazon and leading to the amazon website. This way, the user can purchase the product if they don't already have it. 

## STEP 3: House Protection
This page of the application provides information on how to seal the windows, doors, and other parts of the house to prevent serious destruction. This section was made using Text and Image feature from react-native.

## STEP 4: Evacuation Plan
This part of the application is composed of only a text feature wherin users can view and follow the steps one at a time. The addition to this page is a view map feature discussed in step 5. 

## STEP 5: Map Routes
MapView feature of react-native was incorporated for this section. The map was zoomed to the region of Georgia, USA, and it contained the markers indicating the location of hotels and the average cost of living per day. 

## STEP 6: Reading Under Hurricane 
This region contained some books categorized by ages to read during the stay. The features like Image and Text was used for this page. 

## STEP 7: Too Late?
The final button contained a three step plan for surviving during the hurricane. It gives a last minute plan for people who are stranded at unique situations. The Text feature was used for the page.

## Test my Product

### Getting Started
1. Download Node JS using https://nodejs.org/en/
2. To publish, package, and write code, enter this command:
npm install expo-cli --global
3. Create a project  on react-native:
  a.) expo init Hurricane-Handbook
  b.) cd Hurricane-Handbook
  c.) expo start
  
  Expo start will display a QR code which needs to be scanned on your phone or i-pad camera and opened in the Expo Client App.
4. Import the files from github to project created


### Running the Simulation
5. Save the files and scan the QR code to view simulation in expo
6. The simulation will display the app logo and direct to homepage
