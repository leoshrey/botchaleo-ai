// eagerly import theme styles so as we can override them
import '@vaadin/vaadin-lumo-styles/all-imports';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `
<custom-style>
<style include='lumo-badge'>
    html {
      --lumo-font-family: Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;
      --lumo-border-radius: 0.5em;
    }

    [theme~="dark"] {
      --lumo-shade-5pct: rgba(222, 222, 222, 0.05);
      --lumo-shade-10pct: rgba(222, 222, 222, 0.1);
      --lumo-shade-20pct: rgba(222, 222, 222, 0.2);
      --lumo-shade-30pct: rgba(222, 222, 222, 0.3);
      --lumo-shade-40pct: rgba(222, 222, 222, 0.4);
      --lumo-shade-50pct: rgba(222, 222, 222, 0.5);
      --lumo-shade-60pct: rgba(222, 222, 222, 0.6);
      --lumo-shade-70pct: rgba(222, 222, 222, 0.7);
      --lumo-shade-80pct: rgba(222, 222, 222, 0.8);
      --lumo-shade-90pct: rgba(242, 242, 242, 0.9);
      --lumo-shade: hsl(34, 0%, 87%);
      --lumo-base-color: hsl(214, 6%, 9%);
      --lumo-tint-5pct: rgba(217, 201, 201, 0.05);
      --lumo-tint-10pct: rgba(209, 209, 209, 0.1);
      --lumo-tint-20pct: rgba(209, 209, 209, 0.2);
      --lumo-tint-30pct: rgba(209, 209, 209, 0.3);
      --lumo-tint-40pct: rgba(209, 209, 209, 0.4);
      --lumo-tint-50pct: rgba(209, 209, 209, 0.5);
      --lumo-tint-60pct: rgba(209, 209, 209, 0.6);
      --lumo-tint-70pct: rgba(209, 209, 209, 0.7);
      --lumo-tint-80pct: rgba(209, 209, 209, 0.8);
      --lumo-tint-90pct: rgba(209, 209, 209, 0.9);
      --lumo-tint: hsl(214, 0%, 82%);
      --lumo-primary-text-color: rgb(185, 140, 121);
      --lumo-primary-color-50pct: rgba(185, 140, 121, 0.5);
      --lumo-primary-color-10pct: rgba(185, 140, 121, 0.1);
      --lumo-primary-color: hsl(18, 31%, 60%);
      --lumo-primary-contrast-color: #fafafa;
      --lumo-error-text-color: rgb(246, 118, 111);
      --lumo-error-color-50pct: rgba(246, 118, 111, 0.5);
      --lumo-error-color-10pct: rgba(246, 118, 111, 0.1);
      --lumo-error-color: hsl(3, 88%, 70%);
    }

      </style>
    </custom-style>


    <dom-module id="button-style" theme-for="vaadin-button">
      <template>
        <style>:host(:not([theme~="tertiary"])){background-image:linear-gradient(var(--lumo-tint-5pct), var(--lumo-shade-5pct));box-shadow:inset 0 0 0 1px var(--lumo-contrast-20pct);}:host(:not([theme~="tertiary"]):not([theme~="primary"]):not([theme~="error"]):not([theme~="success"])){color:var(--lumo-body-text-color);}:host([theme~="primary"]){text-shadow:0 -1px 0 var(--lumo-shade-20pct);}
</style>
</custom-style>


`;

document.head.appendChild($_documentContainer.content);
