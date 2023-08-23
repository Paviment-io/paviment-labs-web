import React from 'react';
import Image from 'next/image';

const logos = [`btg`, `loft`, `vivo`, `sirio_libanes`,
  `ditto`, `james_delivery`, `magalu`, `estacio`,
  `healthiq`, `r2imports`];

const ClientLogos = () => {
  return (
    <div className="clients">
      <div className="client-logos">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={`/marcas/${logo}.svg`}
            width={100}
            height={100}
            alt={`logo-brand-${logo}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
