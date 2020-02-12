import React from 'react';
import MaterialTypeTable from './order/material/MaterialTypesTable';
import Header from './Header';
import Footer from './Footer';
import AppComponent from './AppComponent';

class MaterialType extends AppComponent {
  render() {
    return (
      (this.auth().isAuthenticated)
        ? (
          <div>
            <Header {...this.props} />
            <section className="main">
              <MaterialTypeTable {...this.props} />
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

export default MaterialType;
