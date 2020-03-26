import React from 'react';
import renderer from 'react-test-renderer';
import VideoFrame from './VideoFrame';

describe('VideoFrame', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<VideoFrame youtubeId="vkAhMJ1dZjA" ariaLabel="testing video" title="testing video" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});