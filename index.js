const root = document.getElementById('root');

function Header(){
  return (
      <header>
            <nav>
                <img src="./react-logo.png" className="react-logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
  )
}

function MainContent() {
  return (
      <main className="main-container">
      <h1>Reason i'm excited about React</h1>
      <ol className="reasons-container">
            <li>Learn a framework developed by the talent of Facebook!</li>
            <li>Continue to polish web-dev skills!</li>
            <li>Make truckloads of cash (;!</li>
      </ol>
      </main>
  )
}



function Footer() {
  return (
      <footer className="footer">
            <small>&copy; 2022 Wilkins development. All rights reserved.</small>
            <small>A FreeCodeCamp YouTube follow along! Learning React (:</small>
      </footer>
  )
}

function Page() {
  return (
      <div className="page-container">
        <Header/>
        <MainContent/>
        <Footer/>
      </div>
  )
};

ReactDOM.render(<Page/>, root);



