# TERM.LAND

# Start server

NODE_ENV=production PORT=80 pm2 start /opt/term.world/server.js

# Roadmap

Needs updating

## PHASE 1a
Generate multipage website from short terminology list in JSON format.

__Specs JSON__

```javascript
    {
      "source": "Van Gilst",
      "terms":  [
        { // term object
          "subjectfieldnr": "1",
          "subjectfield": "IT",
          "en": "Good morning",
          "de": "Guten Morgen",
          "nl": "Goedemorgen"
        },
        {
          "subjectfieldnr": "2",
          "subjectfield": "education",
          "de": "test",
          "nl": "test"
        }
      ]
    }
```

__Specs URLs__

For inspiration, see dict.cc. Old specs:

```url
terms.rootpath/{language-combination}/{subjectfield}/{term}

terms.vangilst.de/duits-nederlands/
        /IT/voorbeeldterm
```

New specs for terminology:

```url
term.world/{language-combination}/{term}

NL
term.world/duits-nederlands/Beispiel
term.world/nederlands-duits/voorbeeld
term.world/engels-nederlands/example
...etc

DE
term.world/deutsch-niederländisch/Beispiel
term.world/niederländisch-deutsch/voorbeeld
...etc.

EN
...etc

```

Specs for subject fields:

```url

NL
term.world/vakgebied/chemie
DE
term.world/fachgebiet/Chemie
EN
term.world/subject/chemistry
FR
...etc
```


__Specs Website__

(1) Term page
* Mobile first
* Searched term in large font
* Clear table overview of translations
* Below that: generate descriptive SEO sentences
* (LATER: add random sentences, static, e.g. no change over time).
* Below that: links to similar terms, including next + previous terms
* Below that: link to my website with anchor tag

(2) Subject field page
* URL: root/nl/source/subjectfield
* Start with descriptive SEO intro
* List of large letters A, B, C, etc.
* Below those letters max. 5 terms starting with that letter
* Below that a link: more terms.

(3) First letter page
* URL: root/nl/source/subjectfield/letter-a
* Descriptive SEO intro
* Long list of first 100 terms
* More link: ../letter-a-p1
* etc.

## PHASE 2
Use a database for the JSON requests.

(1) Specs database format

(2) Write a script to add add a JSON file to the database

(3) Write a function to request data from database

## PHASE 2b
Start adding IATE to the website. Start with relevant subject fields first.

__Requirements__

(1) Write a script to quickly convert tbx (xml) > json
* Filter tbx by language combination
* Filter tbx by subject field (number)

(2) Test with large number of entries, does the database on digitalocean hold?

## PHASE 2c
Make the end results of language combination extraction available online for translators.

__Specs__
* Select language, select subject field
* Option 1: Download as tbx
* Option 2: Download as csv

## PHASE 3
Create a user interface for term search. Inspired by tilde?
