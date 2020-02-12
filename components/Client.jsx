import React from 'react';
import ClientsTable from './client/ClientsTable';
import Header from './Header';
import Footer from './Footer';
import AppComponent from './AppComponent';

class Client extends AppComponent {
  render() {
    return (
      (this.auth().isAuthenticated)
        ? (
          <div>
            <Header {...this.props} />
            <section className="main">
              <ClientsTable {...this.props} />
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

export default Client;
