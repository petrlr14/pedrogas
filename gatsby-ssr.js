const React = require("react")
const App = require("./src/App").App

exports.wrapRootElement = ({ element }) => {
  return <App>{element}</App>
}

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: `
        (()=>{

            //toggle dark theme
            window.__onThemeChange = function(){}
            function setTheme(theme){
              window.__theme = theme;
              document.body.className = theme;
              window.__onThemeChange(theme);
            }
            
            let preferredTheme;
            
            try{
              preferredTheme = localStorage.getItem('theme')
            }catch(e){}

            window.__setPreferredTheme = function(theme){
              setTheme(theme)
              localStorage.setItem('theme', theme)
            }

            const darkQuery = window.matchMedia('(prefers-color-scheme: light)');
            darkQuery.addListener(function(e) {
              window.__setPreferredTheme(e.matches ? 'light' : 'dark')
            });

            setTheme(preferredTheme || (darkQuery.matches ? 'light' : 'dark'))
          })();
        `,
      },
    }),
  ])
}
