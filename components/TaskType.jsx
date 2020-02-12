import React from 'react';
import TaskTypesTable from './order/task/TaskTypesTable';
import Header from './Header';
import Footer from './Footer';
import AppComponent from './AppComponent';

class TaskType extends AppComponent {
  render() {
    return (
      (this.auth().isAuthenticated)
        ? (
          <div>
            <Header {...this.props} />
            <section className="main">
              <TaskTypesTable {...this.props} />
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

export default TaskType;
