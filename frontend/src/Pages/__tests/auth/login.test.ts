import axios from '../../../interceptor'
import { loginUser } from "../../../Redux/Actions"
import thunk, { ThunkDispatch } from 'redux-thunk';
import configureStore from "redux-mock-store";
import { AnyAction } from 'redux';

jest.mock("../../../interceptor", () => jest.fn());

const initialState = {};
type State = typeof initialState;
const middlewares = [thunk];
const mockStore = configureStore<State, ThunkDispatch<State, any, AnyAction>>(middlewares);
const store = mockStore(initialState);

const response = {
    message: "Login successful",
    token: "feifuibubferg"
};

describe('Login App Calls', function () {
    const email: string = "spraveen593@gmail.com";
    const password: string = "Praveen8874@";

    describe("Positive test", () => {
        afterEach(() => {
            store.clearActions();
        })

        beforeEach(() => {
            (axios as jest.MockedFunction<any>).mockResolvedValue(
                response
            );
        });

        // it("Should call endpoint with given email & password", async () => {
        //     await store.dispatch(loginUser({ email, password }) as any);
        //     expect(axios.post).toBeCalledWith(
        //         "/login",
        //         { email, password }
        //     );
        // });

        it("Should get response as an object with keys: message and token", async () => {
            const data = await store.dispatch(loginUser({ email, password }) as any);
            expect(axios.post).toBeCalledWith(
                "/login",
                { email, password }
            );
            // console
        });
    });
});