<h1>Contact App Using React </h1> <br>

Creating React App :- 


command :   npx create-react-app contact-app
             cd contact-app
Start the server : npm start

Contact App Folder Structure:-

* Remove all the files under SRC folder
* Create Folders :  Components ---> App.js , AddContact , ContactCard , ContactList & Header.

Add Semantic UI to Project:- (Styling)

command :    npm install semantic-ui-react semantic-ui-css
link : https://react.semantic-ui.com/

React JSX:-
Import components to the App.js

Functional Component: 
Functional components method is used in Header.js file.

Class Compnents: 
Class components method is used in AddContact.js file.

Rendering the list in React:-

* Create const ContactList with json {id , name , email}

Accessing Props:-

Access the props using Render  props and map.

(ie) const renderContactList = props.conmtact.map((contact) => {
return() };







