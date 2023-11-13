import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Widgets() {
  const newsArticle=(heading,subtitle)=>(
    <div className='widgets__article'>
      <div className='widgets__articleleft'>
        <FiberManualRecordIcon />
      </div>

      <div className='widgets__articleright'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>Linkedin News</h2>
        <InfoIcon />
     
      {newsArticle("React is going on everywhere",'It is learning by many')}
      {newsArticle("India on table top", "top news wins 7 matches in arow")}
      {newsArticle("Tesla  company  hits heights","cars & auto mobiles")}
      {newsArticle("Bitcoin break reccord $23k","Crypto - 8000 readers")}
      {newsArticle("Tata launches a new car all over","driver less is now trending")}
      </div>
    </div>
  );
};

export default Widgets;
