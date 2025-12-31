import React from 'react';
import Image from 'next/image';
import './LaptopMockup.css';

const LaptopMockup = ({ imageSrc, alt = "Website Mockup", autoScroll = false, sizes = "100vw" }) => {
    return (
        <div className="laptop-mockup-container">
            <div className="laptop-wrapper">
                <div className="laptop-screen-frame">
                    <div className="laptop-camera"></div>
                    <div className="laptop-screen-content">
                        <Image
                            src={imageSrc}
                            alt={alt}
                            className={`laptop-image ${autoScroll ? 'auto-scroll' : ''}`}
                            fill
                            sizes={sizes}
                            style={{
                                objectFit: 'cover',
                            }}
                            priority={true}
                        />
                    </div>
                </div>
                <div className="laptop-base"></div>
            </div>
        </div>
    );
};

export default LaptopMockup;
