import React from 'react';
import Product from './Product';

function MainFeed({ products }) {
  return (
    <div className='grid grid-flow-row-dense xl:-mt-60 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:-mt-76 md:-mt-40 mx-auto'>
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}

      <img
        className='md:col-span-full'
        src='https://dev3027public.s3.amazonaws.com/amazon_clone/1110572_smb_gw_desktop_1500x300_lavolio_1x_uk._CB484123630_.jpg'
        alt='Advertisement'
      />

      <div className='md:col-span-2'>
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
    </div>
  );
}

export default MainFeed;
