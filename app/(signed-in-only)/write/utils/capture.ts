import html2canvas from 'html2canvas';

const capture = async (element: HTMLElement) => {
  const canvas = await html2canvas(element, {
    allowTaint: true,
    useCORS: true,
  });

  return canvas.toDataURL();
};

export { capture };
