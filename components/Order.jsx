import React from 'react';
import OrdersTable from './order/OrdersTable';
import Header from './Header';
import Footer from './Footer';
import AppComponent from './AppComponent';

class Order extends AppComponent {
  render() {
    return (
      (this.auth().isAuthenticated)
        ? (
          <div>
            <Header {...this.props} />
            <section className="main">
              <OrdersTable {...this.props} />
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

export default Order;
