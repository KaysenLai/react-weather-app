import { SET_MAIN_IMG, SET_SAVEBOX_IMG, STORE_ONE_IMG, STORE_SEARCH_IMG } from '../actions/actionTypes';

const initialState = {
  currentImages: {
    mainImage: {
      urls: {
        raw:
          'https://images.unsplash.com/photo-1566734889071-7ba049ccc672?ixid=MXwyMDIzMDV8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1',
        full:
          'https://images.unsplash.com/photo-1566734889071-7ba049ccc672?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMDIzMDV8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=85',
        regular:
          'https://images.unsplash.com/photo-1566734889071-7ba049ccc672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDIzMDV8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
        small:
          'https://images.unsplash.com/photo-1566734889071-7ba049ccc672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDIzMDV8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=400',
        thumb:
          'https://images.unsplash.com/photo-1566734889071-7ba049ccc672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDIzMDV8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=200',
      },
      links: {
        self: 'https://api.unsplash.com/photos/LyXjaTNxUcE',
        html: 'https://unsplash.com/photos/LyXjaTNxUcE',
        download: 'https://unsplash.com/photos/LyXjaTNxUcE/download',
        download_location: 'https://api.unsplash.com/photos/LyXjaTNxUcE/download',
      },
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_ONE_IMG:
      return { ...state, currentImages: { ...state.currentImages, mainImage: action.payload } };
    case STORE_SEARCH_IMG:
      return { ...state, searchedImgList: action.payload };
    case SET_MAIN_IMG:
      return { ...state, currentImages: { ...state.currentImages, mainImage: action.payload } };
    case SET_SAVEBOX_IMG: {
      if (action.payload === '1')
        return {
          ...state,
          currentImages: { ...state.currentImages, firstSaveBoxImage: state.currentImages.mainImage },
        };
      if (action.payload === '2')
        return {
          ...state,
          currentImages: { ...state.currentImages, secondSaveBoxImage: state.currentImages.mainImage },
        };
      break;
    }
    default:
      return state;
  }
};
