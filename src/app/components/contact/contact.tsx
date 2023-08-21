'use client'

import React from 'react';

const ContactArea = () => {
    const phoneNumber = '5511985062196';
    const message = 'Olá, gostaria de saber mais informações!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="text-center m-8">
            <h1>Fale Conosco</h1>
            <p className="mb-4">Faça seu orçamento de maneira prática pelo nosso WhatsApp:</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <button className="bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded cursor-pointer">
                    Clique aqui para enviar uma mensagem
                </button>
            </a>
        </div>
    );
};

export default ContactArea;