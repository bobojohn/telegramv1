import React from 'react';
import './App.css';
import ContactItem from './components/ContactItem/ContactItem';

function App() {
  const contacts = [
    { id: 1, name: 'SomeOne', imgUrl: "https://i.pravatar.cc/150?img=12", lastMessage: 'Bay', online: true, htag: '#friend' },
    { id: 2, name: 'AnyOne', imgUrl: "https://i.pravatar.cc/150?img=13", lastMessage: 'Hi', online: true, htag: '#friend' },
    { id: 3, name: 'SomeBody', imgUrl: "https://i.pravatar.cc/150?img=9", lastMessage: 'Привет', online: false, htag: '#friend' },
    { id: 4, name: 'SomeBody', imgUrl: "https://i.pravatar.cc/150?img=10", lastMessage: 'Как ты', online: false, htag: '#friend' },
    { id: 5, name: 'SomeBody', imgUrl: "https://i.pravatar.cc/150?img=2", lastMessage: 'How are you?', online: true, htag: '#friend' },
    { id: 6, name: 'SomeBody', imgUrl: "https://i.pravatar.cc/150?img=5", lastMessage: 'Чем занимаешся?', online: false, htag: '#friend' },
    { id: 7, name: 'SomeBody', imgUrl: "https://i.pravatar.cc/150?img=1", lastMessage: 'Пока', online: true, htag: '#friend' },

  ]
  return (
    <div >
      {contacts.map(o => <ContactItem name={o.name} imgUrl={o.imgUrl} lastMessage={o.lastMessage} htag={o.htag} online={o.online} />)}
    </div>
  );
}

export default App;
