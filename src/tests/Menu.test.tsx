import React from 'react';
import Menu from '../Components/Menu';
import { render, fireEvent, cleanup } from '@testing-library/react';
import manifest from '../manifest.json';

const shortcuts = manifest.shortcuts;

afterEach(cleanup);

test('Menu toggles dropdown on click', () => {
  const mockData = [{ name: 'Test', short_name: 'Test', url: '/' }];
  const { container, queryByText } = render(<Menu links={mockData} />);
  expect(queryByText('Test')).toBeFalsy();
  const menuDiv = container.firstElementChild;
  expect(menuDiv).toBeTruthy();
  if (menuDiv) fireEvent.click(menuDiv);
  expect(menuDiv?.childElementCount).toBeGreaterThan(0);
});

test('Menu displays dropdown on mouse enter', () => {
  const mockData = [{ name: 'Test', short_name: 'Test', url: '/' }];
  const { container, queryByText } = render(<Menu links={mockData} />);
  expect(queryByText('Test')).toBeFalsy();
  const menuDiv = container.firstElementChild;
  expect(menuDiv).toBeTruthy();
  if (menuDiv) fireEvent.mouseEnter(menuDiv);
  expect(menuDiv?.childElementCount).toBeGreaterThan(0);
});

test('Dropdown displays manifest shortcut data', () => {
  const { container, queryByText } = render(<Menu links={shortcuts}></Menu>);
  const menuDiv = container.firstElementChild;
  expect(menuDiv).toBeTruthy();
  if (menuDiv) fireEvent.mouseEnter(menuDiv);
  shortcuts.forEach((element) => {
    let domElement = queryByText(element.short_name);
    expect(domElement).toBeTruthy();
    expect(domElement?.hasAttribute('href'));
    expect(domElement?.getAttribute('href')).toBe(element.url);
  });
});
