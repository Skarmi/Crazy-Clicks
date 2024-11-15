import React, { useEffect, useRef } from 'react';
import './App.css';
import logo from './AppIcon.jpeg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleTouchMove = (event) => {
      if (carouselRef.current) {
        event.preventDefault();
        const scrollAmount = event.touches[0].clientX * 0.75;
        carouselRef.current.scrollLeft -= scrollAmount;
      }
    };

    const handleWheel = (event) => {
      if (carouselRef.current) {
        event.preventDefault();
        carouselRef.current.scrollLeft += event.deltaY * 0.75;
      }
    };

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener('touchmove', handleTouchMove, { passive: false });
      carouselElement.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('touchmove', handleTouchMove);
        carouselElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="branding">
          <img src={logo} alt="CrazyClicks Logo" className="logo" />
          <h1 className="site-title">CrazyClicks</h1>
        </div>
        <div className="location-bar">
          <span className="location-icon">📍</span>
          <input type="text" placeholder="Search Location" defaultValue="Cuttack, Orissa, 753012" />
        </div>
        <input type="text" className="search-bar" placeholder="Search Photographers" />
      </header>

      {/* Categories */}
      <div className="categories">
        <div className="category">Weddings</div>
        <div className="category">Birthdays</div>
        <div className="category">Solo Shoots</div>
        <div className="category">Family</div>
        <div className="category">Events</div>
      </div>

      {/* Top Photographers Section */}
      <div className="section">
        <h2>Top Photographers</h2>
        <div className="carousel-wrapper" ref={carouselRef}>
          <Carousel
            showArrows
            infiniteLoop
            swipeable={false}
            showThumbs={false}
            showStatus={false}
            emulateTouch
            centerMode
            centerSlidePercentage={25}
            transitionTime={750}
          >
            <div className="photographer-card">
              <img src={`${process.env.PUBLIC_URL}/top-photographer.jpg`} alt="Photographer 1" />
              <h3>Photographer 1</h3>
              <p>Rating: ★★★★☆</p>
            </div>
            <div className="photographer-card">
              <img src={`${process.env.PUBLIC_URL}/top-photographer.jpg`} alt="Photographer 2" />
              <h3>Photographer 2</h3>
              <p>Rating: ★★★★☆</p>
            </div>
            <div className="photographer-card">
              <img src={`${process.env.PUBLIC_URL}/quick-photographer.jpg`} alt="Photographer 3" />
              <h3>Photographer 3</h3>
              <p>Rating: ★★★★☆</p>
            </div>
            <div className="photographer-card">
              <img src={`${process.env.PUBLIC_URL}/quick-photographer.jpg`} alt="Photographer 4" />
              <h3>Photographer 4</h3>
              <p>Rating: ★★★★☆</p>
            </div>
            <div className="photographer-card">
              <img src={`${process.env.PUBLIC_URL}/quick-photographer.jpg`} alt="Photographer 5" />
              <h3>Photographer 5</h3>
              <p>Rating: ★★★★☆</p>
            </div>
            <div className="photographer-card">
              <img src={`${process.env.PUBLIC_URL}/quick-photographer.jpg`} alt="Photographer 6" />
              <h3>Photographer 6</h3>
              <p>Rating: ★★★★☆</p>
            </div>
          </Carousel>
        </div>
      </div>

      {/* Quick Photographers Section */}
      <div className="section">
        <h2>Quick Photographers</h2>
        <div className="carousel-wrapper" ref={carouselRef}>
          <Carousel
            showArrows
            infiniteLoop
            swipeable={false}
            showThumbs={false}
            showStatus={false}
            emulateTouch
            centerMode
            centerSlidePercentage={25}
            transitionTime={750}
          >
            <div className="photographer-card">
              <img src={`${process.env.PUBLIC_URL}/quick-photographer.jpg`} alt="Photographer 7" />
              <h3>Photographer 7</h3>
              <p>Rating: ★★★★☆</p>
            </div>
            <div className="photographer-card">
              <img src={`${process.env.PUBLIC_URL}/quick-photographer.jpg`} alt="Photographer 8" />
              <h3>Photographer 8</h3>
              <p>Rating: ★★★★☆</p>
            </div>
            <div className="photographer-card">
              <img src={`${process.env.PUBLIC_URL}/quick-photographer.jpg`} alt="Photographer 9" />
              <h3>Photographer 9</h3>
              <p>Rating: ★★★★☆</p>
            </div>
            <div className="photographer-card">
              <img src={`${process.env.PUBLIC_URL}/quick-photographer.jpg`} alt="Photographer 10" />
              <h3>Photographer 10</h3>
              <p>Rating: ★★★★☆</p>
            </div>
            <div className="photographer-card">
              <img src={`${process.env.PUBLIC_URL}/quick-photographer.jpg`} alt="Photographer 11" />
              <h3>Photographer 11</h3>
              <p>Rating: ★★★★☆</p>
            </div>
            <div className="photographer-card">
              <img src={`${process.env.PUBLIC_URL}/quick-photographer.jpg`} alt="Photographer 12" />
              <h3>Photographer 12</h3>
              <p>Rating: ★★★★☆</p>
            </div>
          </Carousel>
        </div>
      </div>

      {/* Testimonials */}
      <div className="section">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <p>"Amazing service! Highly recommend."</p>
          <span>- Satisfied Customer</span>
        </div>
        <div className="testimonial">
          <p>"Captured our wedding beautifully."</p>
          <span>- Newlywed Couple</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <img src={logo} alt="CrazyClicks Logo" className="footer-logo" />
        <p>&copy; 2024 CrazyClicks. All rights reserved.</p>
        <div className="social-media">
          <span>Follow us:</span>
          <span className="social-icon">📷</span>
          <span className="social-icon">📷</span>
          <span className="social-icon">📷</span>
        </div>
      </footer>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-item">Home</div>
        <div className="nav-item">Offer</div>
        <div className="nav-item">Cart</div>
        <div className="nav-item">Account</div>
      </nav>
    </div>
  );
}

export default App;
