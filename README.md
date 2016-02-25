# Term Search

## Description
A terminology search engine.

## Installation

To start the app you'll need to:
1. `git clone [repo link]`
2. `cd [repo dir]`
3. `npm install`
4. Copy zipped data to server: `cp database-seed/IATE-NL.json.zip ssh://root@terms.vangilst.eu/opt/IATE-NL.json.zip`
5. `cd [repo dir]/utils/zip2json2mongo`
6. Load data into server with node js script: `node index.js ../../json/IATE-nl.json.zip termentries`

## Starting server

1. All done. Start server: `NODE_ENV=production PORT=2016 node /opt/term.world/server.js`
2. See [Upstart script](https://gist.github.com/vnglst/326efb4dfc1245ac89ca) for Upstart config file.

## Specs

**Specs JSON (example)**

```javascript
[
  {
    "id": "IATE-1154672",
    "de": "Anlage in Fertigteil-Bauweise",
    "deUrl": "Anlage_in_Fertigteil-Bauweise",
    "nl": [
      "geprefabriceerde caisson-centrale"
    ],
    "note": "",
    "subjectFields": [
      {
        "termStr": "Mechanische industrie",
        "termUrl": "Mechanische_industrie"
      },
      {
        "termStr": "Elektronica en elektrotechniek",
        "termUrl": "Elektronica_en_elektrotechniek"
      }
    ]
  },
  {
    "id": "IATE-1668225",
    "de": "Anlage in Grundbesitz",
    "deUrl": "Anlage_in_Grundbesitz",
    "nl": [
      "investering in onroerende goederen"
    ],
    "note": "town planning:housing market",
    "subjectFields": [
      {
        "termStr": "Demografie en bevolking",
        "termUrl": "Demografie_en_bevolking"
      }
    ]
  }
]
```

**Specs URLs**

Specs for terms:

```url
home/{language-combination}/{term}

NL
home/duits-nederlands/Beispiel
home/nederlands-duits/voorbeeld
home/engels-nederlands/example
...etc

DE
home/deutsch-niederländisch/Beispiel
home/niederländisch-deutsch/voorbeeld
...etc.

EN
...etc
```

Specs for domains:

```url

NL
home/duits-nederlands/domein/chemie
DE
home/deutsch-niederländisch/fachgebiet/Chemie
EN
home/german-dutch/domain/chemistry
FR
...etc
```

**Specs Website**

- Term page
  - Below that: links to similar terms, including next + previous terms
  - Below that: link to my www.vangilst.de with anchor tag

- Subject field page
  - URL: home/domein/chemie
  - Start with descriptive SEO intro
  - List of large letters A, B, C, etc.
  - Below those letters max. 5 terms starting with that letter
  - Below that a link: more terms.

- Sitemap
