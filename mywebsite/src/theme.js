//background colour would also need to be changed in index.css file located in the public folder. 
//Keep it same as primaryDark colour

const theme = {
  primaryMain : '#671717',         //the main dark colour on which theme is based on
  primaryDark : '#0D141B',         //the background colour of the website
  highlight : '#BF9277' ,          //neon or light colour for links and imp text
  primaryAccent: '#B45F5F',        //not so bright colour to support the main content 
  secondaryAccent: '#827C93',      //just like above but secondary, used rarely
  white: '#FBF9FA',                 //a very light colour, nearing white
  titleFont: '\'Roboto\', sans-serif' ,    //paste CSS font description from google fonts here, remember to link the font in index.html
  paraFont: '\'Roboto Mono\', monospace'   //same as above, title font is used in titles, para font is used in....you get it.
  //and dont forget to add \ escape sequence when necessary, ya noob
}

export default theme;