// import React, { useContext, useState } from 'react'


// const ThemeContext = React.createContext();





// export const ThemeProvider =({children})=>{
//     const [theme,setTheme] = useState('cupcake')
//     const toogleTheme =(newTheme)=>{
//         setTheme(newTheme);
//         document.documentElement.setAttribute('data-theme', newTheme);
//     };
//     return(
//         <ThemeContext value={{theme,toogleTheme}}>
//             {children}
//         </ThemeContext>
//     )
// }

// export const useTheme =()=>useContext(ThemeContext);