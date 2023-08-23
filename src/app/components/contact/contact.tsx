'use client'

import React from 'react';
import Image from 'next/image';

const ContactArea = () => {
    const phoneNumber = '5511985062196';
    const message = 'Olá, gostaria de saber mais informações!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="text-center m-8">
            <h1>Fale Conosco</h1>
            <p className="text-center text-gray-600 whitespace-normal -mt-5 mb-5">Faça seu orçamento de maneira prática pelo nosso WhatsApp:</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className='flex justify-center mb-24 mt-10'>
                <Image
                    src={`/wpp-logo.svg`}
                    width={70}
                    height={70}
                    alt={`logo-brand-wpp`}
                />
            </a>
        </div>
    );
};

export default ContactArea;