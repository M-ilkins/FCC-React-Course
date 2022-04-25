import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const root = document.getElementById('root');

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



