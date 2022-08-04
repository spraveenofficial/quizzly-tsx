import { useState } from "react";
import { Profile } from "../Profile";

const ProfilePage: React.FC = () => {
    type IProfileSteps = {
        [key: number]: number;
    }

    const steps: IProfileSteps | any = {
        1: Profile
    }

    const [activeStep, setActiveStep] = useState<number>(1);
    const Step = steps[activeStep];
    return (
        <Step onNext={() => setActiveStep((prev) => prev + 1)} />
    )
}




export { ProfilePage }