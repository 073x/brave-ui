/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

interface StyleProps {
  fullScreen?: boolean
}

export const StyledWrapper = styled<StyleProps, 'div'>('div')`
  position: ${p => p.fullScreen ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  z-index: 6;
  display: flex;
  align-items: stretch;
  align-content: flex-start;
  flex-wrap: wrap;
  font-family: Poppins, sans-serif;
  background-color: ${p => p.fullScreen ? '#fff' : 'rgba(255, 255, 255, 0.95)'};
  overflow: hidden;
  width: 100%;
  padding: 0 52px 20px;
  border-radius: 6px;
  height: ${p => p.fullScreen ? '100%' : 'auto'};
  overflow-y: ${p => p.fullScreen ? 'scroll' : 'hidden'};
`

export const StyledHeaderImg = styled<{}, 'img'>('img')`
  text-align: center;
  width: 100%;
  margin: 59px 0;
`

export const StyledTitle = styled<{}, 'div'>('div')`
  width: 100%;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.2px;
  text-align: center;
  color: #fb542b;
`

export const StyledClose = styled<{}, 'button'>('button')`
  top: 16px;
  right: 16px;
  position: absolute;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  color: #B8B9C4;
  width: 20px;
  height: 20px;
`

export const StyledText = styled<{}, 'div'>('div')`
  width: 100%;
  font-family: Muli, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.63;
  text-align: center;
  color: #4b4c5c;
`
