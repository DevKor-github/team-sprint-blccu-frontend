import html2canvas from 'html2canvas';

// ???
const dragEvent = (
  onDragChange: (dx: number, dy: number) => void,
  stopPropagation?: boolean,
) => {
  return {
    onPointerDown: (clickEvent: any) => {
      if (stopPropagation) clickEvent.stopPropagation();

      const moveHandler = (moveEvent: any) => {
        const dx = moveEvent.screenX - clickEvent.screenX;
        const dy = moveEvent.screenY - clickEvent.screenY;
        onDragChange(dx, dy);
      };

      const endHandler = () => {
        document.removeEventListener('pointermove', moveHandler);
      };

      document.addEventListener('pointermove', moveHandler);
      document.addEventListener('pointerup', endHandler, { once: true });
    },
  };
};

const capture = async (element: HTMLElement) => {
  const canvas = await html2canvas(element, {
    allowTaint: true,
    useCORS: true,
  });

  return canvas.toDataURL();
};

export { capture, dragEvent };
