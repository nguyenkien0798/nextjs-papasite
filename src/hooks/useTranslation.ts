import { useRouter } from 'next/router';
import * as en from '@/locales/en/translation.json';
import * as vi from '@/locales/vi/translation.json';

const useTranslation = () => {
  const { locale } = useRouter();
  return locale === 'en' ? en : vi;
};

export default useTranslation;
