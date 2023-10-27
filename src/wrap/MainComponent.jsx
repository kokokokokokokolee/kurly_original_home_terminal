import React from 'react';
import Section1Component from './main/Section1Component';
import Section2Component from './main/Section2Component';
import Section3Component from './main/Section3Component';
import Section4Component from './main/Section4Component';
import Section5Component from './main/Section5Component';

export default function MainComponent({currentViewProduct}) {
    
    return (
        <main id='main'>
            <Section1Component />
            <Section2Component currentViewProduct={currentViewProduct} />
            <Section3Component currentViewProduct={currentViewProduct}/>
            <Section4Component currentViewProduct={currentViewProduct}/>
            <Section5Component currentViewProduct={currentViewProduct}/>
        </main>
    );
};
