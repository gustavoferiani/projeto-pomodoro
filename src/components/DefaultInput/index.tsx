import styles from './styles.module.css';

//Props objetos
type DefaultInputProps = {
  id: string;
  labelText?: string;
  /* Union Type = ou um ou outro
  type: 'text' | 'number' | 'search' |
  */
  /* type: string; //propriedade tipo string */

  /* Intersection JS "&" p/ usar recursos/tipos JSX
  type: 'text' | 'number' | 'search'; */
} & React.ComponentProps<'input'>; /* TAGS do JSX */

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    /* <> </> = Fragmento */
    <>
      {/* {labelText ? 'Verdadeiro' : 'Falso'} {/* Condicional // V ou F */}
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
