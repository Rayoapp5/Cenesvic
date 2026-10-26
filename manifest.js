{
  "id": "net.enmcine.catalog",
  "version": "1.0.0",
  "name": "ENMCINE",
  "description": "Películas y series de enmcine.uk",
  "resources": ["catalog", "meta", "stream"],
  "types": ["movie", "series"],
  "idPrefixes": ["enm:"],
  "catalogs": [
    {
      "type": "movie",
      "id": "enm_movies",
      "name": "ENMCINE Películas",
      "extra": [{"name": "search", "isRequired": false}, {"name": "skip", "isRequired": false}]
    },
    {
      "type": "series",
      "id": "enm_series", 
      "name": "ENMCINE Series",
      "extra": [{"name": "search", "isRequired": false}, {"name": "skip", "isRequired": false}]
    }
  ],
  "logo": "https://raw.githubusercontent.com/apprayo5/enmcine-addon/main/logo.png",
  "background": "https://raw.githubusercontent.com/apprayo5/enmcine-addon/main/bg.jpg",
  "behaviorHints": {"configurable": false}