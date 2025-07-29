import { yugiohApi } from "../api/YugiohApi";
import { typoMonstruos } from "../misc/typeMonster";
import { setRandomCard1, startLoadingCard } from "./slices/GameSlice"

export const getMonsterCards = () => {
    return async (dispatch, getState) => {
        dispatch(startLoadingCard());
        try {
            const randomMonsterType = Math.floor(Math.random() * typoMonstruos.length);
            const resp = await yugiohApi.get(`?type=${typoMonstruos[randomMonsterType]}`);
            dispatch(setRandomCard1(getRandomCard(resp.data)));
        } catch (error) {
            throw (error);
        }
    }
}

const getRandomCard = (cards) => {
    const randomNumber = Math.floor(Math.random() * cards.data.length);
    const selectedCard = cards.data[randomNumber];
    return selectedCard;
}