import React from 'react';
import MaterialsTable from './order/material/MaterialsTable';
import Header from './Header';
import Footer from './Footer';
import AppComponent from './AppComponent';

class Material extends AppComponent{
  render() {
    return (
      (this.auth().isAuthenticated)
        ? (
          <div>
            <Header {...this.props} />
            <section className="main">
              <MaterialsTable {...this.props} />
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

export default Material;
