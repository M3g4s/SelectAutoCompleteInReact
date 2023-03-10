/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React, { useState } from "react";
import data from "../../../server/data";

class Menu extends React.Component {
  /**
   * Main constructor for the Menu Class
   * @memberof Menu
   */
  constructor() {
    super();
    this.state = {
      showingSearch: false,
      searchTerm: "",
      items: [],
      showItems: false,
    };
  }

  componentDidMount() {
    this.setState({ items: data });
  }

  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */
  showSearchContainer(e) {
    e.preventDefault();
    this.setState({
      showingSearch: !this.state.showingSearch,
    });
  }

  /**
   * Calls upon search change
   * @memberof Menu
   * @param e [Object] - the event from a text change handler
   */
  onSearch(e) {
      // Start Here
    // ...
    this.setState({ searchTerm: e.target.value });
    if (e.target.value != "") {
      this.setState({
        showItems: true,
      });
    } else {
      this.setState({
        showItems: false,
      });
    }
    
  }

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  render() {
    return (
      <header className="menu">
        <div className="menu-container">
          <div className="menu-holder">
            <h1>ELC</h1>
            <nav>
              <a href="#" className="nav-item">
                HOLIDAY
              </a>
              <a href="#" className="nav-item">
                WHAT'S NEW
              </a>
              <a href="#" className="nav-item">
                PRODUCTS
              </a>
              <a href="#" className="nav-item">
                BESTSELLERS
              </a>
              <a href="#" className="nav-item">
                GOODBYES
              </a>
              <a href="#" className="nav-item">
                STORES
              </a>
              <a href="#" className="nav-item">
                INSPIRATION
              </a>

              <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                <i className="material-icons search">search</i>
              </a>
            </nav>
          </div>
        </div>
        <div
          className={
            (this.state.showingSearch ? "showing " : "") + "search-container"
          }
        >
          <input type="text" onChange={(e) => this.onSearch(e)} />
          {this.state.showItems && (
            <ul>
              {this.state.items
                .filter((item) =>
                  item.name
                    .toLowerCase()
                    .includes(this.state.searchTerm.toLowerCase())
                )
                .map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
            </ul>
          )}
          <a href="#" onClick={(e) => this.showSearchContainer(e)}>
            <i className="material-icons close">close</i>
          </a>
        </div>
      </header>
    );
  }
}

// Export out the React Component
export default Menu;
