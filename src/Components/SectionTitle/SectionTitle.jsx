import React from 'react';
import {Italiana} from 'next/font/google';

const italiana = Italiana({subsets: ['latin'], weight: '400'});

const SectionTitle = ({size = 80, color = 'black', children}) => {
    return (
        <h2
            style={
                {
                    fontSize: `${size / 16}rem`,
                    color: color === "black" ? "var(--black)" : color === "white" ? "var(--white)" : "var(--white)",
                    textTransform: "uppercase"
                }
            }
            className={italiana.className}
        >
            {children}
        </h2>
    );
};

export default SectionTitle;