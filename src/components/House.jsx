import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } = house;

  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer'>
      <img src={image} alt='' />
      <div>
        <div>{type}</div>
        <div>{country}</div>
      </div>
    </div>
  )
}

export default House