import React from 'react';
import CarModelsTable from './car/model/CarModelsTable';
import Header from './Header';
import Footer from './Footer';
import AppComponent from './AppComponent';

class CarModel extends AppComponent {
  render() {
    return (
      (this.auth().isAuthenticated)
        ? (
          <div>
            <Header {...this.props} />
            <section className="main">
              <CarModelsTable {...this.props} />
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

export default CarModel;
