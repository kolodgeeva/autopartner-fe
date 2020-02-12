import React from 'react';
import CarTypesTable from './car/type/CarTypesTable';
import Header from './Header';
import Footer from './Footer';
import AppComponent from './AppComponent';

class CarType extends AppComponent {
  render() {
    return (
      (this.auth().isAuthenticated)
        ? (
          <div>
            <Header {...this.props} />
            <section className="main">
              <CarTypesTable {...this.props} />
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

export default CarType;
