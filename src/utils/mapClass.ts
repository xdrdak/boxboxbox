function responsify(values: string[]): string {
  // Tachyons only really has 3 values for responsiveness.
  // Slice out the first 3 values. Everything else is discarded.
  return values
    .slice(0, 3)
    .map((v, index) => {
      if (index === 0) {
        return `${v}`;
      }

      if (index === 1) {
        return `${v}-m`;
      }

      if (index === 2) {
        return `${v}-l`;
      }

      return v;
    })
    .join(' ');
}

interface MapClass {
  transformer: string | ((v: string) => string);
  responsive?: boolean;
}
export function mapClass({ transformer, responsive = false }: MapClass) {
  if (typeof transformer === 'function') {
    return (value: string | string[]) => {
      if (Array.isArray(value) && responsive) {
        return responsify(value.map(v => transformer(v)));
      }

      if (Array.isArray(value)) {
        return value.map(v => transformer(v)).join(' ');
      }

      if (typeof value === 'string') {
        return transformer(value);
      }

      return '';
    };
  }

  return (value: string | string[]) => {
    if (Array.isArray(value) && responsive) {
      return responsify(value.map(v => `${transformer}${v}`));
    }

    if (Array.isArray(value)) {
      return value.map(v => `${transformer}${v}`).join(' ');
    }
    return `${transformer}${value}`;
  };
}
