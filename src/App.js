import React from "react";

// import Cards from './components/cards/cards';
// import Chart from './components/chart/chart';
// import CountryPicker from './components/countryPicker/countryPicker';
import { Cards, Chart, CountryPicker } from "./components"; //importa grazie al file index in components
import styles from "./App.module.css";

import { fetchData } from "./api";

class App extends React.Component {
  state = { 
      data: {}, 
    };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data })
  }

  render() {
      const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
