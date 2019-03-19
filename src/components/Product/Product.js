import React from 'react';
import config from '../../helpers/config';

 const Product = (props) => {
  return (
    <div className='card'>
      <div 
        style={{
          width: '100%',
          height: '300px'
        }}>
        <img src={`${config.url}static/${props.product.img}`} 
          alt="product"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}/>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text mb-3">{props.product.text}</p>
        <button onClick={() => props.navigateToProduct(props.product.id)} className="btn btn-danger">To Product</button>
      </div>
    </div>
  )
}

export default Product;