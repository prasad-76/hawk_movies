export default function FormControl({ id, label, styles = "", ...other }) {
  return <div className={`mb-8 md:mb-0 ${styles}`}>
    <h3 className="mb-4"><label htmlFor={id}>{label}</label></h3>
    <input
      id={id}
      {...other}
      className="input"
    />
  </div>
}