/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledHeaderImg, StyledTitle, StyledClose, StyledText } from './style'
import { CloseStrokeIcon } from '../../../components/icons'

const headerSrc = require('./assets/header.svg')

export interface Props {
  id?: string
  onClose: () => void
  title: string
  fullScreen?: boolean
  text: React.ReactNode
  children: React.ReactNode
}

export default class GrantWrapper extends React.PureComponent<Props, {}> {
  render () {
    const { id, fullScreen, onClose, title, text, children } = this.props

    return (
      <StyledWrapper
        id={id}
        fullScreen={fullScreen}
      >
        <StyledClose onClick={onClose}>
          <CloseStrokeIcon />
        </StyledClose>
        <StyledHeaderImg src={headerSrc} />
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{text}</StyledText>
        {children}
      </StyledWrapper>
    )
  }
}
