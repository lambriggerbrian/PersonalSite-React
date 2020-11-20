import React from 'react';
import Menu, { DropdownMenu } from '../Components/Menu';
import { render, cleanup } from '@testing-library/react';
import manifest from '../../public/manifest.json';

const shortcuts = manifest.shortcuts;

afterEach(cleanup);

test('DropdownMenu displays manifest shortcut data', () => {
  const { queryByText } = render(
    <DropdownMenu links={shortcuts}></DropdownMenu>,
  );
  shortcuts.forEach((element) => {
    let domElement = queryByText(element.short_name);
    expect(domElement).toBeTruthy();
    expect(domElement?.hasAttribute('href'));
    expect(domElement?.getAttribute('href')).toBe(element.url);
  });
});
