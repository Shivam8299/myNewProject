import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function AllProducts() {
    const { products, baseUrl } = useContext(AppContext);

    return (
        <div className='min-h-screen bg-white py-10 px-2 md:px-6'>
            <p className='text-3xl md:text-4xl font-semibold font-serif px-10 py-10'>
                Trending Now
            </p>

            <div className='container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6'>
                {products.map((item) => (
                    <div
                        key={item._id || item.id}
                        className='bg-white border border-gray-300  rounded-sm overflow-hidden transition-shadow duration-300 cursor-pointer group pb-12'
                    >
                        <div className='w-full  overflow-hidden flex items-center justify-center'>
                            <img
                                src={`${baseUrl}/${item.image.replace(/\\/g, '/')}`}
                                alt={item.name || "product"}
                                className=' group-hover:scale-105 transition-transform duration-300'
                            />
                        </div>

                        <div className='p-2 '>
                            <h3 className=' text-sm md:text-base text-gray-600 hover:underline cursor-pointer truncate'>
                                {item.name || "Product Name"}
                            </h3>

                            {/* Optional: Add price if available */}
                            {item.price && (
                                <p className='text-gray-600 text-base md:text-lg mt-1'>
                                    ₹{item.price}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <button>View All</button>
        </div>
    );
}

export default AllProducts;
