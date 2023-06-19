# Ghost Unlock

# First time using a Ghost theme?

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes.

This theme has lots of code comments to help explain what's going on just by reading the code. Once you feel comfortable with how everything works, checkout the full ghost [theme API documentation](https://ghost.org/docs/themes/) which explains every possible Handlebars helper and template.

**The main files are:**

- `default.hbs` - The parent template file, which includes your global header/footer
- `index.hbs` - The main template to generate a list of posts, usually the home page
- `post.hbs` - The template used to render individual posts
- `page.hbs` - Used for individual pages
- `tag.hbs` - Used for tag archives, eg. "all posts tagged with `news`"
- `author.hbs` - Used for author archives, eg. "all posts written by Jamie"
- `index.js` - Handles subscription actions, eg. "Triggering the appropriate function when a member chooses monthly or yearly subscription"
- `paywall-config.js` - Handles the Unlock paywall configuration, eg. "Default lock(s), Network configs, and provider"
- `settings.js` - Used for storing constants which may be imported by other modules.
- `events.js` - Handles the events emitted by Unlock checkout app, eg. "unlockProtocol.closeModal, unlockProtocol.transactionSent"
- `modals-controller.js` - Handles all custom modal controls, eg. "Open/closing plan, error, success modal"

One neat trick is that you can also create custom one-off templates by adding the slug of a page to a template file. For example:

- `page-about.hbs` - Custom template for an `/about/` page
- `tag-news.hbs` - Custom template for `/tag/news/` archive
- `author-ali.hbs` - Custom template for `/author/ali/` archive


# Development

Ghost Unlock styles can be compiled using the default Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# install dependencies
yarn install

# run development server
yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

OR 

If you prefer scss you can write custom styles in `/assets/css/` and import them into a custom javascript file embedded in `default.hbs` such as `events.js` in `/assets/js/events.js`, and bundle them using webpack. From the theme's root directory: 

```bash
# bundle js and scss
npm run build
```

Which will be compiled to `/assets/built/events.js`

The `zip` Gulp task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
# create .zip file
yarn zip
```

# PostCSS Features Used

- Autoprefixer - Don't worry about writing browser prefixes of any kind, it's all done automatically with support for the latest 2 major versions of every browser.
- [Color Mod](https://github.com/jonathantneal/postcss-color-mod-function)


# SVG Icons

Ghost Unlock uses inline SVG icons, included via Handlebars partials. You can find all icons inside `/partials/icons`. To use an icon just include the name of the relevant file, eg. To include the SVG icon in `/partials/icons/rss.hbs` - use `{{> "icons/rss"}}`.

You can add your own SVG icons in the same manner.


# Copyright & License

Copyright (c) 2013-2022 Ghost Foundation - Released under the [MIT license](LICENSE).
