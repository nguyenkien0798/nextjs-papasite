import moment from "moment";

export async function dataUrlToFile(
  dataUrl: string,
  fileName: string
): Promise<File> {
  const res: Response = await fetch(dataUrl);
  const blob: Blob = await res.blob();
  return new File([blob], fileName, { type: 'image/svg+xml' });
}

export type ObjValues = Record<string, unknown>;

export const formatDate = (changeDate: number) => {
  const monthList = ['January', "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const day = moment(changeDate).format('DD');
  const month = monthList[Number(moment(changeDate).format('M')) - 1];
  const year = moment(changeDate).format('YYYY');
  const time = moment(changeDate).format('HH:mm');

  return `${day} ${month} ${year} ${time}`
}

export const openWhatsapp = (phone: string) => {
  window.open('https://wa.me/' + phone)
}

export const convertQuestion = (title: string) => {
  const _title = title.toLowerCase().split(' ');
  return _title.join('-')
}
export const openMail = (mail: string) => {
  window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=' + mail);
};