import React from 'react';
import css from './thingsToDo.module.css';
import styleable from 'react-styleable';
import carouselSlider from '../carouselFunc.js';

class ThingsToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
  }

  componentDidMount() {
    carouselSlider(this.props.css.carousel, this.props.css.entry, this.props.css.prev, this.props.css.next, 7, this.props.css.hidden);
  }

  render() {
    return (
      <div className={this.props.css.root}>
        <h2>Things to do near this home</h2>
        <div className={this.props.css.carousel}>
          {this.props.data.map(thing => (
            <div className={this.props.css.entry}>
              <img src={thing.image} width={280} height={280} mode='fit'></img>
              <div>{thing.thingsType}</div>
              <div>{thing.description}</div>
              <div>{thing.cost}</div>
            </div>
          ))}
         </div>
         <span className={`fas fa-chevron-left ${this.props.css.prev} ${this.props.css.hidden}`}></span>
         <span className={`fas fa-chevron-right ${this.props.css.next}`}></span>
      </div>
    );
  }
}

export default styleable(css)(ThingsToDo);