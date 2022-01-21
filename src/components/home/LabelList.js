import React from 'react';
import './LabelList.css'
const LabelList = ({img,count,label,classname,star}) => {
  return(
    <div className='labelList'>
    <div className={classname}>
        <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>
        </svg>
        <div className='labelList__content'>
            <img src={img} alt='like' />
            
           { star && <img src={star} alt='star' className='labelList_star'/>}
            <span className='labelList__count'>{count}</span>
            <p style={{color:'#000', opacity: 0.6,fontSize:'1.5rem'}}>{label}</p>
        </div>
    </div>

    </div>
  ) 
};

export default LabelList;
