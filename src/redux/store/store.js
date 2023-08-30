import counterReducer from "../reducer/Reducer";

import {configureStore} from "@reduxjs/toolkit";

export default configureStore({

    reducer : {
        counter:counterReducer,
    }
})