import React from 'react'
import { LogoTemplateProps, LogoTemplateSize } from '..'
import { getLogoColors } from '.'

const logo = '/images/logo.svg'
const logoWhite = '/images/logo-white.svg'

export const GDSCSquareSize: LogoTemplateSize = {
  width: 2048,
  height: 2048,
}

const logoAspect = 122 / 66
const logoWidth = 300 * logoAspect
const logoHeight = 300

const GDSCSquare: React.FC<LogoTemplateProps> = ({ text, color }) => {
  const logoColors = getLogoColors(color)

  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingLeft: 100,
    paddingRight: 100,
  }

  // needed cause satori keeps reading undefined as black
  if (logoColors.bg) {
    containerStyle['background'] = logoColors.bg
  }

  return (
    <div style={containerStyle}>
      <img
        src={color === 'monochrome' ? logoWhite : logo}
        style={{ width: logoWidth, height: logoHeight }}
      />
      <span
        style={{
          fontSize: 120,
          color: logoColors.color,
          marginTop: 50,
          fontWeight: 500,
        }}
      >
        Google Developer Student Clubs
      </span>
      <span
        style={{
          fontSize: 100,
          color: logoColors.color,
          marginTop: 20,
          fontWeight: 400,
          textAlign: 'center',
        }}
      >
        {text}
      </span>
    </div>
  )
}

export default GDSCSquare
