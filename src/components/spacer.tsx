export default function Spacer({ bgColor }: { bgColor: string }) {
  return <div id="spacer" className={"flex-1 " + bgColor}></div>;
}
