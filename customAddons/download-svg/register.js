// customAddons/download-svg/register.js

import React from "react";
import camelCase from 'camelcase';
import { addons, types } from '@storybook/addons';
import { useStorybookState } from '@storybook/api';
import { Icons, IconButton } from '@storybook/components';

const DownloadButton = ({ active }) => {
  const { storyId } = useStorybookState();
  const downloadURI = (uri) => {
    const link = document.createElement('a');
    const name = storyId.replace('-story', '').replace('iconography-icons--', '');
    console.log('name', name);
    link.download = `${camelCase(name, { pascalCase: true })}.svg`;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }

  const getDownloadContent = () => {
    const iframe = document.getElementById('storybook-preview-iframe');
    const iWindow = iframe.contentWindow;
    const iDocument = iWindow.document;
    const root = iDocument.getElementById('root');
    const svg = root.innerHTML;
    let source = svg;
    if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
      source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
      source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    }
    source = `<?xml version="1.0" standalone="no"?>\r\n${source}`;
    const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(source)}`;
    return url;
  };

  const onDownload = () => {
    const content = getDownloadContent();
    downloadURI(content);
    return;
  };

  return (
    <IconButton
      active={active}
      title="Download as SVG"
      onClick={onDownload}
    >
      <Icons icon="download" />
    </IconButton>
  );
};

addons.register("flatch/downloadSvg", () => {
  addons.add("flatch/toolbar-download-svg", {
    title: "Download SVG Toolbar button",
    //👇 Sets the type of UI element in Storybook
    type: types.TOOL,
    //👇 Shows the Toolbar UI element if either the Canvas or Docs tab is active
    match: ({ viewMode }) => {
      console.log('viewMode', viewMode)
      return !!(viewMode && viewMode.match(/^(story|docs)$/))
    },
    render: ({ active }) => (
      <DownloadButton
        active={active}
      />
    ),
  });
});
