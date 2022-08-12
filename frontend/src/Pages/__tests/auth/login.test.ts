import store from 'Redux/Store';
import axios from 'interceptor'
import { loginUser } from "Redux/Actions"


jest.mock("interceptor")


describe('Login App Calls', function () {
    const email: string = "spraveen593@gmail.com";
    const password: string = "Praveen8874@";

    describe("Positive test", () => {
        beforeEach(() => {
            (axios.post as jest.Mock).mockResolvedValue(
                {}
            );
        });

        it("Should call endpoint with given email & password", async () => {
            const data = await store.dispatch(loginUser({ email, password }) as any);
            expect(axios.post).toBeCalledWith(
                "/login",
                { data: { email, password } }
            );
        });

        it("Should get response as an object with keys: message and user", async () => {
            const data = await store.dispatch(loginUser({ email, password }) as any);
            expect(data).toHaveProperty("message");
            expect(data).toHaveProperty("user");
        });
    });
});