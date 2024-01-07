import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';
import { Link } from 'react-router-dom';
import House from './House'; // Import the House component

const FilterSearch = (props) => {
  const { 
    houses , 
    country,
    setCountry,
    property,
    setProperty,
    price,
    setPrice
  } = useContext(HouseContext);


  const state = props.state
  
  return (
    <div >
          {/* {state !== "show" && (
              <section className='mb-20'>
                <div className="container mx-auto">
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
                      {houses.map((house, index) => (
                        <Link to={`/property/${house.id}`} key={index}>
                        <House house={house} />
                        </Link>

                      ))}
                    </div>
                </div>
                {console.log()}

              </section>
          )}
          {state === "show" && ( 
              <section className='mb-20'>
                <div className="container mx-auto">
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
                    {houses.filter(home => ( home.country === country && home.price === price) && (home.country === country && home.property === property))
                    .map((house, index) => (
                      <div>
                        <Link to={`/property/${house.id}`} key={index}>
                        <House house={house} />
                        </Link>
                      </div>
                      ))}
                    </div>
                </div>
              </section>
          )}
   */}

      <section className='mt-40 mb-20'>
          <div className="container mx-auto">
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
                      {houses.map((house, index) => (
                        <Link to={`/property/${house.id}`} key={index}>
                        <House house={house} />
                        </Link>

                      ))}
                    </div>
                </div>
                {console.log()}

              </section>
    </div>
    
  );
};

export default FilterSearch;
