'use client';

import { useRef } from 'react';

import html2canvas from 'html2canvas';

import useEditorContentsStore from '@/app/(signed-in-only)/write/store/editorContents';

import Editor from './editor/editor';
import StickerContainer from './stickerContainer';
import Top from './top';

const MainContent = () => {
  const mainContentRef = useRef(null);

  const captureMainContent = () => {
    const node = mainContentRef.current;

    if (node) {
      html2canvas(node).then((canvas) => {
        const imgData = canvas.toDataURL();
        // Create a link element
        const link = document.createElement('a');
        // Set the href to the image data URL
        link.href = imgData;
        // Set the download attribute to the desired file name
        link.download = 'screenshot.png';
        // Trigger a click on the link to start the download
        link.click();
      });
    } else {
      console.error('No node to capture');
    }
  };

  const { backgroundImage } = useEditorContentsStore((state) => state);

  return (
    <div
      className="min-h-dvh bg-contain bg-repeat-y"
      style={{
        backgroundImage:
          backgroundImage !== null ? `url(${backgroundImage})` : 'none',
      }}
    >
      <Top />
      <div ref={mainContentRef}>
        <StickerContainer />
        <Editor />
      </div>
      <button onClick={captureMainContent}>Capture</button>
    </div>
  );
};

export default MainContent;
