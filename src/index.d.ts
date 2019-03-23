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
type BorderWidths = '1' | '2' | '3' | '4' | '5';
type BorderStyles = 'dotted' | 'dashed' | 'solid' | 'none';
type Widths =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
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
type BoxShadows = '1' | '2' | '3' | '4' | '5';

type Responsive<T> = T | T[];

type BoxProps = {
  as?: string;
  /** Padding All (responsive). Scale varies between 0-7 */
  pa?: Responsive<SpacingScale>;
  /** Padding vertical (responsive). Scale varies between 0-7 */
  pv?: Responsive<SpacingScale>;
  /** Padding horizontal (responsive). Scale varies between 0-7 */
  ph?: Responsive<SpacingScale>;
  /** Padding bottom (responsive). Scale varies between 0-7 */
  pb?: Responsive<SpacingScale>;
  /** Padding top (responsive). Scale varies between 0-7 */
  pt?: Responsive<SpacingScale>;
  /** Padding left (responsive). Scale varies between 0-7 */
  pl?: Responsive<SpacingScale>;
  /** Padding right (responsive). Scale varies between 0-7 */
  pr?: Responsive<SpacingScale>;
  /** Margin all (responsive). Scale varies between 0-7 */
  ma?: Responsive<SpacingScale>;
  /** Margin vertical (responsive). Scale varies between 0-7 */
  mv?: Responsive<SpacingScale>;
  /** Margin horizontal (responsive). Scale varies between 0-7 */
  mh?: Responsive<SpacingScale>;
  /** Margin bottom (responsive). Scale varies between 0-7 */
  mb?: Responsive<SpacingScale>;
  /** Margin top (responsive). Scale varies between 0-7 */
  mt?: Responsive<SpacingScale>;
  /** Margin left (responsive). Scale varies between 0-7 */
  ml?: Responsive<SpacingScale> | 'auto';
  /** Margin right (responsive). Scale varies between 0-7 */
  mr?: Responsive<SpacingScale> | 'auto';
  /** Text color of Box */
  color?: TachyonColors;
  /** Solid background color of Box */
  bg?: TachyonColors;
  /** Solid background color of box when hovering */
  bgHover?: TachyonColors;
  /** Opacity value, aka how transparent it is */
  opacity?: OpacityScale;
  borderColor?: TachyonColors;
  borderWidth?: BorderWidths;
  borderStyle?: BorderStyles;
  boxShadows?: BoxShadows;
  /** Border radius. Scale varies between 0-4 */
  br?: BorderRadiusScale;
  width?: Responsive<Widths>;
  measure?: Responsive<'measure' | 'wide' | 'narrow'>;
  display?: string;
  flexDirection?: Responsive<FlexDirections>;
};
