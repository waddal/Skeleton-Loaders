import React from "react";

const Title = ({ loading }) => {
  if (loading) {
    return (
      <div className="title">
        <p className="skeleton skeleton-text"></p>
        <p className="skeleton skeleton-text"></p>
      </div>
    );
  } else {
    return (
      <div className="title">
        <p className="paragraph">
          Loading icons focus on the loading of the application.
        </p>
        <p className="paragraph">
          Skeleton screens focus on the loading of the content.
        </p>
      </div>
    );
  }
};

export default Title;
