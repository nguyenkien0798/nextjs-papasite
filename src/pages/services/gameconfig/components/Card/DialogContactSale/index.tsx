import React, { useState } from 'react';
import {
  Dialog,
  Box,
  IconButton,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
} from '@mui/material';
import IconClose from '/public/ourservices/icon-close.png';
import Image from 'next/image';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactSale = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [valueClientType, setValueClientType] = useState();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [service, setService] = useState<string>();
  const [valuePackage, setValuePackage] = useState<string>();
  const [time, setTime] = useState<string>();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required('This field is required')
      .max(50, 'No more than 50 characters'),
    email: yup
      .string()
      .required('This field is required')
      .email('Incorrect format'),
    description: yup.string().required('Please enter description'),
  });

  const {
    control,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(formSchema), mode: 'all' });

  const handleChangeClientType = (e: any) => {
    setValueClientType(e.target.value);
  };

  const handleChangeService = (e: any) => {
    setService(e.target.value);
  };

  const handleChangePackage = (e: any) => {
    setValuePackage(e.target.value);
  };

  const handleChangeTime = (e: any) => {
    setTime(e.target.value);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          background: 'linear-gradient(to_bottom,_#1DE9B6,_#124F5F_100%)',
          borderRadius: '16px',
          border: '1px solid #1DE9B6',
        },
      }}
    >
      <div className="">
        <div className="h-[100%] w-[100%] rounded-[16px] bg-navy-5">
          <div className="p-[16px]">
            <div className="flex justify-end">
              <IconButton onClick={onClose}>
                <Image src={IconClose} width={20} height={20} alt="" />
              </IconButton>
            </div>
            <div className="text-center text-[24px] font-semibold text-active">
              <p>CONTACT SALE - GAMES</p>
            </div>
            <div className="max-h-[500px] overflow-y-auto px-[16px] py-[20px]">
              {/*-----------------------------Full name-----------------------------*/}
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#FFFFFF',
                  fontSize: 18,
                  fontWeight: 600,
                  display: 'flex',
                  marginBottom: '10px',
                }}
              >
                {'Full Name'}
                <Typography
                  sx={{
                    fontSize: 15,
                    fontWeight: 400,
                    margin: '1px 3px 0px 4px',
                    color: '#1DE9B6',
                  }}
                >
                  *
                </Typography>
              </Typography>
              <Controller
                control={control}
                name="name"
                render={({ field }) => {
                  return (
                    <input
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '0 12px',
                        border: '2px solid #5D70AB',
                        borderRadius: '12px',
                        fontSize: '16px',
                      }}
                      {...field}
                      id="name"
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                      placeholder="Enter full name"
                    />
                  );
                }}
              />
              {/*-----------------------------Client type-----------------------------*/}
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#FFFFFF',
                  fontSize: 18,
                  fontWeight: 600,
                  display: 'flex',
                  mt: '20px',
                }}
              >
                {'Client type?'}
              </Typography>
              <RadioGroup
                value={valueClientType}
                onChange={handleChangeClientType}
              >
                <Box
                  sx={{
                    display: 'flex',
                  }}
                >
                  <FormControlLabel
                    sx={{
                      color: '#FFFFFF',
                      '&.MuiFormControlLabel-root': {
                        fontSize: '14px',
                      },
                    }}
                    value="individial"
                    control={
                      <Radio
                        sx={{
                          color: '#FFFFFF',
                          '&.Mui-checked': { color: '#1DE9B6' },
                        }}
                      />
                    }
                    label="For Individial"
                  />
                  <FormControlLabel
                    sx={{
                      color: '#FFFFFF',
                      '&.MuiFormControlLabel-root': {
                        fontSize: '14px',
                      },
                    }}
                    value="business"
                    control={
                      <Radio
                        sx={{
                          color: '#FFFFFF',
                          '&.Mui-checked': { color: '#1DE9B6' },
                        }}
                      />
                    }
                    label="For Business"
                  />
                </Box>
              </RadioGroup>
              {/*-----------------------------Phone-----------------------------*/}
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#FFFFFF',
                  fontSize: 18,
                  fontWeight: 600,
                  display: 'flex',
                  marginBottom: '10px',
                  mt: '10px',
                }}
              >
                {'Phone'}
                <Typography
                  sx={{
                    fontSize: 15,
                    fontWeight: 400,
                    margin: '1px 3px 0px 4px',
                    color: '#1DE9B6',
                  }}
                >
                  *
                </Typography>
              </Typography>
              <PhoneInput
                inputStyle={{
                  width: '100%',
                  height: '48px',
                  border: '2px solid #5D70AB',
                  borderRadius: '12px',
                  fontSize: '16px',
                }}
                country={'vn'}
                inputProps={{
                  name: 'phone',
                  required: true,
                }}
                value={phoneNumber}
                onChange={(phone) => setPhoneNumber(phone)}
              />
              {/*-----------------------------Email-----------------------------*/}
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#FFFFFF',
                  fontSize: 18,
                  fontWeight: 600,
                  display: 'flex',
                  marginBottom: '10px',
                  mt: '20px',
                }}
              >
                {'Email Address'}
                <Typography
                  sx={{
                    fontSize: 15,
                    fontWeight: 400,
                    margin: '1px 3px 0px 4px',
                    color: '#1DE9B6',
                  }}
                >
                  *
                </Typography>
              </Typography>
              <Controller
                control={control}
                name="email"
                render={({ field }) => {
                  return (
                    <input
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '0 12px',
                        border: '2px solid #5D70AB',
                        borderRadius: '12px',
                        fontSize: '16px',
                      }}
                      {...field}
                      id="email"
                      onChange={(e) => {
                        field.onChange(e);
                        clearErrors('email');
                      }}
                      placeholder="Enter email address"
                    />
                  );
                }}
              />
              {/*-----------------------------Service-----------------------------*/}
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#FFFFFF',
                  fontSize: 18,
                  fontWeight: 600,
                  display: 'flex',
                  marginBottom: '10px',
                  mt: '20px',
                }}
              >
                {'Service'}
                <Typography
                  sx={{
                    fontSize: 15,
                    fontWeight: 400,
                    margin: '1px 3px 0px 4px',
                    color: '#1DE9B6',
                  }}
                >
                  *
                </Typography>
              </Typography>
              <RadioGroup value={service} onChange={handleChangeService}>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                    gridAutoFlow: 'row',
                  }}
                >
                  <FormControlLabel
                    sx={{
                      color: '#FFFFFF',
                      '&.MuiFormControlLabel-root': {
                        fontSize: '14px',
                      },
                    }}
                    value="offshore"
                    control={
                      <Radio
                        sx={{
                          color: '#FFFFFF',
                          '&.Mui-checked': { color: '#1DE9B6' },
                        }}
                      />
                    }
                    label="Offshore development center"
                  />
                  <FormControlLabel
                    sx={{
                      color: '#FFFFFF',
                      '&.MuiFormControlLabel-root': {
                        fontSize: '14px',
                      },
                    }}
                    value="game"
                    control={
                      <Radio
                        sx={{
                          color: '#FFFFFF',
                          '&.Mui-checked': { color: '#1DE9B6' },
                        }}
                      />
                    }
                    label="2D/3D/AR/VR Games"
                  />
                  <FormControlLabel
                    sx={{
                      color: '#FFFFFF',
                      '&.MuiFormControlLabel-root': {
                        fontSize: '14px',
                      },
                    }}
                    value="web"
                    control={
                      <Radio
                        sx={{
                          color: '#FFFFFF',
                          '&.Mui-checked': { color: '#1DE9B6' },
                        }}
                      />
                    }
                    label="Web/ App system"
                  />
                  <FormControlLabel
                    sx={{
                      color: '#FFFFFF',
                      '&.MuiFormControlLabel-root': {
                        fontSize: '14px',
                      },
                    }}
                    value="gameMinification"
                    control={
                      <Radio
                        sx={{
                          color: '#FFFFFF',
                          '&.Mui-checked': { color: '#1DE9B6' },
                        }}
                      />
                    }
                    label="Game Minification Marketing Platform"
                  />
                  <FormControlLabel
                    sx={{
                      color: '#FFFFFF',
                      '&.MuiFormControlLabel-root': {
                        fontSize: '14px',
                      },
                    }}
                    value="healthTech"
                    control={
                      <Radio
                        sx={{
                          color: '#FFFFFF',
                          '&.Mui-checked': { color: '#1DE9B6' },
                        }}
                      />
                    }
                    label="Health Tech Platform"
                  />
                  <FormControlLabel
                    sx={{
                      color: '#FFFFFF',
                      '&.MuiFormControlLabel-root': {
                        fontSize: '14px',
                      },
                    }}
                    value="cloudService"
                    control={
                      <Radio
                        sx={{
                          color: '#FFFFFF',
                          '&.Mui-checked': { color: '#1DE9B6' },
                        }}
                      />
                    }
                    label="Cloud Service"
                  />
                </Box>
              </RadioGroup>
              {/*-----------------------------Package-----------------------------*/}
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#FFFFFF',
                  fontSize: 18,
                  fontWeight: 600,
                  display: 'flex',
                  marginBottom: '10px',
                  mt: '20px',
                }}
              >
                {'Package'}
                <Typography
                  sx={{
                    fontSize: 15,
                    fontWeight: 400,
                    margin: '1px 3px 0px 4px',
                    color: '#1DE9B6',
                  }}
                >
                  *
                </Typography>
              </Typography>
              <FormControl sx={{ minWidth: '100%', minHeight: '48px' }}>
                <select
                  className="h-[48px] rounded-[12px] border-2 border-solid border-[#5D70AB] px-[12px] text-[16px] font-normal leading-[22px]"
                  value={valuePackage}
                  onChange={(e) => handleChangePackage(e)}
                >
                  <option value={'papahub'}>Papahub</option>
                </select>
              </FormControl>
              {/*-----------------------------Time-----------------------------*/}
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#FFFFFF',
                  fontSize: 18,
                  fontWeight: 600,
                  display: 'flex',
                  marginBottom: '10px',
                  mt: '20px',
                }}
              >
                {'Time'}
                <Typography
                  sx={{
                    fontSize: 15,
                    fontWeight: 400,
                    margin: '1px 3px 0px 4px',
                    color: '#1DE9B6',
                  }}
                >
                  *
                </Typography>
              </Typography>
              <RadioGroup value={time} onChange={handleChangeTime}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <FormControlLabel
                    sx={{
                      color: '#FFFFFF',
                      '&.MuiFormControlLabel-root': {
                        fontSize: '14px',
                      },
                    }}
                    value="1month"
                    control={
                      <Radio
                        sx={{
                          color: '#FFFFFF',
                          '&.Mui-checked': { color: '#1DE9B6' },
                        }}
                      />
                    }
                    label="1 month"
                  />
                  <FormControlLabel
                    sx={{
                      color: '#FFFFFF',
                      '&.MuiFormControlLabel-root': {
                        fontSize: '14px',
                      },
                    }}
                    value="6month"
                    control={
                      <Radio
                        sx={{
                          color: '#FFFFFF',
                          '&.Mui-checked': { color: '#1DE9B6' },
                        }}
                      />
                    }
                    label="6 month"
                  />
                  <FormControlLabel
                    sx={{
                      color: '#FFFFFF',
                      '&.MuiFormControlLabel-root': {
                        fontSize: '14px',
                      },
                    }}
                    value="12month"
                    control={
                      <Radio
                        sx={{
                          color: '#FFFFFF',
                          '&.Mui-checked': { color: '#1DE9B6' },
                        }}
                      />
                    }
                    label="12 month"
                  />
                  <FormControlLabel
                    sx={{
                      color: '#FFFFFF',
                      '&.MuiFormControlLabel-root': {
                        fontSize: '14px',
                      },
                    }}
                    value="other"
                    control={
                      <Radio
                        sx={{
                          color: '#FFFFFF',
                          '&.Mui-checked': { color: '#1DE9B6' },
                        }}
                      />
                    }
                    label="Other"
                  />
                </Box>
              </RadioGroup>
              {/*-----------------------------Description-----------------------------*/}
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#FFFFFF',
                  fontSize: 18,
                  fontWeight: 600,
                  display: 'flex',
                  marginBottom: '10px',
                  mt: '20px',
                }}
              >
                {'Description'}
                <Typography
                  sx={{
                    fontSize: 15,
                    fontWeight: 400,
                    margin: '1px 3px 0px 4px',
                    color: '#1DE9B6',
                  }}
                >
                  *
                </Typography>
              </Typography>
              <Controller
                name="description"
                control={control}
                render={({ field }) => {
                  return (
                    <TextField
                      sx={{
                        '.MuiInputBase-input': {
                          color: '#FFFFFF',
                        },
                        fieldset: {
                          color: '#FFFFFF',
                          borderRadius: '12px',
                          border: '2.5px solid #5D70AB',
                        },
                      }}
                      {...field}
                      multiline
                      rows={3}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      fullWidth
                      placeholder="Enter description"
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  );
                }}
              />
            </div>
            {/*-----------------------------Submit-----------------------------*/}
            <div className="mt-[20px] px-[16px]">
              <button className="w-[100%] rounded-[10px] bg-active py-[12px] text-[18px] font-semibold leading-[24px] text-navy-5">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ContactSale;
