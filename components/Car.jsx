import React from 'react';
import CarsTable from './car/CarsTable';
import Header from './Header';
import Footer from './Footer';
import AppComponent from './AppComponent';

class Car extends AppComponent {
  render() {
    return (
      (this.auth().isAuthenticated)
        ? (
          <div>
            <Header {...this.props} />
            <section className="main">
              <CarsTable {...this.props} />
            </section>
            <Footer />
          </div>
        )
        : (
          <div>
            <Header {...this.props} />
            <section className="main" />
          </div>
        )
    );
  }
}

export default Car;
