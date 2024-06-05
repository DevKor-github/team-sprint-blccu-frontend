import { useState } from 'react';

import { removeBackground } from '@imgly/background-removal';

const StickerPost = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.src = url;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const desiredWidth = 1000;
      const scaleFactor = desiredWidth / img.width;
      const desiredHeight = img.height * scaleFactor;
      canvas.width = desiredWidth;
      canvas.height = desiredHeight;

      if (ctx === null) {
        return;
      }

      ctx.drawImage(img, 0, 0, desiredWidth, desiredHeight);
      canvas.toBlob((blob) => {
        if (blob === null) {
          return;
        }

        const newImgUrl = URL.createObjectURL(blob);
        setImageSrc(newImgUrl);
      });
    };
  };

  const handleRemoveBackground = async () => {
    if (!imageSrc) return;
    const img = new Image();
    img.src = imageSrc;
    const result = await removeBackground(img.src);
    const newImgUrl = URL.createObjectURL(result);
    setImageSrc(newImgUrl);
  };

  return (
    <div className="fixed bg-white">
      <div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {imageSrc && <img src={imageSrc} alt="image" />}
      </div>
      <div>
        <div>사각형 자르기</div>
        <div onClick={handleRemoveBackground}>외곽선 자르기</div>
      </div>
    </div>
  );
};

export default StickerPost;
