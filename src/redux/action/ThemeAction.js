import { TOGGLE_THEME } from '../type/ThemeType'

export const toggleThemeAction = (themeName) => {
    
    return {
        type: TOGGLE_THEME,
        themeName
    }
}