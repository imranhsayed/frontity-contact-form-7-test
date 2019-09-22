const settings = {
  "name": "frontity-contact-form-7",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
	          [
		          "Home",
		          "/"
	          ],
	          [
		          "Nature",
		          "/category/nature/"
	          ],
	          [
		          "Travel",
		          "/category/travel/"
	          ],
	          [
		          "Japan",
		          "/tag/japan/"
	          ],
	          [
		          "About Us",
		          "/about-us/"
	          ],
	          [
		          "Contact Us",
		          "/contact-us/"
	          ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://test.frontity.io/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
