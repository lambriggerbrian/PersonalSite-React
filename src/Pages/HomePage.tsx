/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Section } from '../Components/Section';
import { CenterFlexCol, GridDiv4x4 } from '../Styles';
import { Page } from './Page';
import { GridItem } from '../Components/GridItem';

export const HomePage: FC = () => {
  return (
    <Page>
      <Section>
        <div
          css={css`
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            align-items: center;
            align-content: flex-start;
          `}
        >
          <div
            css={css`
              margin: 35vh 0px 35vh 0px;
              text-align: left;

              @media (min-width: 768px) {
                width: 50%;
                margin-right: 10%;
              }
            `}
          >
            <h1>Hi, I'm Brian Lambrigger</h1>
            <p>
              I am a programmer, designer, and IT professional primarily working
              in web, digital games, and system administration. Sleek design and
              clean code are my passion. I am also an avid film buff, average
              writer, and amateur artist.
            </p>
          </div>
        </div>
      </Section>
      <Section id="solutions" title="Solutions I Offer">
        <div
          css={css`
            align-self: flex-end;
            border: 2px solid white;
            min-width: 25vw;
            margin: auto;
            text-align: left;
          `}
        >
          <CenterFlexCol>
            <ul>
              <li>Web Development</li>
              <li>Web Hosting</li>
              <li>SEO and Accessibility Consulting</li>
              <li>Software Development</li>
              <li>Mobile Development</li>
              <li>Game Design/Development</li>
              <li>IT Consulting</li>
              <li>Personalized Technical Solutions</li>
            </ul>
          </CenterFlexCol>
        </div>
      </Section>
      <Section id="projects" title="Projects">
        <GridDiv4x4>
          <GridItem
            image={process.env.PUBLIC_URL + 'images/gudetama.jpg'}
            alt=""
            title="This Site"
          ></GridItem>
          <GridItem
            image={process.env.PUBLIC_URL + 'images/gudetama.jpg'}
            alt=""
            title="Entity Component System"
          ></GridItem>
          <GridItem
            image={process.env.PUBLIC_URL + 'images/gudetama.jpg'}
            alt=""
            title="Metaballs"
          />
          <GridItem
            image={process.env.PUBLIC_URL + 'images/ntdhome.png'}
            alt=""
            title="NTDDiagrams"
            styled="contain"
          />
          <GridItem
            image={process.env.PUBLIC_URL + 'images/roc.png'}
            alt=""
            title="Rite of Conquest"
          />
          <GridItem
            image={process.env.PUBLIC_URL + 'images/imageserver.png'}
            alt=""
            title="ImageServer"
          />
        </GridDiv4x4>
      </Section>
      <Section id="publications" title="Publications">
        <GridDiv4x4>
          <GridItem
            image={process.env.PUBLIC_URL + 'images/hyped.png'}
            alt=""
            title="HyPED"
          />
        </GridDiv4x4>
      </Section>
    </Page>
  );
};
