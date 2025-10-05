"use strict";
import { footerItems } from "../data/footerItems.js";
import { footerIcons } from "../data/footerIcons.js";

export function createFooter() {
    return `
    <div class="footer-content">
            <div class="footer-links">
            ${footerItems
              .map((item) => `<a href="${item.url}">${item.title}</a>`)
              .join("")}
            </div>

            <div class="footer-social">
                ${footerIcons
                  .map(
                    (item) =>
                      `<a href="${item.url}" target="_blank" aria-label="${item.ariaLabel}">
                    <i class="fab fa-${item.iconName}"></i>
                </a>`
                  )
                  .join("")}
            </div>

            <div class="footer-copyright">
                <p>© 2025 Therese Paulsen. All rights reserved.</p>
            </div>
        </div>
    `;
}