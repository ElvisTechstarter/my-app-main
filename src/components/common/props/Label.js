function Label({ text, style, classname }) {
  return (
    <label classname={classname} style={style}>
      {text}
    </label>
  );
}

export default Label;
