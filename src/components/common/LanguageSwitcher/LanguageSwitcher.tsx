import React from 'react'
import nookies from 'nookies'
import locales from '@/locales/locales.json'
import { useRouter } from 'next/router'
import { SingleValue, StylesConfig } from 'react-select'
import { IOptions } from '@/types'
import SelectOption from '../SelectOptions'

const LanguageSwitcher = () => {
  const router = useRouter()

  const [selectOption, setSelectOption] = React.useState(() => {
    return locales.find(({ value }) => router.locale === value)
  })

  const customStyle: StylesConfig<IOptions, false> = {
    container: (provided) => ({
      ...provided,
      width: 150,
      height: 42,
    }),
    control: (provided) => ({
      ...provided,
      padding: '11px 16px',
      borderRadius: '8px',
      backgroundColor: 'transparent',
      border: '2px solid #26266E',
      cursor: 'pointer',
      outline: 'none',
      boxShadow: 'none',
      minHeight: 'auto',
      // minWidth: '80px',
      '&:hover': {
        border: '2px solid #26266E',
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0',

      '& input:nth-of-type(1)': {
        position: 'absolute',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      textAlign: 'center',
      fontSize: '18px',
      color: '#ffffff',
      lineHeight: '22px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      display: 'inline-block',
      margin: '0',
    }),
    menu: (provided, state) => ({
      ...provided,
      // padding: 0,
      borderRadius: '0',
      backgroundColor: 'unset',
    }),
    menuList: (provided, state) => ({
      ...provided,
      padding: 0,
      zIndex: 1000,
      // borderRadius: '0',
    }),
    option: (provided, state) => ({
      // provided has CSSObject type
      // state has ControlProps type

      // return type is CSSObject which means this line will throw error if uncommented
      // return false;

      ...provided,
      // color: state.isSelected ? '#1DE9B6' : '#FFFFFF',
      color: 'white',
      backgroundColor: '#26266E',
      padding: '12px 16px',

      textAlign: 'center',
      fontSize: '18px',
      lineHeight: '22px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      cursor: 'pointer',
      zIndex: 1000,
    }),
  }

  // const languageContext = React.useContext(LanguageContext)
  // const setLanguage = languageContext?.setLanguage

  const handleOptionChange = (option: SingleValue<IOptions>) => {
    // if (router.locale === option?.value) return

    // const { pathname, asPath, query } = router

    // router.replace({ pathname, query }, asPath, {
    //   locale: option?.value,
    //   shallow: true,
    // })

    // nookies.set(null, 'NEXT_LOCALE', option?.value as string, { path: '/' })
    // setLanguage?.(option!.value)
  }

  return (
    <SelectOption
      id="select-languages"
      instanceId="select-languages"
      options={locales}
      defaultValue={selectOption}
      customStyles={customStyle}
      onChange={handleOptionChange}
      isSearchable={false}
      components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
      className="react-select-container"
      classNamePrefix="react-select"
    />
  )
}

export default React.memo(LanguageSwitcher)
