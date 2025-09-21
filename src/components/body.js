const Body = () => {
    return (
        <div className="pb-8 bg-top bg-cover bg-no-repeat relative -mt-24 pt-24" style= {{ 'backgroundImage': 'https://wp.alithemes.com/html/monst/assets/imgs/backgrounds/intersect.svg'}}>
            <div className="hidden md:block absolute top-0 left-0 mt-32">
                <img className="h-64 lg:h-80 jump" src="https://wp.alithemes.com/html/monst/assets/imgs/illustrations/at_the_park.svg" alt=""/>
            </div>
            <div className="hidden md:block absolute top-0 right-0 mt-32">
                <img className="h-64 lg:h-80 jump" src="https://wp.alithemes.com/html/monst/assets/imgs/illustrations/delivered.svg" alt=""/>
            </div>
            <div className="container">
                <div className="mt-12 mb-12">
                    <div className="max-w-lg mx-auto mb-8 text-center">
                        <span className="inline-block px-3 py-2 text-xs font-semibold bg-blue-200 text-blue-500 rounded-full uppercase">JSCoder</span>
                        <h2 className="text-3xl md:text-4xl mt-4 mb-4 font-bold font-heading">
                            <span>Exclusive</span>
                            <span className="text-blue-600">Agency</span>
                                <span>for technology solution.</span>
                        
                        </h2>
                    </div>
                    <div className="max-w-2xl mx-auto text-center m-20">
                        <h1>A Team of Creative <strong className="text-blue-500">Minds</strong> designing best Apps and Website for the World</h1>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pb-4">
                    <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__ animate__fadeInUp animated" data-wow-delay=".1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
                        <img className="mx-auto" src="https://wp.alithemes.com/html/monst/assets/imgs/logos/brands/brand-1.png" alt=""/>
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__ animate__fadeInUp animated" data-wow-delay=".3s" style={{visibility: 'visible' ,animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                        <img className="mx-auto" src="https://wp.alithemes.com/html/monst/assets/imgs/logos/brands/brand-2.png" alt=""/>
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__ animate__fadeInUp animated" data-wow-delay=".5s" style={{visibility: 'visible' ,animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                        <img className="mx-auto" src="https://wp.alithemes.com/html/monst/assets/imgs/logos/brands/brand-3.png" alt=""/>
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__ animate__fadeInUp animated" data-wow-delay=".7s" style={{visibility: 'visible' ,animationDelay: '0.7s', animationName: 'fadeInUp'}}>
                        <img className="mx-auto" src="https://wp.alithemes.com/html/monst/assets/imgs/logos/brands/brand-4.png" alt=""/>
                    </div>
                    <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__ animate__fadeInUp" data-wow-delay=".9s" style={{visibility: 'visible' ,animationDelay: '0.9s', animationName: 'fadeInUp'}}>
                        <img className="mx-auto" src="https://wp.alithemes.com/html/monst/assets/imgs/logos/brands/brand-5.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;