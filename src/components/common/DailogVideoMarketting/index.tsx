import ContactSale from '@/pages/services/cloudserver/components/Card/DialogContactSale';
import { Dialog, IconButton } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/Blog.module.css';
import IconClose from '/public/ourservices/icon-close.png';
const DailogVideoMarketting = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [openDialogMarketting, setOpenDialogMarketting] =
    useState<boolean>(false);

  const handleCloseDialogMarketting = () => {
    setOpenDialogMarketting(false);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth={'lg'}
        sx={{
          justifyContent: 'center',
          borderRadius: '16px',
          '& .MuiPaper-root': {
            borderRadius: '16px',
          },
        }}
      >
        <div className=" w-[800px] rounded-[16px] bg-[linear-gradient(to_bottom,_#1DE9B6,_#124F5F_100%)]">
          <div className="relative m-[1px] rounded-[16px] bg-[#0F103C] ">
            <div className="flex flex-row-reverse">
              {' '}
              <div className={`${styles.triangle}`}></div>
              <div className={``}></div>
            </div>
            <div className="absolute bottom-0 ">
              {' '}
              <div className={`${styles.triangleLeft}`}></div>
              <div className={``}></div>
            </div>

            <div className="rounded-[16px] bg-[#0F103C] p-[20px] px-10">
              {/* <div className="flex"> */}
              <div className="mb-[20px] mt-[20px] flex justify-center">
                <p className="font-montserrat  text-[24px] font-semibold text-active">
                  PGO
                </p>
              </div>
              <div className="absolute right-[35px] top-[35px] flex justify-end">
                <IconButton onClick={onClose}>
                  <Image src={IconClose} width={20} height={20} alt="" />
                </IconButton>
              </div>
              {/* </div> */}

              <div className="relative h-[379px] w-[100%]">
                <iframe
                  className="h-[379px] w-[100%] rounded-[16px]"
                  src="https://youtube.com/embed/ue80QwXMRHg"
                />
              </div>
              <p className="mb-[18px] mt-[22px] text-center text-[24px] font-semibold text-active"></p>

              <div className="relative">
                <div className="">
                  <div className="mb-[20px] mt-[20px] ">
                    <p className="font-montserrat  text-[24px] font-semibold text-active">
                      PGO
                    </p>
                  </div>
                  <div className="mb-[20px] mt-[20px] ">
                    <p className="font-montserrat  text-[18px] font-normal text-active">
                      Sơ lược dự án
                    </p>
                  </div>
                  <div className="flex flex-[1] items-center">
                    <p className=" font-sans text-[14px] font-normal leading-5 text-white">
                      {
                        'NGE-GW01 là thiết bị trung tâm thông minh. Sử dụng kết nối GSM và Zigbee để thu thập dữ liệu cảm biến và liên kết với ứng dụng di động để xây dựng một hệ thống kiểm soát báo động thông minh cho ngôi nhà, văn phòng, tòa nhà hoặc doanh nghiệp của bạn …NGE-SOS01 là nút bấm khẩn cấp, được sử dụng để báo động trong trường hợp khẩn cấp'
                      }
                    </p>
                  </div>
                  <div className="mt-[7vw] flex justify-center">
                    <div className="">
                      <button
                        className="h-[64px] w-[220px] rounded-[10px] bg-active px-[18px] py-[8px] font-montserrat text-[16px] font-semibold text-navy-5"
                        onClick={() => setOpenDialogMarketting(true)}
                      >
                        Contact Sale
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {openDialogMarketting && (
                <ContactSale
                  open={openDialogMarketting}
                  onClose={handleCloseDialogMarketting}
                />
              )}
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default DailogVideoMarketting;
