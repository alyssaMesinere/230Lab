import React from 'react';

function Card() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="card" style={{ backgroundColor: 'lightblue', color: 'white' }}>
          <div className="card-body" >
            <h5 className="card-title">Card 1</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{ backgroundColor: 'pink', color: 'white' }}>
          <div className="card-body">
            <h5 className="card-title">Card 2</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{ backgroundColor: 'lightgreen', color: 'white' }}>
          <div className="card-body">
            <h5 className="card-title">Card 3</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Card;