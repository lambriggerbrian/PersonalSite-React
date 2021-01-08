/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Section } from '../Components/Layout/Section';
import { CenterFlexCol, GridDiv4x4 } from '../Components/Elements/Styles';
import { Page } from './Page';
import { GridItem } from '../Components/Elements/GridItem';
import { ThisSiteItemData } from '../Data/ThisSiteItem';
import { ECSItemData } from '../Data/ECSItem';
import { NTDDiagramsItemData } from '../Data/NTDDiagramsItem';
import { RiteOfConquestItemData } from '../Data/RiteOfConquestItem';
import { ImageServerItemData } from '../Data/ImageServerItem';
import { HypedItemData } from '../Data/HypedItem';
import { QnAItemData } from '../Data/QnAItem';

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
              margin-top: 35vh;
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
              clean code are my passion. I am also an avid film buff, aspiring
              writer, and hobby artist.
            </p>
          </div>
        </div>
      </Section>
      <Section id="solutions" title="Services Provided">
        <div
          css={css`
            align-self: flex-end;
            border: 2px solid white;
            min-width: 25vw;
            margin: auto;
            text-align: left;
          `}
        >
          <CenterFlexCol style={{ padding: '5px' }}>
            <span>Web Development</span>
            <span>Web Hosting</span>
            <span>SEO and Accessibility Consulting</span>
            <span>Software Development</span>
            <span>Mobile Development</span>
            <span>Game Design/Development</span>
            <span>IT Consulting</span>
          </CenterFlexCol>
        </div>
      </Section>
      <Section id="projects" title="Projects">
        <GridDiv4x4>
          <GridItem data={ThisSiteItemData}></GridItem>
          <GridItem data={ECSItemData}></GridItem>
          <GridItem data={QnAItemData} styled="contain"></GridItem>
          <GridItem data={NTDDiagramsItemData} styled="contain"></GridItem>
          <GridItem data={RiteOfConquestItemData}></GridItem>
          <GridItem data={ImageServerItemData}></GridItem>
        </GridDiv4x4>
      </Section>
      <Section id="publications" title="Publications">
        <GridDiv4x4>
          <GridItem data={HypedItemData}></GridItem>
        </GridDiv4x4>
      </Section>
    </Page>
  );
};
