"use strict";

import { navItems } from "../data/navItems.js";

export function createNavbar() {
    return `
    <a href="index.html">
          <img class="logo-img" src="img/logo3.png" alt="logo" />
        </a>
    <nav>
          <ul>
          ${navItems
            .map(
              (item) =>
                `<li>
                <a href="${item.url}">${item.title}</a>
              </li>`
            )
            .join("")}
          </ul>
        </nav>`;
}