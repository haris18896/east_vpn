export const initialFLowState = {
  path: 'home',
}

export const FlowReducer = (state, action) => {
  switch (action.type) {
    case 'FIELD_CHANGE':
      return { ...state, ...action.payload }

    case 'SCROLL_TO_Home':
      return {
        ...state,
        scrollToHome: true,
        scrollToAbout: false,
        scrollToPricing: false,
        scrollToFAQs: false,
        scrollToContact: false,
        path: 'home',
      }
    case 'SCROLL_TO_ABOUT':
      return {
        ...state,
        scrollToHome: false,
        scrollToAbout: true,
        scrollToPricing: false,
        scrollToFAQs: false,
        scrollToContact: false,
        path: 'about',
      }
    case 'SCROLL_TO_PRICING':
      return {
        ...state,
        scrollToHome: false,
        scrollToAbout: false,
        scrollToPricing: true,
        scrollToFAQs: false,
        scrollToContact: false,
        path: 'pricing',
      }
    case 'SCROLL_TO_FAQ':
      return {
        ...state,
        scrollToHome: false,
        scrollToAbout: false,
        scrollToPricing: false,
        scrollToFAQs: true,
        scrollToContact: false,
        path: '',
      }
    case 'SCROLL_TO_CONTACT':
      return {
        ...state,
        scrollToHome: false,
        scrollToAbout: false,
        scrollToPricing: false,
        scrollToFAQs: false,
        scrollToContact: true,
        path: 'contact',
      }

    case 'CLEAR_ALL_SCROLLS':
      return {
        ...state,
        scrollToHome: false,
        scrollToAbout: false,
        scrollToPricing: false,
        scrollToFAQs: false,
        scrollToContact: false,
      }

    default:
      return state
  }
}
