# KQM HSR Site
**AIM:** Improve UI, WCAG AA compliance, straightforward content creation process

## Home Page 
Thoughts on assets:
- Standardize image sizes
- Get other KQM logos

Current thoughts for components: 
- Header: have astro auto-generate breadcrumbs
    - Field for custom background images
- Footer: should be easy to find template
- Background: fixed image. Find script (I have one sitting somewhere but need to find it)
- Event Component:
	- 'Groups' like 'What's New' group
	- Edit 'Card' component. Add tags, etc. 
 - Search component

## Guide Creation
**Main question:** What do the editors/authors need?

First, basic formatting: 
- Set fonts for common components like H1, etc. Mostly MD
- If header is different on actual pages, figure that one. 
- Table of Contents formatting

Next, easy templates for formats.
- Saved element colors for text (might want bolds built-in)
- Components for common images (chars, paths, etc) with set sizes (e.g. ```<Element variant="Fire" size="Large">```)
- Saved image sizes: "Title" page size (with field for source), flex-to-table size, infographic size, etc
- Saved table formats with colored boxes, etc


We'd also want an example page using MDX that showcases following:
- Frontmatter (title, slug?, tags, date, etc)
- Any sort of auto-generated table (like Tibo mentioned)
- Links, both internal and external
- Images, especially component images like Paths, with formatting
- Various other common custom formats

Some specifics wants that I thought up:
- Eidolon/Superimposition comparison table
- Spider graph (this is a personal want)
- Teammate comparison table

## Site Architecture
- How will guide slugs be generated?
- What is current file/page architecture on KQM? Are guides grouped? Are categories grouped? If so, by what?
    - Opinions on the current file/page architecture? How to make better/more futureproof/less annoying?
- How will assets be stored and delivered?
- Name-schemes in general. Any title name schemes? Any for images? Should there be any for either? Anything that relies on sorting pages/whatever else by parsing this? 
- How will searching be implemented?
- When a guide is created, how will its recommendations be reused in other places across the site?

## No Component Left Behind
- components/Searchbar
  - Needs searching functionality
- components/data/characters/CharTrace and pages/data/characters/[name]
  - Needs js to draw SVG lines to connect traces (see figma)
- components/ParsedParams
  - Needs parameter parsing functionality (see [original](https://github.com/KQM-git/SRL/blob/master/src/components/common/ParamFormat.tsx))
- pages/data/characters
  - Needs filtering functionality
- components/Nav
  - Needs keyboard navigation

## Figma Links
- [Home Page](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=6-477&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
- [Light Cones, All](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=190-5377&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
  - [Hunt: Stats](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=127-3190&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
  - [Hunt: Abilities](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=190-5758&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
    - [River](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=123-2956&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
    - [Carve The Moon](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=123-2956&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
- [Characters, All](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=123-2870&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
  - [Yanqing](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=266-3377&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
- [Relics, All](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=392-2001&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
  - [Relics, One Set](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=474-4777&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
- [Enemies, All](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=565-3593&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
  - [Guadian Shadow](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=565-3404&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
  - [Cocolia](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=583-4093&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
- [Guides, All](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=6-408&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
  - [Guides, One](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=517-1940&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
- [About](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=6-431&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
- [Contact](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=6-431&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
