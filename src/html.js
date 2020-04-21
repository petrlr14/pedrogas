import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script
          src="https://kit.fontawesome.com/248332ce05.js"
          crossorigin="anonymous"
        ></script>

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="light">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                window.__onThemeChange = function(){}
                function setTheme(theme){
                  window.__theme = theme;
                  document.body.className = theme;
                  window.__onThemeChange(theme);
                }
                
                let preferedTheme;
                
                try{
                  preferedTheme = localStorage.getItem('theme')
                }catch(e){}

                window.__setPreferedTheme = function(theme){
                  setTheme(theme)
                  localStorage.setItem('theme', theme)
                }

                const darkQuery = window.matchMedia('(prefers-color-scheme: light)');
                darkQuery.addListener(function(e) {
                  window.__setPreferredTheme(e.matches ? 'light' : 'dark')
                });

                setTheme(preferedTheme || (darkQuery.matches ? 'light' : 'dark'))
              })();
            `,
          }}
        />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
