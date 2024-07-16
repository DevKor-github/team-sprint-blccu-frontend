import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { type AgreementDto } from '@/__generated__/data-contracts';

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const copyCurrentUrl = () => {
  const currentUrl = window.location.href;
  navigator.clipboard.writeText(currentUrl);
};

const getValues = <T extends Record<string, any>>(obj: T) => {
  return Object.values(obj) as [(typeof obj)[keyof T]];
};

const noop = () => {};

const truncate = (str: string, num: number) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
};

const checkIsAgree = (agreements: AgreementDto[], agreementType: string) => {
  const filteredAgreements = agreements.filter(
    (agreement) => agreement.agreementType === agreementType,
  );

  if (filteredAgreements.length === 0) {
    return false;
  }

  return filteredAgreements.some((agreement) => agreement.isAgreed);
};

export { checkIsAgree, cn, copyCurrentUrl, getValues, noop, truncate };
