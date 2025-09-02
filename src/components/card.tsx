interface Props {
  bg: string;
  type: string;
  span: string;
}

export default function Card({ bg, type, span }: Props) {
  return (
    <div className={span}>
      <div className={type} style={{ backgroundColor: bg }}></div>
    </div>
  );
}
