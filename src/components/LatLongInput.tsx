// in LatLongInput.js
import TextField from '@mui/material/TextField';
import { useInput, required, InputHelperText } from 'react-admin';

export const BoundedTextField = props => {
  const { onChange, onBlur, label, helperText, ...rest } = props;
  const {
    field,
    fieldState: { isTouched, invalid, error },
    formState: { isSubmitted },
    isRequired,
  } = useInput({
    // Pass the event handlers to the hook but not the component as the field property already has them.
    // useInput will call the provided onChange and onBlur in addition to the default needed by react-hook-form.
    onChange,
    onBlur,
    ...rest,
  });

  return (
    <TextField
      {...field}
      label={label}
      error={(isTouched || isSubmitted) && invalid}
      helperText={
        helperText !== false || ((isTouched || isSubmitted) && invalid) ? (
          <InputHelperText
            touched={isTouched || isSubmitted}
            error={error?.message}
            helperText={helperText}
          />
        ) : (
          ''
        )
      }
      required={isRequired}
      {...rest}
    />
  );
};

const LatLngInput = props => {
  const { source, ...rest } = props;

  return (
    <span>
      <BoundedTextField
        source="lat"
        label="Latitude"
        validate={required()}
        {...rest}
      />
      &nbsp;
      <BoundedTextField
        source="lng"
        label="Longitude"
        validate={required()}
        {...rest}
      />
    </span>
  );
};
