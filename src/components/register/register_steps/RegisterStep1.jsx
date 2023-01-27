import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import {
    ButtonPrimaryStyle,
    ButtonSecondaryStyle,
    DivInputStyle,
    InputStyle,
    LabelStyle,
    PErrorStyle
} from '../../style/generalStyle'

const RegisterStep1 = ({ register, watch, userDataAvailable, setFormSteps }) => {
    const navigate = useNavigate();
    const { user } = useAuth0();

    return (
        <>
            <legend>Basic info</legend>

            <DivInputStyle>
                <LabelStyle>
                    Let's start with your username
                    <InputStyle
                        type="text"
                        placeholder={`${user?.nickname}` || "Username"}
                        required
                        {...register('username', {
                            required: true,
                            validate: (username) => userDataAvailable(username)
                        })}
                    />
                </LabelStyle>
                {!userDataAvailable(watch('username')) && (
                    <PErrorStyle>Sorry! This username is already taken</PErrorStyle>
                )}
            </DivInputStyle>

            <ButtonPrimaryStyle
                type="button"
                onClick={() => setFormSteps(prev => prev = { step: '4', fourthStep: true })}
            >
                Next
            </ButtonPrimaryStyle>
            <ButtonSecondaryStyle type="button" onClick={() => navigate('/')}>Back</ButtonSecondaryStyle>
        </>
    )
}

export default RegisterStep1