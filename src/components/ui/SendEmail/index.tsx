const SendEmail = () => {
  return (
    <div className='w-[950px] mx-auto pb-[100px]'>
      <div className="text-2xl font-semibold leading-[29px] tracking-wider text-[#F8F8F8]">
        <p>LET US PROVIDE A BETTER</p>
        <p>TECHNOLOGY SOLUTION FOR YOUR BUSINESS.</p>
      </div>
      <div className="mt-[40px] text-lg font-semibold leading-[22px] tracking-wider text-[#1DE9B6]">
        GET IN TOUCH
      </div>
      <div className="mt-[17px] flex">
        <input
          className="h-[64px] flex-3 border-2 border-solid border-navy-1 bg-transparent px-6 text-[18px] leading-6"
          type="email"
          placeholder="Enter your email"
        />
        <button className="ml-[24px] h-[64px] flex-[0.7] border-2 border-solid border-active p-4 text-[18px] font-semibold leading-6">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default SendEmail;
