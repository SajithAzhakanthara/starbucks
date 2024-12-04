# Starbucks Website Clone

A Starbucks website clone built using **Next.js**, **Bootstrap**, **utility classes**, **Context API**, and **SCSS**. This project demonstrates responsive design, state management, and modular styling.

---

## Project Overview

This clone emulates the official Starbucks website and includes:
1. **Responsive Design:** Built with **Bootstrap's utility classes** for layouts.
2. **State Management:** Using **Context API** for UI interactions (e.g., toggling menus).
3. **Styling:** Custom **SCSS** for aesthetics and **Bootstrap** for utility classes.
4. **Client-Side Navigation:** Smooth transitions with **Next.js Link**.

---

## Core Features

1. **Homepage**
   - Hero banner with background images.
   - Featured products or promotions.
   - Navigation bar and footer.

2. **Menu Section**
   - Grid display of products (coffee, beverages, snacks).
   - Modals or detailed pages for individual items.

3. **Mobile Menu**
   - Sidebar or dropdown menu for small screens.
   - Toggle functionality using **Context API**.

4. **Authentication**
   - Login/register form with simple state management.

5. **Store Locator**
   - Placeholder content for store information (e.g., a map or list).

---

## Technologies Used

- **Next.js:** For routing, server-side rendering (SSR), and static site generation.
- **Bootstrap:** For grid systems and utility classes.
- **Context API:** For global state management.
- **SCSS:** For modular and reusable styles.

---

## Project Structure

```plaintext
/components
    /header
        Header.js
        HeaderMobile.js
    /footer
        Footer.js
    /mobile-menu
        MobileMenu.js
    /searchbar
        Searchbar.js
/context
    HeaderMenuContext.js
    HeaderMenuFunctionContext.js
    LoginRegisterToggleContext.js
/pages
    index.js (Homepage)
    menu.js
    login.js
    gift.js
    store.js
/public
    /images (Logos, backgrounds, etc.)
/styles
    globals.scss
    components/
        _header.scss
        _footer.scss
        _mobile-menu.scss
