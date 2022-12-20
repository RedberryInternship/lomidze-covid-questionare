import { useForm } from 'react-hook-form';
import { InputText } from 'components/input-text';
import { useNavigate } from 'react-router-dom';
import { PersonalInformation as PersonalInformationType } from 'types';

export const PersonalInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();

  const onSubmit = (data: {} | PersonalInformationType) =>
    navigate('./form/covid');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        name='first_name'
        label='სახელი'
        placeholder='sas'
        validation={{ required: true, minLength: 3 }}
        messages={[
          { type: 'required', message: 'required' },
          { type: 'minLength', message: 'length is lower then 3' },
        ]}
        register={register}
        errors={errors}
      />
      <InputText
        name='last_name'
        label='გვარი'
        placeholder='sas'
        validation={{ required: true, minLength: 3 }}
        messages={[
          { type: 'required', message: 'required' },
          { type: 'minLength', message: 'length is lower then 3' },
        ]}
        register={register}
        errors={errors}
      />
      <InputText
        name='mail'
        label='მეილი'
        placeholder='sas'
        validation={{ required: true, pattern: /\S+@\S+\.\S+/ }}
        messages={[
          { type: 'required', message: 'required' },
          { type: 'minLength', message: 'not email' },
        ]}
        register={register}
        errors={errors}
      />
      <input type='submit' />
    </form>
  );
};