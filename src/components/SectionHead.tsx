interface Props {
  num: string;
  title: string;
  aside?: string;
}

export default function SectionHead({ num, title, aside }: Props) {
  return (
    <div className="section-head">
      <span className="num">{num}</span>
      <h2>{title}</h2>
      {aside && <span className="aside">{aside}</span>}
    </div>
  );
}
