import { PsychologyOutlined, MobileFriendlyOutlined, SettingsSuggestOutlined, HandymanOutlined, ExtensionOutlined } from '@mui/icons-material';
import React from 'react';
import ProductCard from './product-card';



const Products = () => {

    const listOfProducts = [
        {
            icon: PsychologyOutlined,
            title: 'Desenvolvimento de Software Personalizado',
            text: 'Criamos soluções de software sob medida para atender às necessidades específicas do seu negócio, garantindo eficiência e escalabilidade.'
        },
        {
            icon: MobileFriendlyOutlined,
            title: 'Criação de Aplicativos Móveis',
            text: 'Transformamos suas ideias em aplicativos móveis inovadores e funcionais, oferecendo uma experiência de usuário excepcional'
        },
        {
            icon: SettingsSuggestOutlined,
            title: 'Consultoria em Tecnologia',
            text: 'Nossos especialistas avaliam suas necessidades tecnológicas e fornecem orientação estratégica para garantir que você esteja usando a tecnologia mais adequada.'
        },
        {
            icon: HandymanOutlined,
            title: 'Manutenção e Suporte',
            text: 'Fornecemos suporte contínuo e manutenção de software para garantir que suas soluções estejam sempre atualizadas e funcionando perfeitamente.'
        },
        {
            icon: ExtensionOutlined,
            title: 'Integração de Sistemas',
            text: 'Facilitamos a integração de diferentes sistemas e aplicativos, garantindo que eles trabalhem juntos de maneira coesa e eficiente.'
        }
    ]

    return (
        <div className="p-16 flex flex-col">
            <h1>Serviços</h1>
            <div className='flex flex-wrap -m-2 justify-center'>
                {listOfProducts.map((product, index) => {
                    return <ProductCard key={index} icon={product.icon} title={product.title} text={product.text} />
                })}
            </div>
        </div>
    )
}

export default Products