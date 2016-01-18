# Terminologica (working title)

## Description

## Run

To start the app you'll need to:

1. ` git clone [repo link] `
2. ` cd [repo dir] `
3. ` npm install `
4. Copy zipped data to server: `cp database-seed/IATE-NL.json.zip ssh://root@terms.vangilst.eu/opt/IATE-NL.json.zip`
5. `cd [repo dir]/utils/zip2json2mongo`
6. Load data into server with node js script: `node index.js ../../json/IATE-nl.json.zip termentries`
7. All done. Start server: `NODE_ENV=production PORT=80 node start /opt/term.world/server.js`
8. See `utils/upstart-script` for Upstart config file.

## Specs

__Specs JSON (example)__

```javascript
  [{
    "id": "IATE-1162091",
    "domainCodes": [10],
    "terms": [{
      "lang": "de",
      "str": "Kontrolle dem Umweltsicherheit der Produkte",
      "note": "fullForm",
      "relCode": 3
    }, {
      "lang": "nl",
      "str": "milieucontrole op produkten",
      "note": "fullForm",
      "relCode": 3
    }]
  }, {
    "id": "IATE-46475",
    "domainCodes": [52],
    "langSet": [{
      "lang": "de",
      "str": "Umweltsicherheit",
      "note": "fullForm",
      "relCode": 3
    }, {
      "lang": "nl",
      "str": "milieuveiligheid",
      "note": "fullForm",
      "relCode": 3
    }]
  }];
```

__Specs URLs__

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

__Specs Website__

(1) Term page
* URL: see above
* Mobile first
- Searched term in large font in search box
- Clear table overview of translations
* Below that: generate descriptive SEO sentences
- (LATER: add random sentences, static, e.g. no change over time).
- Below that: links to similar terms, including next + previous terms
- Below that: link to my website with anchor tag

(2) Subject field page
* URL: home/domein/chemie
* Start with descriptive SEO intro
* List of large letters A, B, C, etc.
* Below those letters max. 5 terms starting with that letter
- Below that a link: more terms.

(3) Homepage
- URL: home/
-

(4) Sitemap
-
-

## To do

1. Make the end results of language combination extraction available online for translators.
2. Create a user interface for term search.
