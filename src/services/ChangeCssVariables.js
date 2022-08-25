export const ChangeCssVariables = (theme) => {
  const root = document.querySelector(":root");

  //способ 1:

  // root.style.setProperty(
  //   "--theme-default-header",
  //   `var(--theme-${theme}-header)`
  // );
  // root.style.setProperty(
  //   "--theme-default-bgimage",
  //   `var(--theme-${theme}-bgimage)`
  // );

  //способ 2: сделали рефакторинг, избавились от повторения кода
  const cssVariables = ["header", "bgimage"];

  cssVariables.forEach((element) => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    );
  });
};
