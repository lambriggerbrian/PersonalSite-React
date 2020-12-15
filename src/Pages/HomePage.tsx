/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Section } from '../Components/Section';
import { GridDiv4x4 } from '../Styles';
import { Page } from './Page';
import { GridItem } from '../Components/GridItem';

export const HomePage: FC = () => {
  return (
    <Page>
      <Section>
        <div
          css={css`
            width: 75%;
            text-align: left;

            @media (min-width: 768px) {
              text-align: justify;
            }
          `}
        >
          <span>Hi, I'm Brian Lambrigger</span>
          <p>
            I am a programmer, designer, and IT professional primarily working
            in web, digital games, and system administration. I am a UC Santa
            Cruz alumnus with a degree in Computer Science: Computer Game
            Design, and have had the opportunity to grow my trade with many
            great employers over the years, including the UC Observatories, the
            University of California, and ID Tech. I am also an avid film buff,
            average writer, amateur artist, and alliteration afficionado.
          </p>
          <p>
            Displayed here are some of my personal and professional projects. I
            am always open to new opportunities for both employment and fun, and
            flexible regarding freelance/contract work.
          </p>
        </div>
      </Section>
      <Section id="projects" title="Projects">
        <GridDiv4x4>
          <GridItem
            image={process.env.PUBLIC_URL + 'gudetama.jpg'}
            alt="Gudetama"
            title="This Site"
          />
          <GridItem
            image={process.env.PUBLIC_URL + 'gudetama.jpg'}
            alt="Gudetama"
            title="Entity Component System"
          />
          <GridItem
            image={process.env.PUBLIC_URL + 'gudetama.jpg'}
            alt="Gudetama"
            title="Metaballs"
          />
          <GridItem
            image={process.env.PUBLIC_URL + 'gudetama.jpg'}
            alt="Gudetama"
            title="NTDDiagrams"
          />
          <GridItem
            image={process.env.PUBLIC_URL + 'gudetama.jpg'}
            alt="Gudetama"
            title="Rite of Conquest"
          />
          <GridItem
            image={process.env.PUBLIC_URL + 'gudetama.jpg'}
            alt="Gudetama"
            title="ImageServer"
          />
        </GridDiv4x4>
      </Section>
      <Section id="publications" title="Publications">
        <GridItem
          image={process.env.PUBLIC_URL + 'gudetama.jpg'}
          alt="Gudetama"
          title="HyPED"
        />
      </Section>
      <Section id="contact" title="Contact">
        <span>
          Currently open to both employment opportunities and contract/freelance
          work. You can get in touch with me via:
        </span>
        <ul>
          <li>
            <span>
              Professional Email:{' '}
              <a
                href="mailto:lambrigger.brian@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                lambrigger.brian@gmail.com
              </a>
            </span>
          </li>
          <li>
            <span>
              Github:{' '}
              <a
                href="https://github.com/lambriggerbrian"
                target="_blank"
                rel="noreferrer"
              >
                lambriggerbrian
              </a>
            </span>
          </li>
          <li>
            <span>
              Linkedin:{' '}
              <a
                href="https://www.linkedin.com/in/brian-lambrigger-81539810b/"
                target="_blank"
                rel="noreferrer"
              >
                Profile
              </a>
            </span>
          </li>
        </ul>
      </Section>
    </Page>
  );
};
