'use client';

import React, { useEffect, useState, useTransition } from 'react';
import sampleImage from '../../../public/full-player-image.avif';
import Image from 'next/image';

type FirstComponent = {
  data: any;
};

const FirstComponent = ({ data }: FirstComponent) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  const handleImageLoad = () => {
    setIsLoading(false);
    console.log(isLoading, 'isLoading');
  };

  const handleImageError = () => {
    setIsLoading(false);
    // Handle image loading error, if needed
  };

  return (
    <section
      style={{
        width: '100%',
        height: '500px',
        display: 'flex',
        flexWrap: 'wrap',
        border: '1px solid red',
        overflow: 'scroll',
      }}
    >
      {data?.map((item: any, index: number) => {
        return (
          <section key={index}>
            <p>{item?.title}</p>
            <Image
              src={item?.image}
              width={300}
              height={300}
              alt=''
              loading='lazy'
              //   onLoad={handleImageLoad}
              //   onError={handleImageError}
              onLoadingComplete={() => setIsLoading(false)}
              style={{ opacity: isLoading ? 0 : 1 }}
            />
          </section>
        );
      })}
    </section>
  );
};

export default FirstComponent;
