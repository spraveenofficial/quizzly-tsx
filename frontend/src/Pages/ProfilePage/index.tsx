import { useState } from "react";
import { Profile, CreateQuiz } from "..";

const ProfilePage: React.FC = () => {
    type IProfileSteps = {
        [key: number]: React.FC;
    }

    const steps: IProfileSteps | any = {
        1: Profile,
        2: CreateQuiz
    }

    const [activeStep, setActiveStep] = useState<number>(1);
    const Step = steps[activeStep];
    return <Step onNext={() => setActiveStep((prev) => prev + 1)} />
}




export { ProfilePage }