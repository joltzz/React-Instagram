import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Corpo from './Corpo';
import FooterMobile from './FooterMobile';


function App(){
    return (
        <div>
            <Navbar />
            <Corpo />
            <FooterMobile />
        </div>
    )
}

const divRoot=document.querySelector(".root");
ReactDOM.render(<App />,divRoot);