/// <reference path="../index.d.ts"/>
import * as React from 'react';
import { mapClass } from '../utils/mapClass';

interface PropMap {
  [k: string]: (v: string) => string;
}
const propMap: PropMap = {
  ma: mapClass({ transformer: 'ma', responsive: true }),
  mh: mapClass({ transformer: 'mh', responsive: true }),
  mv: mapClass({ transformer: 'mv', responsive: true }),
  mb: mapClass({ transformer: 'mb', responsive: true }),
  mt: mapClass({ transformer: 'mt', responsive: true }),
  ml: mapClass({
    responsive: true,
    transformer: value => (value === 'auto' ? 'ml-auto' : `ml${value}`),
  }),
  mr: mapClass({
    responsive: true,
    transformer: value => (value === 'auto' ? 'mr-auto' : `mr${value}`),
  }),
  pa: mapClass({ transformer: 'pa', responsive: true }),
  pv: mapClass({ transformer: 'pv', responsive: true }),
  ph: mapClass({ transformer: 'ph', responsive: true }),
  pb: mapClass({ transformer: 'pb', responsive: true }),
  pt: mapClass({ transformer: 'pt', responsive: true }),
  pl: mapClass({ transformer: 'pl', responsive: true }),
  pr: mapClass({ transformer: 'pr', responsive: true }),
  color: mapClass({ transformer: '' }),
  bg: mapClass({ transformer: 'bg-' }),
  bgHover: mapClass({ transformer: 'hover-bg-' }),
  opacity: mapClass({ transformer: 'o' }),
  borderColor: mapClass({ transformer: 'b--' }),
  borderWidth: mapClass({ transformer: 'bw' }),
  borderStyles: mapClass({ transformer: 'b--' }),
  boxShadows: mapClass({ transformer: 'shadow-', responsive: true }),
  br: mapClass({ transformer: 'br', responsive: true }),
  width: mapClass({
    responsive: true,
    transformer: value => {
      return ['1', '2', '3', '4', '5'].indexOf(value) >= 0
        ? `w${value}`
        : `w-${value}`;
    },
  }),
  fontSize: mapClass({ responsive: true, transformer: 'f' }),
  textAlign: mapClass({
    responsive: true,
    transformer: value => {
      switch (value) {
        case 'left':
          return 'tl';
        case 'right':
          return 'tr';
        case 'center':
          return 'tc';
        case 'justify':
          return 'tj';
        default:
          return '';
      }
    },
  }),
  measure: mapClass({
    responsive: true,
    transformer: value => {
      switch (value) {
        case 'measure':
          return 'measure';
        case 'narrow':
          return 'measure-narrow';
        case 'wide':
          return 'measure-wide';
        default:
          return ``;
      }
    },
  }),
  display: mapClass({
    transformer: value => {
      switch (value) {
        case 'inline-flex':
          return 'inline-flex';
        case 'flex':
          return 'flex';
        default:
          return `d${value}`;
      }
    },
  }),
  flexDirection: mapClass({
    responsive: true,
    transformer: value => {
      switch (value) {
        case 'column':
          return 'flex-column';
        case 'column-reverse':
          return 'flex-column-reverse';
        case 'row':
          return 'flex-row';
        case 'row-reverse':
          return 'flex-row-reverse';
        default:
          return '';
      }
    },
  }),
  justifyContent: mapClass({
    transformer: value => {
      switch (value) {
        case 'flex-start':
          return 'justify-start';
        case 'flex-end':
          return 'justify-end';
        case 'center':
          return 'justify-center';
        case 'space-between':
          return 'justify-between';
        case 'space-around':
          return 'justify-around';
        default:
          return '';
      }
    },
  }),
  alignContent: mapClass({
    transformer: value => {
      switch (value) {
        case 'flex-start':
          return 'content-start';
        case 'flex-end':
          return 'content-end';
        case 'center':
          return 'content-center';
        case 'space-between':
          return 'content-between';
        case 'space-around':
          return 'content-around';
        case 'stretch':
          return 'content-stretch';
        default:
          return '';
      }
    },
  }),
  alignSelf: mapClass({
    responsive: true,
    transformer: value => {
      switch (value) {
        case 'flex-start':
          return 'self-start';
        case 'flex-end':
          return 'self-end';
        case 'center':
          return 'self-center';
        case 'baseline':
          return 'self-baseline';
        case 'stretch':
          return 'self-stretch';
        default:
          return '';
      }
    },
  }),
  flexWrap: mapClass({ transformer: 'flex-wrap-' }),
  fontFamily: mapClass({
    transformer: value => {
      switch (value) {
        case 'sans-serif':
          return 'sans-serif';
        case 'serif':
          return 'serif';
        case 'system-sans-serif':
          return 'system-sans-serif';
        case 'system-serif':
          return 'system-serif';
        case 'code':
          return 'code';
        case 'courier':
          return 'courier';
        case 'helvetica':
          return 'helvetica';
        case 'avenir':
          return 'avenir';
        case 'athelas':
          return 'athelas';
        case 'georgia':
          return 'georgia';
        case 'times':
          return 'times';
        case 'bodoni':
          return 'bodoni';
        case 'calisto':
          return 'calisto';
        case 'garamond':
          return 'garamond';
        case 'baskerville':
          return 'baskerville';
        default:
          return '';
      }
    },
  }),
};

// TODO: cx should cleanup the classname output...
const cx = (classnames: string[]) => {
  return classnames.join(' ');
};

// TODO: React.HTMLProps should be generic instead of targetting any
const Box: React.SFC<BoxProps & React.HTMLProps<any>> = props => {
  // Shallow copy is good enough. Just need to remove
  // our extra injected props from the end markup.
  const propsClone = Object.assign({}, props);
  delete (propsClone as any)['as'];

  const baseClassName = props.className || '';
  const keys = Object.keys(props);
  const atomicClassNames = cx(
    keys.reduce((acc: string[], value: string): string[] => {
      const result = propMap[value];
      if (result) {
        const propsValue = (props as any)[value] as any;
        acc.push(result(propsValue));
        delete (propsClone as any)[value];
      }

      return acc;
    }, []),
  );

  return React.createElement(props.as || 'div', {
    ...propsClone,
    className: cx([atomicClassNames, baseClassName]),
  });
};

Box.defaultProps = {
  as: 'div',
};

export { Box };
