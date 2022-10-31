import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LeftSide from './Components/LeftSide';
import Main from './Components/Main';
import RightSide from './Components/RightSide';
import { useDispatch, useSelector} from 'react-redux';
import { getData } from './Redux/Actions';
import { useEffect } from 'react';


function App() {
const dispatch = useDispatch();
const posts = useSelector((state)=> state?.allApis?.posts)
  
  useEffect(()=>{
    dispatch(getData())
  }, [dispatch])


  return (
    <div className="App">
      <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex justify-content-center mt-1">
          <Header posts={posts}/>
        </div>
      </div>
      <div className="row" style={{ height: "70vh" }}>
        <div className="col-md-4 text-center mt-3">
          <LeftSide posts={posts}/>
        </div>
        <div className="col-md-4 text-center mt-3">
          <Main />
        </div>
        <div className="col-md-4 text-center mt-3">
          <RightSide posts={posts}/>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center mb-2">
          <Footer posts={posts}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
