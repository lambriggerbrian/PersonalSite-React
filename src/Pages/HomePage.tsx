/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Section } from '../Components/Section';
import { GridDiv4x4, PlaceholderDiv, SpacerDiv } from '../Styles';
import { Page } from './Page';

export const HomePage: FC = () => {
  return (
    <Page>
      <Section>
        <div
          css={css`
            width: 75%;
            text-align: justify;
            text-justify: inter-word;
          `}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Section>
      <Section id="about" title="About Me">
        <SpacerDiv>This forces scroll space</SpacerDiv>
      </Section>
      <Section id="projects" title="Projects">
        <GridDiv4x4>
          <PlaceholderDiv />
          <PlaceholderDiv />
          <PlaceholderDiv />
          <PlaceholderDiv />
        </GridDiv4x4>
      </Section>
      <Section id="publications" title="Publications">
        <GridDiv4x4>
          <PlaceholderDiv />
          <PlaceholderDiv />
          <PlaceholderDiv />
          <PlaceholderDiv />
        </GridDiv4x4>
      </Section>
      <Section id="contact" title="Contact">
        <span>You can get in contact with me as follows:</span>
        <ul>
          <li>
            <span>Professional Email: lambrigger.brian@gmail.com</span>
          </li>
          <li>
            <span>Github: lambriggerbrian</span>
          </li>
        </ul>
      </Section>
    </Page>
  );
};
