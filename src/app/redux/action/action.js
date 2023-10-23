import api from "../api";
// NEXT_PUBLIC_API_KEY 무조건 들어가야한다.
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function getTest() {

    return async (dispatch) => {
        try {
            dispatch({ type: "GET_REQUEST" });
            const testApi = api.get(`abandonmentPublicSrvc/sido?numOfRows=3&pageNo=1&serviceKey=${API_KEY}&_type=json`)

            let [test] = await Promise.all([testApi])

            dispatch({
                type: "GET_DATA",
                payload: {
                    test: test.data,
                }
            });
        } catch (error) {
            dispatch({ type: "GET_FAILURE" })
        }
    }
}

function getAnimals(upkind) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_REQUEST" });
            const animalsApi = api.get(`abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&pageNo=1&numOfRows=1000&serviceKey=${API_KEY}&upkind=${upkind}&_type=json`);

            let [animal] = await Promise.all([animalsApi])

            dispatch({
                type: "GET_ANIMAL_DATA",
                payload: {
                    animal: animal.data,
                }
            });
        } catch (error) {
            dispatch({ type: "GET_FAILURE" })
        }

    }
}

function getAnimalsDetail() {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_REQUEST" });
            const animalDetailApi = api.get(`abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20231231&pageNo=1&numOfRows=20&serviceKey=${API_KEY}&_type=json`);

            let [animal_detail] = await Promise.all([animalDetailApi])

            dispatch({
                type: "GET_ANIMAL_DETAIL_DATA",
                payload: {
                    animal_detail: animal_detail.data,
                }
            });
        } catch (error) {
            dispatch({ type: "GET_FAILURE" })
        }

    }
}

function getAnimalList(data) {
    let upKind = data[0] == "전체" ? "" : data[0] == "개" ? 417000 : 422400;

    return async (dispatch) => {
        try {
            dispatch({ type: "GET_REQUEST" });
            const animalList = api.get(`abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20231231&pageNo=${data[1]}&numOfRows=20&serviceKey=${API_KEY}&upkind=${upKind}&_type=json`)

            let [animal_list] = await Promise.all([animalList])

            dispatch({
                type: "GET_ANIMAL_LIST",
                payload: {
                    animal_list: animal_list.data,
                }
            })
        } catch (error) {
            dispatch({ type: "GET_FAILURE" })
        }
    }
}

export const Action = {
    getTest, getAnimals, getAnimalsDetail, getAnimalList
}