import React from 'react';
import CarBrandsTable from './car/brand/CarBrandsTable';
import Header from './Header';
import Footer from './Footer';
import AppComponent from './AppComponent';

class CarBrand extends AppComponent {
  render() {
    return (
      (this.auth().isAuthenticated)
        ? (
          <div>
            <Header {...this.props} />
            <section className="main">
              <CarBrandsTable {...this.props} />
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

export default CarBrand;
