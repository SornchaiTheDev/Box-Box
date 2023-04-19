interface Props {
    tag: string;
}
function Badge({tag}: Props) {
  return (
    <div className="px-4 py-1 bg-lime-200 rounded-full flex gap-1 w-fit font-bold text-sm">
      <span className="text-slate-500">#</span>
      {tag}
    </div>
  );
}

export default Badge;
