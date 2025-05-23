import {
  ConfigExtension,
  DefaultClassGroupIds,
  DefaultThemeGroupIds,
  extendTailwindMerge,
} from 'tailwind-merge';

export const twMergeConfig: ConfigExtension<
  DefaultClassGroupIds,
  DefaultThemeGroupIds
> = {
  override: {
    theme: {
      font: ['estedad'],
      color: [
        {
          primary: [
            '',
            { tint: ['1', '2', '3', '4', '5', '6', '7'] },
            { shade: ['1', '2', '3', '4', '5', '6', '7'] },
          ],
        },
        {
          neutral: [
            'white',
            'black',
            {
              gray: ['1', '2', '3', '4', '5', '6', '7', '8'],
            },
          ],
        },
        {
          status: [
            { error: ['', 'el', 'l'] },
            { success: ['', 'el', 'l'] },
            { warning: ['', 'el', 'l'] },
          ],
        },
      ],
      'drop-shadow': ['2', '4', '6', '8', '12', '16'],
      text: [
        { display: ['1', '2'] },
        { heading: ['1', '2', '3', '4', '5', '6', '7'] },
        { body: ['lg', 'md', 'sm'] },
        { caption: ['lg', 'md', 'sm'] },
        { button: ['lg', 'sm'] },
        { overline: ['lg', 'sm'] },
      ],
    },
  },
};

export const twMerge = extendTailwindMerge(twMergeConfig);
