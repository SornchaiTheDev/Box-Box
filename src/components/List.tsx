import Badge from "./Badge";

interface Props {
  title: string;
  date: string;
  time: string;
  description: string;
  tag: string[];
}
function List({ title, date, time, description, tag }: Props) {
  return (
    <>
      <a href="" className="flex gap-10 h-full">
        <div className="w-48 md:w-72 rounded-md bg-slate-200"></div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex gap-1">
            {tag.map((tag) => (
              <Badge key={tag} tag={tag} />
            ))}
          </div>
          <h2 className="md:text-3xl font-bold">{title}</h2>
          <p className="text-slate-500">21 ก.พ. • อ่าน {time} นาที</p>
          <p className="text-sm md:text-base mt-2">{description}</p>
          <div className="group">อ่านเลย &rarr;</div>
        </div>
      </a>

      <hr className="border-b border-dashed" />
    </>
  );
}

export default List;
