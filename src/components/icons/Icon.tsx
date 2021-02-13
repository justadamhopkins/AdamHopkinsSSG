import React from 'react'
import { GithubIcon } from './GithubIcon'
import { LinkedInIcon } from './LinkedInIcon'

export const icons = {
  github: GithubIcon,
  linkedIn: LinkedInIcon
}

export type IconName = keyof typeof icons

export type IconProps = {
  iconName: IconName
  width: number
  height: number
}

export const Icon: React.FC<IconProps> = ({ iconName, width, height }) => {
  const Icon = icons[iconName]

  return <Icon width={width} height={height} />
}
