/// <reference path="index.d.ts"/>
import * as React from 'react';
import { mapClass } from './mapClass';

// TODO: cx should cleanup the classname output...
const cx = (classnames: string[]) => {
  return classnames.join(' ');
};

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
    transformer: value => (value === 'auto' ? 'ml-auto' : `ml${value}`),
    responsive: true,
  }),
  mr: mapClass({
    transformer: value => (value === 'auto' ? 'mr-auto' : `mr${value}`),
    responsive: true,
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
  br: mapClass({ transformer: 'br' }),
  width: mapClass({
    transformer: value => {
      return ['1', '2', '3', '4', '5'].indexOf(value) >= 0
        ? `w${value}`
        : `w-${value}`;
    },
  }),
  measure: mapClass({
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
    responsive: true,
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
  flexWrap: mapClass({ transformer: 'flex-wrap-' }),
};

// TODO: React.HTMLProps should be generic instead of targetting any
const Box: React.SFC<BoxProps & React.HTMLProps<any>> = props => {
  // Shallow copy is good enough. Just need to remove
  // our extra injected props from the end result.
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
