import React from 'react';

const UpperCard = ({ imageSrc, paragraphText, name }) => {
  return (
<div className="card-container mx-7 my-7 shadow-2xl bg-white overflow-hidden" style={{ width: '391px', height: '552px',  display: 'flex', flexDirection: 'column' }}>
      <img src={imageSrc} alt="Card Image" className="card-image w-full h-64 object-cover" style={{ height: '292px' }} />
      <div className="card-content px-4 py-2" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0em', textAlign: 'left', color: '#887C68' }}>
        <p className="paragraph-text overflow-hidden">{paragraphText}</p>
      </div>
      <div className="flex-grow"></div>
      <div className="card-footer bg-gray-100 h-20 flex items-center justify-between px-4" style={{fontSize:'22px',fontWeight:400,color: '#887C68'}}>
        <p className="name text-lg text-gray-800" >{name}</p>
      </div>
    </div>
  );
};

export default UpperCard;
