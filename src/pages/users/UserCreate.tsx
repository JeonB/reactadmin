import { RichTextInput } from 'ra-input-rich-text';
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  DateInput,
  Toolbar,
} from 'react-admin';
import { UnderlineInput } from '../../components';
import { CssVarsProvider } from '@mui/joy';
import { StyledEngineProvider } from '@mui/material';

const validateUserCreation = values => {
  const errors = {}; // validate의 값은 항상 record를 입력값으로 갖는 함수여야 하며, error는 object형태여야 함
  // 하단에 메시지로 표시됨
  if (!values.firstName) {
    errors.firstName = 'The firstName is required ';
  }
  if (!values.age) {
    // You can return translation keys
    errors.age = 'ra.validation.required';
  } else if (values.age < 18) {
    // Or an object if the translation messages need parameters
    errors.age = {
      message: 'ra.validation.minValue',
      args: { min: 18 },
    };
  }
  return errors;
};

export const UserCreate = () => {
  return (
    <Create>
      <SimpleForm validate={validateUserCreation}>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Age" source="age" />
        {/* <TextInput source="username" validate={[required()]} fullWidth />
        <TextInput source="id" />
        <TextInput source="address.street" />
        <TextInput source="phone" />
        <TextInput source="website" />
        <TextInput source="company.name" /> */}
        <StyledEngineProvider injectFirst>
          <CssVarsProvider>
            <UnderlineInput />
          </CssVarsProvider>
        </StyledEngineProvider>
      </SimpleForm>
    </Create>
  );
};
