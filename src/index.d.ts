type TachyonColors =
  | 'black-90'
  | 'black-80'
  | 'black-70'
  | 'black-60'
  | 'black-50'
  | 'black-40'
  | 'black-30'
  | 'black-20'
  | 'black-10'
  | 'black-05'
  | 'white-90'
  | 'white-80'
  | 'white-70'
  | 'white-60'
  | 'white-50'
  | 'white-40'
  | 'white-30'
  | 'white-20'
  | 'white-10'
  | 'black'
  | 'near-black'
  | 'dark-gray'
  | 'mid-gray'
  | 'gray'
  | 'silver'
  | 'light-silver'
  | 'moon-gray'
  | 'light-gray'
  | 'near-white'
  | 'white'
  | 'transparent'
  | 'dark-red'
  | 'red'
  | 'light-red'
  | 'orange'
  | 'gold'
  | 'yellow'
  | 'light-yellow'
  | 'purple'
  | 'light-purple'
  | 'dark-pink'
  | 'hot-pink'
  | 'pink'
  | 'light-pink'
  | 'dark-green'
  | 'green'
  | 'light-green'
  | 'navy'
  | 'dark-blue'
  | 'blue'
  | 'light-blue'
  | 'lightest-blue'
  | 'washed-blue'
  | 'washed-green'
  | 'washed-yellow'
  | 'washed-red'
  | 'inherit';

type SpacingScale = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';
type OpacityScale =
  | '100'
  | '90'
  | '80'
  | '70'
  | '60'
  | '50'
  | '40'
  | '30'
  | '20'
  | '10'
  | '05'
  | '025'
  | '0';

// TODO: add other units
type BorderRadiusScale = '0' | '1' | '2' | '3' | '4';

type HoverEffects =
  | 'glow'
  | 'grow'
  | 'grow-large'
  | 'hide-child'
  | 'hover'
  | 'dim'
  | 'pointer'
  | 'animate'
  | 'shadow'
  | 'underline';

type FlexDirections = 'column' | 'column-reverse' | 'row' | 'row-reverse';

type Reponsive<T> = T | T[];

type BoxProps = {
  as?: string;
  pa?: Reponsive<SpacingScale>;
  pv?: Reponsive<SpacingScale>;
  ph?: Reponsive<SpacingScale>;
  pb?: Reponsive<SpacingScale>;
  pt?: Reponsive<SpacingScale>;
  pl?: Reponsive<SpacingScale>;
  pr?: Reponsive<SpacingScale>;
  ma?: Reponsive<SpacingScale>;
  mv?: Reponsive<SpacingScale>;
  mh?: Reponsive<SpacingScale>;
  mb?: Reponsive<SpacingScale>;
  mt?: Reponsive<SpacingScale>;
  ml?: Reponsive<SpacingScale>;
  mr?: Reponsive<SpacingScale>;
  color?: TachyonColors;
  bg?: TachyonColors;
  bgHover?: TachyonColors;
  opacity?: OpacityScale;
  hoverEffect?: HoverEffects;
  b?: TachyonColors;
  br?: BorderRadiusScale;
  width?:
    | '10'
    | '20'
    | '25'
    | '30'
    | '33'
    | '34'
    | '40'
    | '50'
    | '60'
    | '70'
    | '75'
    | '80'
    | '90'
    | '100'
    | 'third'
    | 'two-thirds'
    | 'auto';
  display?: string;
  flexDirection?: Reponsive<FlexDirections>;
};
