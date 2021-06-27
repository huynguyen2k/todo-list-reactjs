import { themes } from '../../component/themeConfig'
import { TOGGLE_THEME } from '../type/ThemeType'


const themeReducer = {
    selectedTheme: themes.darkTheme,
}

const ThemeReducer = (state = themeReducer, action) => {

    switch (action.type) {
        case TOGGLE_THEME: {

            if (action.themeName === 'dark-theme') {
                state.selectedTheme = themes.lightTheme
            } else {
                state.selectedTheme = themes.darkTheme
            }

            break
        }

        default:
    }

    return {...state}
}

export default ThemeReducer