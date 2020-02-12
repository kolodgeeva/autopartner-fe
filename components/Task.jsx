import React from 'react';
import TasksTable from './order/task/TasksTable';
import Header from './Header';
import Footer from './Footer';
import AppComponent from './AppComponent';

class Task extends AppComponent {
  render() {
    return (
      (this.auth().isAuthenticated)
        ? (
          <div>
            <Header {...this.props} />
            <section className="main">
              <TasksTable {...this.props} />
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

export default Task;
