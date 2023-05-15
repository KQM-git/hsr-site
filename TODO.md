# KQM HSR Site
**AIM:** Modern look (compete w/ others), passes accessibility standards, mobile-friendly, editor-friendly processes.

I started to break down my thought processes on how to approach various parts of the design. This is basically pseudo-pseudo-pseudo code in terms of abstraction, but it's a start.

## Home Page 
Thoughts on assets:
- Check Fontawesome or other SVG sites for socials icons
- Standardize image sizes
- Get other KQM logos
- If there's an official color-scheme, get ahold of it
- Look at other style guides and yoink if open-source

Current thoughts for components: 
- Header: have astro auto-generate breadcrumbs
    - Field for custom background images
- Footer: should be easy to find template
- Background: fixed image. Find script (I have one sitting somewhere but need to find it)
- Event Component:
	- 'Groups' like 'What's New' group
	- Edit 'Card' component. Add tags, etc. 
 - Search component

## Guide Pages
**Main question:** What do the editors/authors need?

First, basic formatting: 
- Set fonts for common components like H1, etc. Mostly MD
- If header is different on actual pages, figure that one. 
- Table of Contents formatting

Next, easy templates for formats.
- Saved element colors for text (might want bolds built-in)
- Saved Paths/Elements with set sizes ```<Element variant="Fire" size="Large">``` so on and so forth, 
- Saved portraits, same as above, maybe pulls from a database though? 
- Saved image sizes: "Title" page size (with field for source), flex-to-table size, infographic size, etc
 - Saved table formats with colored boxes, etc


We'd also want an example page using MDX that showcases following:
- Title, Custom slug, tags, date (auto generate?)
- Any sort of auto-generated table (like Tibo mentioned)
- Links to other guides. SRL link. Outside link.
- Images, especially component images like Paths, with set formattings.
- Various other common custom formats

Some specifics wants that I thought up:
- Eidolon/Superimposition comparison table
- Spider graph (this is a personal want)
- Teammate comparison table

## Site Architecture
I don't know enough about how to set this up. But at least here's a small amount of things I know I don't know. 
- Slugs. What is going on with them. What is the situation with them. Auto-generated? Namescheme?
- What is current file/page architecture on KQM? Are guides grouped? Are categories grouped? If so, by what?
    - Opinions on the current file/page architecture? How to make better/more futureproof/less annoying?
- How are assets stored rn? DB? within repo of site? ??????
- Name-schemes in general. Any title name schemes? Any for images? Should there be any for either? Anything that relies on sorting pages/whatever else by parsing this? 
- Is it just me or does the original site not have a search at all. I can't seem to find it
- Do we want to auto-generate pages? i.e. lightcones? Let's say we have the following lightcone json. (excuse my terrible json format recollection)
 
```json
    {
        "lightcone": 
        {
            "name": "Boat",
            "rarity": 5,
            "path": "The Hunt"
        }
        "lightcone": 
        {
            "name": "Fermata",
            "rarity": 4,
            "path": "Nihility"
        }
    }
```


My thought process is this: using [Routing](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes), content groups, whatever, we can auto-generate lightcones. For example, for that one, we'd want to auto generate pages at hsr.keqingmains.com/lightcones/boat and ~/lightcones/fermata. And maybe it could get a pre-made template table (like the ones on Figma) and fill it out. And we'd not have to manually add it in the fields each time. 

Otherwise, don't see much use for routing/content groups. 

## Figma Links
Kind of a nonsequitur, but here are links to everything on figma in case opening discord is annoying:

- [Home Page](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=6-477&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
- [Light Cones, All](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=190-5377&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
- [Light Cones, One: Stats](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=127-3190&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2), [Light Cones, One: Abilities](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=190-5758&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
- Specific Light Cones
  - [River](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=123-2956&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)
  - [Carve The Moon](https://www.figma.com/proto/hlb0VjDsQJXB0MvqpCLcZt/KQM-Revision-Draft?type=design&node-id=123-2956&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2)




