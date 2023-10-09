export default function MovingText({ text, textSize }) {
  return (
    <span className={`waviy ${textSize}`}>
      {text.split('').map((char, index) => (
        <span style={{ '--i': index + 1 }} key={index}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}