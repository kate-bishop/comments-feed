import logo from './logo.svg';
import './App.css';

function App() {
  const postComment = () => {
    const comment = {
      name: 'First comment!',
      message: 'welcome to my comments feed!'
    }
    fetch("http://localhost:3001/createComment", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(comment)
    }).then((data) => {
      console.log('hello! created: ', data)
    })
  }

  const getComment = () => {
    fetch("http://localhost:3001/getComments").then((data) => {
      console.log('hello! data: ', data)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          onClick={postComment}
        >
          Create Comment
        </a>
        <a
          className="App-link"
          onClick={getComment}
        >
          Read Comment
        </a>
      </header>
    </div>
  );
}

export default App;
