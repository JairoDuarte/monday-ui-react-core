import { addParameters, configure } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

import { loadFoundationsStories } from "../src/general-stories/foundations-stories";
import { loadComponentsStories } from "../src/components/componensts-stories";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  themes: [
    { name: "Light", class: "light-app-them", color: "#ffffff", default: true },
    { name: "Dark", class: "dark-app-theme", color: "#000000" },
  ],
});

const storiesLoaderFunction = () => [
  ...loadComponentsStories(),
  ...loadFoundationsStories(),
];

configure(storiesLoaderFunction, module);
