import './App.css';
// import star from './images/icon-star.svg';
import smith from './images/image-colton.jpg';
import roberts from './images/image-irene.jpg';
import wallace from './images/image-anne.jpg';

function App() {
  return (
    <>
      <div className='header-section'>
          <div className='cta'>
            <h1>10,000+ of our users love our products.</h1>
            <p>We only provide great products combined with excellent 
              customer service. See what our satisfied customers are 
              saying about our services.</p>
          </div>

          <div className='ratings'>

            <div className='reviews'>
              <div className='star-rating'>
                <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/>
                </svg>
              </div>

              <p>Rated 5 Stars in Reviews</p>
            </div>
            <div className='reportGuru'>
              <div className='star-rating'>
                <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/>
                </svg>
              </div>
              <p>Rated 5 Stars in Report Guru</p>
            </div>
            <div className='bestTech'>
              <div className='star-rating'>
                <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/>
                </svg>
              </div>
              <p>Rated 5 Stars in BestTech</p>
            </div>
          </div>
      </div>


      <div className='testimonials'>
        <div className='colton'>
            <div className='profile'>
              <img src={smith} alt=""/>
              <div>
                <h4>Colton Smith</h4>
                <p>Verified Buyer</p>
              </div>
            </div>
            <p className='par'>"We needed the same printed design as the one we had ordered 
                a week prior. Not only did they find the original order, but 
                we also received it in time. Excellent!"</p>
        </div>

        <div className='irene'>
            <div className='profile'>
              <img src={roberts} alt=""/>
              <div>
                <h4>Irene Roberts</h4>
                <p>Verified Buyer</p>
              </div>
            </div>
            <p className='par'>"Customer service is always excellent and very quick turn around. 
                Completely delighted with the simplicity of the purchase and the
                speed of delivery."</p>
          </div>

        <div className='anne'>
          <div className='profile'>
           <img src={wallace} alt=""/>
            <div>
              <h4>Anne Wallace</h4>
              <p>Verified Buyer</p>
            </div>
          </div>
            <p className='par'>"Put an order with this company and can only praise them for the 
                very high standard. Will definitely use them again and recommend 
                them to everyone!"</p>
          </div>
        
      </div>
    </>
  );
}

export default App;

