import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(
        window.innerWidth < 760 ? smallHeroVideo : heroVideo
    );

    const handleVideoSrcChange = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo);
        } else {
            setVideoSrc(heroVideo);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcChange);
        return () => {
            window.removeEventListener('resize', handleVideoSrcChange);
        };
    }, []);

    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 1.5,
            duration: 1,
            ease: 'power2.inOut',
        });

        gsap.to('#cta', {
            opacity: 1,
            translateY: -50,
            delay: 1.5,
            duration: 0.8,
            ease: 'power2.inOut',
        });
    });
    return (
        <section className="w-full bg-black nav-height relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title">
                    iPhone 15 Pro.
                </p>
                <div className="md:w-10/12 w-9/12">
                    <video
                        autoPlay
                        muted
                        playsInline={true}
                        key={videoSrc}
                        className="pointer-events-none"
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div
                id="cta"
                className="flex flex-col items-center opacity-0 translate-y-20"
            >
                <a href="#highlights" className="btn">
                    Buy
                </a>
                <p className="font-normal text-xl">From $199/month or $999</p>
            </div>
        </section>
    );
};

export default Hero;
