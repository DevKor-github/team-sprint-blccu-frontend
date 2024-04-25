'use client';

import { useRef } from 'react';

import html2canvas from 'html2canvas';

import Editor from './editor/editor';
import StickerContainer from './stickerContainer';
import Top from './top';

const MainContent = () => {
  const componentRef = useRef(null);

  const captureFullPage = () => {
    html2canvas(document.body, {
      windowWidth: document.body.scrollWidth,
      windowHeight: document.body.scrollHeight,
      x: 0,
      y: 0,
      scrollX: 0,
      scrollY: 0,
    }).then((canvas) => {
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'captured-page.png';
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <div>
      <Top />
      <div ref={componentRef}>
        <button id="screenshot" className={'hidden'} onClick={captureFullPage}>
          캡쳐
        </button>
        <StickerContainer />
        <Editor />
      </div>
    </div>
  );
};

export default MainContent;
