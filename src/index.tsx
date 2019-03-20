/// <reference path="index.d.ts"/>
import * as React from 'react';

const cx = (classnames: string[]) => {
  return classnames.join(' ');
};

interface MapClass {
  transformer: string | ((v: string) => string);
}
function mapClass({ transformer }: MapClass) {
  if (typeof transformer === 'function') {
    return (value: string) => transformer(value);
  }
  return (value: string) => `${transformer}${value}`;
}

interface PropMap {
  [k: string]: (v: any) => string;
}
const propMap: PropMap = {
  ma: mapClass({ transformer: 'ma' }),
  mh: mapClass({ transformer: 'mh' }),
  mv: mapClass({ transformer: 'mv' }),
  mb: mapClass({ transformer: 'mb' }),
  mt: mapClass({ transformer: 'mt' }),
  ml: mapClass({ transformer: 'ml' }),
  mr: mapClass({ transformer: 'mr' }),
  pa: mapClass({ transformer: 'pa' }),
  pv: mapClass({ transformer: 'pv' }),
  ph: mapClass({ transformer: 'ph' }),
  pb: mapClass({ transformer: 'pb' }),
  pt: mapClass({ transformer: 'pt' }),
  pl: mapClass({ transformer: 'pl' }),
  pr: mapClass({ transformer: 'pr' }),
  color: mapClass({ transformer: '' }),
  bg: mapClass({ transformer: 'bg-' }),
  bgHover: mapClass({ transformer: 'bg-hover' }),
  opacity: mapClass({ transformer: 'o' }),
  width: mapClass({ transformer: 'w-' }),
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
  const keys = Object.keys(props);

  const baseClassName = props.className || '';

  const atomicClassNames = cx(
    keys.reduce((acc: string[], value: string): string[] => {
      const result = propMap[value];
      if (result) {
        const propsValue = (props as any)[value] as any;
        acc.push(propMap[value](propsValue));
      }

      return acc;
    }, []),
  );

  // TODO: Our custom props should not be forwarded to the component
  return React.createElement(props.as || 'div', {
    ...props,
    className: cx([atomicClassNames, baseClassName]),
  });
};

Box.defaultProps = {
  as: 'div',
};

export { Box };
