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
        <img src={process.env.PUBLIC_URL + '/gudetama.jpg'} />
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
            <span>Personal/Hobby Email: sunsh1n3xb34r@gmail.com</span>
          </li>
          <li>
            <span>Github: lambriggerbrian</span>
          </li>
        </ul>
      </Section>
    </Page>
  );
};
