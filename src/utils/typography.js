import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.googleFonts = [
  {
    name: "Noto Sans KR",
    styles: ["100", "300", "400", "500", "700", "900"],
  },
];
Wordpress2016.headerFontFamily = ["Noto Sans KR", "sans-serif"];
Wordpress2016.bodyFontFamily = ["Noto Sans KR", "sans-serif"];
Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a": {
      color: '#d9bf77'
    },
    "h3>a" : {
      color: '#639a67'
    },
    "article>header>h1" : {
      color: '#639a67'
    }
  }
}

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
