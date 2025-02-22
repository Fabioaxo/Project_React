import React from 'react';
const recipes = ({title,image}) => {
    return (
        <div className="flex  ml-20 mr-10 mt-10 items-center">
            <img className="w-24 h-24 rounded-full shadow-xl hover:scale-110 transition-transform duration-200" src={image} alt=""/>
            <p className='text-2xl text-green-700 font-bold ml-10 hover:scale-110 transition-transform duration-200 font-verdana'>{title}</p>
            {/* // <Link className='text-2xl text-green-700 font-bold ml-10 hover:scale-110 transition-transform duration-200' to={`/recipesChildren/${key}`}>{title}</Link> */}
            
            
        
        </div>
    );
};

export default recipes