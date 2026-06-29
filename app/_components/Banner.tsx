'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-24 top-14 w-[260px] h-[260px] rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute right-0 top-1/3 w-[320px] h-[320px] rounded-full bg-secondary/10 blur-3xl" />
                <div className="absolute left-1/2 bottom-10 w-[240px] h-[240px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
            </div>
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[620px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-5xl sm:text-6xl md:text-[88px] font-anton">
                        <span className="block text-3xl sm:text-4xl text-secondary mb-3">
                            Hi, I&apos;m <span className="text-primary">Rachit Kumar</span>
                        </span>
                        <span className="block bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
                            FRONTEND / MERN DEVELOPER
                        </span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl">
                        I build modern, high-performance web applications with React, Next.js, and the MERN stack. My focus is on clean UI, fast performance, and pixel-perfect responsiveness.
                    </p>
                    <Button
                        href={`mailto:${GENERAL_INFO.email}?subject=Project%20Inquiry&body=Hi%20I%20want%20to%20discuss%20a%20project`}
                        variant="primary"
                        className="mt-10 banner-button slide-up-and-fade"
                    >
                        Let&apos;s Talk
                    </Button>

                    <div className="flex items-center gap-2 mt-4">
                        <span className="size-3 rounded-full bg-white"></span>
                        <span className="text-sm text-muted-foreground">
                            Available for full-time opportunities
                        </span>
                    </div>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade rounded-3xl border border-white/10 bg-background-light/80 p-6 shadow-[0_30px_80px_-40px_rgba(79,70,229,0.7)] backdrop-blur-xl">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            1.5+
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade rounded-3xl border border-white/10 bg-background-light/80 p-6 shadow-[0_30px_80px_-40px_rgba(14,165,233,0.7)] backdrop-blur-xl">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            7+
                        </h5>
                        <p className="text-muted-foreground">
                            Completed Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade rounded-3xl border border-white/10 bg-background-light/80 p-6 shadow-[0_30px_80px_-40px_rgba(234,179,8,0.7)] backdrop-blur-xl">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            2+
                        </h5>
                        <p className="text-muted-foreground">Freelancing Work Done</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
