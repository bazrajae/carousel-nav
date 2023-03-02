import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import nike1 from './images/nike1_.jpg';
import nike2 from './images/nike2.jpg';
import nike3 from './images/nike3.jpg';
import nike4 from './images/nike4.png';
import nike5 from './images/nike5.jpg';
import nike6 from './images/nike6.jpg';
import nike7 from './images/nike7.jpg';
function App() {
  const responsive={
  superLargeDesktop:{
    breakpoint:{max: 4000, min:3000},
    items: 5
  },
  desktop:{
    breakpoint:{max: 3000, min:1024},
    items: 3
  },
  tablet:{
    breakpoint:{max: 1024, min:464},
    items: 2
  },
  mobile:{
    breakpoint:{max: 464, min:0},
    items: 1
  },

 };
 
      return (
    <div className="App">

      <h1>chaussures</h1>
      <Carousel responsive={responsive}>
      <div><img src={nike1} alt="img" height={"300 px"} width={"300 px"}/> 
      <h1>nike1</h1>
      <p className='price'>$20.00</p>
      <p> chaussures de sport.</p>
      <p>
        <button>Ajout au panier</button>
      </p>
        </div>

      <div><img src={nike2} alt="img" height={"300 px"} width={"300 px"}/> 
      <h1>nike2</h1>
      <p className='price'>$40.00</p>
      <p> chaussures de sport.</p>
      <p>
        <button>Ajout au panier</button>
      </p>
      </div>
      <div><img src={nike3} alt="img" height={"300 px"} width={"300 px"}/> 
      <h1>nike3</h1>
      <p className='price'>$60.00</p>
      <p> chaussures de sport.</p>
      <p>
        <button>Ajout au panier</button>
      </p>
      </div>

    
      <div><img src={nike4} alt="img" height={"300 px"} width={"300 px"}/> 
      <h1>nike4</h1>
      <p className='price'>$80.00</p>
      <p> chaussures de sport.</p>
      <p>
        <button>Ajout au panier</button>
      </p>
      </div>

      
      <div><img src={nike5} alt="img" height={"300 px"} width={"300 px"}/> 
      <h1>nike5</h1>
      <p className='price'>$90.00</p>
      <p> chaussures de sport.</p>
      <p>
        <button>Ajout au panier</button>
      </p>
      </div>

      
      <div><img src={nike6} alt="img" height={"300 px"} width={"300 px"}/> 
      <h1>nike6</h1>
      <p className='price'>$50.00</p>
      <p> chaussures de sport.</p>
      <p>
        <button>Ajout au panier</button>
      </p>
      </div>
      
      <div><img src={nike7} alt="img" height={"300 px"} width={"300 px"}/>
      <h1>nike7</h1>
      <p className='price'>$200.00</p>
      <p> chaussures de sport.</p>
      <p>
        <button>Ajout au panier</button>
      </p>
      </div>

      </Carousel>
    </div>
  );
}

export default App;
