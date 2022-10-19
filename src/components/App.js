import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList"
function App() {
  const contacts = [
    {
      id : "1",
      "name" : "Joji",
      "email" : "joji9919@gmail.com",
    },
    {
      id : "2",
      "name" : "Jijo",
      "email" : "jijo9919@gmail.com",
    },
    {
      id : "3",
      "name" : "Sheela",
      "email" : "Sheela9919@gmail.com",
    },
  ];
  return (
    <div> 
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
      </div>
  );
};

export default App;
