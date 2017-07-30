import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_H')

const A_H = ({type, icon, children, center}) =>{

  let tagType
  switch(type){
    case 'hero':
      tagType = 'h1'
      break;
    case 'section':
      tagType = 'h3'
      break;
    case 'section-sub':
      tagType = 'h4'
      break;
    case 'bs':
    case 'tooltip':
    case 's':
      tagType = 'h5'
      break;
    case 'tooltip-sub':
    case 'b-xs':
    case 'xs':
      tagType = 'h6'
      break;
    default:
      tagType = 'h3'
  }

  center = center && 'center'

  return (
    React.createElement(
      tagType,
      {className: cn({type}, [center])},
      (icon ?
        <span className={cn('iconed', {icon}, [center])}>{children}</span>
        :
        children
      )
    )
  )
}

A_H.propTypes = {
  type: T.oneOf([
    'hero', //black bold 25
    'bs', // blue title uses at hero home page, 16/24
    'window', // black bold title 16/24 used on subscribe/personal/join/partners tooltip pages
    'tooltip', // black bold title 16/24 used on tooltip marign bottom 2px
    'tooltip-sub', //blue subtitle 15/26 used on tooltip marign bottom 8px
    'xs', // black title uses at hero home page, 13/20 bold
    'section', //black title used for sections 23/32 padding-bottom 10
    'section-sub', //black title used for sections 23/32 padding-bottom 10

    'section-c', //black title used for sections 23/32 padding-bottom 30, always text-align center
  ]),
  icon: T.oneOf([
    'placeholder', // placeholder icon
  ]),
  children: T.any.isRequired
};

A_H.defaultProps = {
}
export default A_H