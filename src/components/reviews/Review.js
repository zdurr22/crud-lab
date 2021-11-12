import React, { Component } from 'react';

class Review extends Component {
  handleOnClick = event => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const { review } = this.props;

    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleOnClick}> X </button>
      </div>
    );
  }

};

export default Review;
