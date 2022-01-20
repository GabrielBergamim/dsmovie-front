import './styles.css';

export interface FieldErrorProps {
  field: string;
  control: any;
}

export function FieldError({ field, control }: FieldErrorProps) {
  return (
    <>
      {control.touched[field] && control.errors[field] ? (
        <div>{control.errors[field]}</div>
      ) : null}
    </>
  );
}