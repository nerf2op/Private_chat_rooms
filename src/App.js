import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import Modal from './components/LoginForm';
import { Button } from './components/Button';
const App = () => {
  if (!localStorage.getItem('username')) return <Modal />
  return (
    <> 
    
       <div className="con">
         
      <Button />
      <ChatEngine
        height="100vh"
        width="100em"
        projectID="10737ac5-88df-47ef-9bce-116baf8419d6"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}
       />}
      
      />
         </div>
    </>
  );
}

export default App;
