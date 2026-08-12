import { mergeConfig } from 'vite';

export default (config) => {
  return mergeConfig(config, {
    optimizeDeps: {
      include: [
        'property-expr',
        'toposort',
        'fuzzysort',
        'es-toolkit/compat/isEqual',
        'extend',
        'debug',
        'sanitize-html',
      ],
    },
  });
};
