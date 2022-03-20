import React from "react";

const Card = ({ loading }) => {
  if (loading) {
    return (
      <div className="card">
        <header>
          <img className="header-img skeleton" src="#" alt="cardImg" />
          <div className="skeleton skeleton-text"></div>
        </header>
        <section className="card-body">
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </section>
      </div>
    );
  } else {
    return (
      <div className="card">
        <header>
          <img
            className="header-img"
            src="https://http.cat/200"
            alt="cardImg"
          />
          <div className="title">meow</div>
        </header>
        <section className="card-body">
          <p>
            Legend has it that, on the night Siddhartha was conceived, Queen
            Maya dreamt that a white elephant with six white tusks entered her
            right side, and ten months later Siddhartha was born.
          </p>
        </section>
      </div>
    );
  }
};

export default Card;
