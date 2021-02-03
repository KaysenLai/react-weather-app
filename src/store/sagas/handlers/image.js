import { call, put, select } from 'redux-saga/effects';

import { setMainImg, storeOneImg, storeSearchImg } from '../../actions/actionCreator';
import { REQUEST_ONE_IMG, REQUEST_SEARCH_IMG } from '../actions/asyncActionTypes';
import { requestOneImg, requestSearchImg } from '../requests/image';

export function* asyncHandleImage(action) {
  switch (action.type) {
    case REQUEST_ONE_IMG: {
      try {
        const imgId = action.payload;
        const oneImgResponse = yield call(requestOneImg, imgId);
        yield put(storeOneImg(parseOneImgResponse(oneImgResponse)));
      } catch (e) {
        console.log(e);
      }
      break;
    }
    case REQUEST_SEARCH_IMG: {
      try {
        const cityName = action.payload;
        const searchImgResponse = yield call(requestSearchImg, cityName);
        yield put(storeSearchImg(parseSearchImg(searchImgResponse)));
        const searchedImgList = yield select(selectSearchedImgList);
        yield put(setMainImg(searchedImgList[0]));
      } catch (e) {
        console.log(e);
      }
      break;
    }
    default:
      return;
  }
}

function parseOneImgResponse(oneImgResponse) {
  const { urls, links } = oneImgResponse.data;
  const properSizeFull = urls.full + '&w=1920';
  const properSizeUrls = { ...urls, full: properSizeFull };
  return { urls: properSizeUrls, links };
}

function parseSearchImg(searchImgResponse) {
  const imgList = searchImgResponse.data.results;
  return imgList.map((item) => {
    return {
      id: item.id,
      urls: item.urls,
      links: item.links,
    };
  });
}

const selectSearchedImgList = (state) => state.images.searchedImgList;
